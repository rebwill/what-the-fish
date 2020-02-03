# SETUP

Using these instructions: https://medium.com/@maison.moa/setting-up-an-express-backend-server-for-create-react-app-bc7620b20a61

1. Create root folder bird-app
2. Run 'npx create-react-app client' to install create-react-app in /client folder
3. Navigate to root directory and run 'npm init' in order to create a package.json in the root folder (/client folder will have its own)
4. Run 'npm install express --save' to install Express and save it as a dependency
5. Input basic stuff into server.js file
6. Add a proxy to our React app
   - navigate to package.json in /client
   - Add "proxy": "http://localhost:5000/"

Alright, now that we have our server.js file squared away, lets move onto adding a proxy to our React application. This is an important step. We have to let the Webpack development server our React application is running on know to proxy our API requests from the client to the API server. Our API server is the Express server we just created, and it will eventually run on port 5000.

Note: The Webpack development server was created automatically when we ran create-react-app

This will let Webpack know to proxy our API requests to our Express backend that will be running on port 5000.

7. In app.js in /client, add 'callBackendAPI' fetch function and call it on componentDidMount

# START SERVERS

1. In root, run 'nodemon server.js' to start node server
2. Open new terminal and cd client_new/. Run 'npm start' to start react dev server.
3. Open http://localhost:3000/ in browser, all should be running & connected

# DEPLOY

1. git add .
2. git commit -m "message"
3. git push heroku master

# PUSH TO GITHUB REPO

1. git add .
2. git commit -m "message"
3. git push origin master
