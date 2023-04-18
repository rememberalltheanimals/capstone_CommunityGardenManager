# Community Garden Manager
### capstone_CommunityGardenManager -- CVTC IT Capstone Team 2 project
Community Garden Manager is a website that will allow clients to manage a community garden within their city. This means that a city or person can use Community Garden Manager to set up a webpage that will allow users to gain information on and completely manage all aspects that a client would like to, right from our site. This includes information on plots that are available to be used, what times the garden will be open, it will help with scheduling events such as watering, weeding, and more, and provide information on plants that would thrive in the environment in which the garden is located. Not only will the site include this kind of information, specific to a client's specific community garden, but it will also provide general information about gardening and plantlife, all while providing a fun and easy to use interface.

Along with the functionality discussed above, Community Garden Manager will also allow for communication, not only between members of the same community garden, but between all users of the site. Clients will be able to share gardening advice and tips, show off their harvests, and ask gardening related questions. This will allow our users to exprience the same sense of community both at the garden and in the comfort of their own home.

## Installation
Community Garden Manager will utilize JavaScript, Express, and EJS for the front-end portion. This way, the developers can make the web pages more dynamic with an emphasis on functionality. The back end of the website will use Node JS and PostgreSQL. The Node JS will help work with the JavaScript framework while the PostgreSQL will serve as the database for the project.

The installation and setup procedure for our project is similar to most node project setups. To accommodate group work on this project we started by creating a git repository, created and hosted on GitHub, setting it up as a Node template. This will allow group members to clone it locally and allow members to push and pull directly. Our group also took advantage of Git/Git Bash to clone and locally work on this project. 

To accomplish this, it involved ensuring that our SSH keys were set up correctly, allowing communication between the GitHub repository and Git Bash on our local systems, that is when authenticated correctly.

Once we had a copy or clone of our repository locally, we were able to connect to Pivotal Tracker. This integration between GitHub and Pivotal Tracker will also be essential in accommodating our group work. To accomplish this, an integration was established on Pivotal Tracker and webhooks were added on GitHub using the payload URL and secret key. This allowed for our first test of our tech stack and once it passed successfully, we were able to finish our first chore using correct syntax, story id, and commits and push from Git Bash, proving successful communication.

From there, we were able to create the Node.js skeleton for our project. Once inside the directory, using Git Bash, we were simply able to install the node package manager, using the command ‘npm init –yes’. This not only installed the package manager, but also created the skeleton and accepted all defaults. At this point, we were able to use the node package manager to install the modules, or packages, that we would need for our project. 

We installed express, for our web server framework, EJS, for embedded JavaScript with the web server, Path, to easily manipulate the paths on the webserver, dotenv, to use environment variables to control access to the database, and PG, for accessing Postgres. This completed the basic framework for our project.

The next step was creating web pages. The first was our server.js page, which we used to set up and access the modules and packages that we installed, as well as setting up a port for our web server to listen to. We also used server.js for communication with the express web server and configured it and the paths for it. We finished the configuration by establishing that we were to use EJS for our view engine.

Then was time to validate the tech stack by making a simple webpage with some functionality that would not only use express and EJS to create an html webpage with functionality, but also needed to test communication between the webpage and the database in various ways including Select, Insert, and Delete. To accomplish this, we created a very simple page that created buttons by getting information from the database and when clicked, Inserted information regarding number of times the water had been watered that month. Quite simple, but this allowed us to test all systems and software in our technology stack.

We tested JavaScript literals and embedded JavaScript by creating an index.ejs page, which also utilized client-side JavaScript. Similarly, we used the Fetch API, created a schema.sql for our database and connected to PostgreSQL making sure to add database support to the server. 

We finished by creating a database on Render to recreate the data and connected the database to the web service on Render, making sure to add our Render url to GitHub to allow for others to view and deploy our website.

