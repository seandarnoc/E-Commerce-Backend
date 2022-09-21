# E-commerce Back End 

# Description

## User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria 
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database


# First Steps

run sql to load schema after login to mysql write "source db/schema.sql"
then
npm run seed
then 
npm start
use postman or insomnia to run CRUD

# Dependencies
sequelize
mysql2
dotenv


# links 

https://github.com/seandarnoc/E-Commerce-Backend
1st video: https://drive.google.com/file/d/1WTu98H5w2MzKG9rIF_J6iI4AuCtHev9S/view
2nd video: https://drive.google.com/file/d/1eBQXBm4EzwCn0Ogdv3vnMw0etPjLVV6L/view
