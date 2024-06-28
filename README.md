 ## Title: 
 
 Express Notes Challenge 
  
 ## Description: 

In this project, the main areas of functionality were the server.js, index.js(routes), index.js (public), index.js (api), noteroutes.js, htmlroutes.js fsUtils.js, and db.json. The server file creates a PORT that will be listened to, includes middleware, and also uses all information from the index.js file within routes. The index.js (routes) acts as the 'brains' of the routes folder where it gathers information from both apiRoutes (api index.js) and htmlRoutes (htmlRoutes.js).  The htmlRoutes contain all of the html code to be displayed on the web page. The api index.js is gathering information from noteroutes.js. Within noteroutes.js, there are three main functions that get notes from db.json, post new notes to db.json, and delete notes from db.json. These functions are only able to be used through the imports of other functions within fsUtils. In fsUtils, readFromFile allows readig from files, writeToFile allows for writing to files and readAndAppend allows for appending data. 

All of these files work together to display the webpage and allow the user to write new notes, which will be stored in db.json. The user can then delete the note if they choose to do so.


 ## Installation: 

 1- Open the Repo - express-notes-challenge
 
 2- Clone the Repo - https://github.com/charliejb1/express-notes-challenge

 3- Open with VS Code - code .

 ## Contributions: 

 Tutor Assistance - Alexis Gonzalez

 
 Class office hours 

 ## Questions?

  Github Username: charliejb1
  
  Github Profile Link: https://github.com/charliejb1
  
  Email: charlieboyle252@gmail.com
  