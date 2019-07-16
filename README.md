# Eat the Burger
----------
## Table of Contents 
1. [Overview](#overview)
2. [Technologies](#technologies)
3. [Local Installation](#installation)
4. [App Display](#display)


<a name="overview"></a>
## Overview 
A node application that implements CRUD methodology and follows MVC pattern. This app allows user to create burger that they love and store them via MySQL database. One of the columns on the `burgers` table is `devoured` which is a `BOOLEAN`. Once the user click the "Devour It" button on a burger, the devoured boolean on that burger is set to true. Burgers that have not yet been devoured are displayed on the left side of the screen, whereas those that have been devoured are displayed to the right. The user is also able to delete the burger from the database by clicking on the Clean the dishes button.

<a name="technologies"></a>
## Technologies
 * Express.js 
 * Sequelize
 * MySQL
    * Local database
 * JawsDB
    * Deployed Heroku database 
 * Handlebars 
 * Node.js | JavaScript
    * Ajax calls
 * jQuery
 * HTML
 * CSS
 * Bootstrap

<a name="installation"></a>
## Local Installation
### Step 1: Git Clone
Clone Burger-Sequelize to your local git repo like the following:
> git clone git@github.com:sajadgzd/Eat-the-Burger.git

or

> git clone https://github.com/sajadgzd/Eat-the-Burger.git

The Burger-Sequelize project and its files should now be in your project folder.

### Step 2: Install Dependencies
Install the following dependencies listed in the `package.json` file: 

> npm install

Once completed, you will see a `node_modules` folder in your local repo.

The dependencies should now be in the local `node_modules` folder.

### Step 3: Set up MySQL database 

Via terminal type in these bash command once you are in the db directory 

> mysql -u root -p
>
> enter your MySQL password 
>
> source schema.sql 
>
> exit 

If you want to create some burger templates, you may also run the following in the db directory (optional)

> mysql -u root -p
>
> enter your MySQL password 
>
> source seeds.sql
>
> exit 

### Step 4: Launch app 
Via terminal type in these bash command once you are in the Eat-the-Burger root directory 

> node server.js 

Go to your browser and type in `localhost:8080` in your URL bar. Now you should see the application open locally.
To visit deployed application, [click here](https://sensationnel-bastille-85303.herokuapp.com/)

<a name="display"></a>
## App Display
### Gif Demo
![Demo](/public/assets/images/demo.gif)
### Live Demo
[Click Here](https://sensationnel-bastille-85303.herokuapp.com/)
