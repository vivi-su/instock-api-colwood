const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require("uuid");

exports.index = (_req, res) => {
  knex("inventories")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Inventory: ${err}`));
};

exports.addInventoryItem = (req, res) => {
  // Validate the request body for required data
  if (
    !req.body.warehouse_id ||
    !req.body.item_name ||
    !req.body.description ||
    !req.body.category ||
    !req.body.status ||
    !req.body.quantity
  ) {
    return res
      .status(400)
      .send(
        "Please make sure to provide Warehouse,item name, description, category, status and quantity fields."
      );
  }

  const newInventoryItemId = uuidv4();
  knex("inventories")
    .insert({ ...req.body, id: newInventoryItemId })
    .then((_data) => {
      knex("inventories")
        .where({ id: newInventoryItemId })
        .then((data) => {
          res.status(201).json(data[0]);
        });
    })
    .catch((err) => res.status(400).send(`Error creating inventory Item: ${err}`));
};

exports.deleteInventoryItem = (req, res) => {
  knex("inventories")
    .delete()
    .where({ id: req.params.id })
    .then(() => {
      // For DELETE response we can use 204 status code
      res
        .status(204)
        .send(`InventoryItem with id: ${req.params.id} has been deleted`);
    })
    .catch((err) =>
      res
        .status(400)
        .send(`Error deleting InventoryItem ${req.params.id} ${err}`)
    );
};