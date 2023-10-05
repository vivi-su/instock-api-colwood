# InSTOCK

Responsive Web Design (RWD) **Full-stack React/Express APP** built in week-long sprint with a group of 4: Anastasia Zaika, Aline Bellozo, Priscila Moura and Vivi Su.

- View the front-end repo here https://github.com/vivi-su/instock-colwood

## Overview

In a team of four, our task was to develop an inventory management system for a fictional company. 

We were provided with a Figma design file and were responsible for constructing a backend-end using a relational MYSQL databse, connected with Knex.js and a server using Express.js.

The front-end was built using React (Axios,Scss and React Router Dom). The app allow user to view warehouse and inventory data as well as add, edit, and delete warehouses and inventories.

### Screenshots

![Instock1](https://github.com/vivi-su/instock-colwood/assets/81454201/a6c918d9-8053-4515-8a16-3ed31e51ec35)

![Instock2](https://github.com/vivi-su/instock-colwood/assets/81454201/9cd292a5-9b4b-4ba4-9044-363ef19ab249)

![Instock3](https://github.com/vivi-su/instock-colwood/assets/81454201/5db22376-6251-4d97-accf-3d0c213b59b8)

![Instock4](https://github.com/vivi-su/instock-colwood/assets/81454201/edebe93c-a88b-4060-bf5f-dfd5d97c9858)

### Developer Installation Instructions

#### Set Up The Database

1. Create an .env file at back-end app with the following contents:

   
   `DB_LOCAL_DBNAME = "<your_db_username>";`
   
   `DB_LOCAL_USER = "<your_db_user>";`

   `DB_LOCAL_PASSWORD = "<your_db_password>";`

   `PORT = "<your_port>";`
   

3. Create your MYSQL database, you can call it 'instock'.
   In the terminal, enter command lines as follow:
   
   `mysql -u root -p`
   
   `CREATE DATABASE instock;`

   `USE instock;`
   
5. Create the table at back-end app
   ` npx knex migrate:latest`
   
7. Seed your data
   `npx knex seed:run` to execute all seed files and add seed data to each table

#### Start Your Server
- cd into the server folder
- npm run dev

#### Start Your Client
- cd into the client folder
- npm start

### Tech Stack
Back-end built in NodeJS and ExpressJS on the foundation of MYSQL database and connected with Knex.
Front-end built in React(create-react-app), BEM/SCSS and react-router-dom.
* npm to install packages that will aid in project development
* Postman

### What We Learned
#### Using Branches effectively and Selecting Relative Tickets 
We took pride in successfully completing this project as a collaborative team effort. Along the way, we encountered challenges, including merge conflict in the later stages and differing opinions on React State management. However, we worked closely, continuously sharing our thoughts throughout the week. One area for improvement is our approach to selecting relevant tickets from the project management board in JIRA more strategically. This would help us from duplicating code for similar pages, such as viewing the Warehouse and Inventory tables, as well as adding and editing of Warehouse and Inventory.
