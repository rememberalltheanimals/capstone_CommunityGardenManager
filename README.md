# Community Garden Manager
### capstone_CommunityGardenManager -- CVTC IT Capstone Team 2 project
Community Garden Manager is a website that will allow clients to manage a community garden within their city. This means that a city or person can use Community Garden Manager to gain information on and completely manage all aspects of a community garden. From learning general information about plants to completely designing their garden, all of this can be done right from our site. This also includes information on hardiness zones and plants that will thrive in the environment in which the garden is located, sharing and viewing your favorite plants, helping the community to decide which plants will be included in the garden, and much more. Not only will the site include this kind of information, specific to a client's specific community garden, but it will also provide general information about gardening and plant life, all while providing a fun and easy to use interface.

Along with the functionality discussed above, Community Garden Manager will also allow for communication, not only between members of the same community garden, but between all users of the site. Clients will be able to share gardening advice and tips, show off their harvests, and ask gardening related questions. This will allow our users to experience the same sense of community both at the garden and in the comfort of their own home.

## Key Features
- View a list of other member's favorite plants in Members Favorites
- Add your own favorites to your profile to share with the community
- Keep growing tips and notes about your favorite plants
- Use Member's Favorites to decide which plants to grow in your community garden
- Poll about what the members’ favorite plants are
- Design your community garden or individual garden plots with Garden Designer
- Download your designs for future use
- View a gallery of images from others Community Gardens
- Communicate with other members via Gardener Chat
- Find out your planting zone using your zipcode
- Search what trees grow best in your zone
- Learn general information about garden plants, such as sun exposure and sowing method
- Contact Community Garden Manager Administrators
- Create a member profile
- And More ... new features being added constantly!

## How to View and Use Website
Our website and it's database are being publicly hosted on Render.com. Therefore, if you are interested in accessing our website, feel free to follow this link to [Community Garden Manager](https://community-garden-manager-hs4r.onrender.com/) or search by the URL https://community-garden-manager-hs4r.onrender.com/

## Installation (How to contribute)
To contribute, either email us directly at CommunityGardenManagerCGM@gmail.com, or submit a pull request by following these steps:
- Install software used in Tech Stack
  - Software includes:
   - Node.js
   - PostgreSQL
   - Express
   - EJS
- Fork this repo (button on the top right)
- Clone your forked repo git clone
- Use Node manager to install project dependencies (npm install)
- If on windows (add .env file that includes Database string and any API keys)
- Add schema to PostgreSQL
- Make your changes
- Run and check your changes on your browser at your localhost address. (localhost:5163)
- Commit your changes, and push it to your forked repo
- Click "Create Pull-request" when looking at your forked repo on Github.

## Our Initial Process
Community Garden Manager will utilize JavaScript, Express, and EJS for the front-end portion. This way, the developers can make the web pages more dynamic with an emphasis on functionality. The back end of the website will use Node JS and PostgreSQL. The Node JS will help work with the JavaScript framework while the PostgreSQL will serve as the database for the project.

The installation and setup procedure for our project is similar to most node project setups. To accommodate group work on this project we started by creating a git repository, created and hosted on GitHub, setting it up as a Node template. This will allow group members to clone it locally and allow members to push and pull directly. Our group also took advantage of Git/Git Bash to clone and locally work on this project. 

Once we had a copy or clone of our repository locally, we were able to connect to Pivotal Tracker. This integration between GitHub and Pivotal Tracker will also be essential in accommodating our group work. To accomplish this, an integration was established on Pivotal Tracker and webhooks were added on GitHub using the payload URL and secret key. This allowed for our first test of our tech stack and once it passed successfully, we were able to finish our first chore using correct syntax, story id, and commits and push from Git Bash, proving successful communication.

From there, we were able to create the Node.js skeleton for our project. Once inside the directory, using Git Bash, we were simply able to install the node package manager, using the command ‘npm init –yes’. This not only installed the package manager, but also created the skeleton and accepted all defaults. At this point, we were able to use the node package manager to install the modules, or packages, that we would need for our project. 

We installed express, for our web server framework, EJS, for embedded JavaScript with the web server, Path, to easily manipulate the paths on the webserver, dotenv, to use environment variables to control access to the database, and PG, for accessing Postgres. This completed the basic framework for our project.

The next step was creating web pages. The first was our server.js page, which we used to set up and access the modules and packages that we installed, as well as setting up a port for our web server to listen to. We also used server.js for communication with the express web server and configured it and the paths for it. We finished the configuration by establishing that we were to use EJS for our view engine.

Then was time to validate the tech stack by making a simple webpage with some functionality that would not only use express and EJS to create an html webpage with functionality, but also needed to test communication between the webpage and the database in various ways including Select, Insert, and Delete. To accomplish this, we created a very simple page that created buttons by getting information from the database and when clicked, Inserted information regarding number of times the water had been watered that month. Quite simple, but this allowed us to test all systems and software in our technology stack.

We tested JavaScript literals and embedded JavaScript by creating an index.ejs page, which also utilized client-side JavaScript. Similarly, we used the Fetch API, created a schema.sql for our database and connected to PostgreSQL making sure to add database support to the server. 

We finished by creating a database on Render to recreate the data and connected the database to the web service on Render, making sure to add our Render url to GitHub to allow for others to view and deploy our website.

Once our website was hosted on Render and our initial Tech Stack was validated we began implementing our agreed upon features, as well as using CSS to style our webpage.
Our features and current webpages (As of 05/18/2023) include:
 -  Home Page (with Image based navigation)
 -  Member's Favorites
 -  Garden Designer
 -  Image Gallery
 -  Gardener Chat
 -  Zone by ZipCode
 -  Zone Search
 -  Plant Search
 -  About CGM
 -  Create Account

We will continue to update you on our journey as development continues. To learn more, view [Community Garden Manager](https://community-garden-manager-hs4r.onrender.com/) on Render.com!

## Issues along the way and To Dos
One major issue we ran into along the way was lack of APIs to use for our website features. For instance, we were unable to find any APIs that include Hardiness Zone information for garden plants. The only 
API we found with similar functionality contained information on trees. Therefore, currently, our initial release has a feature to search for plants by your zone, but unfortunately it only contains information on
trees that grow in that desired zone. This will be updated as new APIs are released and as soon as we find one that is suitable.

Another issue we faced resulted due to simply running out of time, at the moment our create account and login page is rather limited. A user is able to create an account which is saved to the database,
unfortunately, currenlty, the user account does not unlock any unique features or have much functionality. A user can use this username to add to the favorites, but adding is not limited to only those
who have an account created. Future releases will restrict certain activities to those who have an account and are logged in.

- Other future feature ideas:
  - As a user, I should be able to reserve an individual plot in the garden
  - As a user, I should be able to keep track of the times I completed tasks
  - As a user, my member profile should allow access to certain blocked pages
  - As a member gardener, I should be able to vote on which plants are planted in our community garden
  - As a user, I should be able to post questions and receive feedback from other users
  - As a user, I should be able to create schedules and checklists to monitor watering schedules, weeding schedules, and more
  - As a user, I would like to see how much produce was donated for each year
