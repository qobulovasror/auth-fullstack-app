//import packages from node_modules
import Express from 'express'
import DotEnv from 'dotenv'

//import packages from files
import db from "./model/db.js";
import Routes from "./routes/index.js";

//configure .env file
DotEnv.config()

const app = Express()

//import PORT number from env
const PORT = process.env.PORT || 5000;

async function server() {
  try {
    //connnect db
    await db();

    app.listen(PORT, () => {
      console.log(`Server is running: http://localhost:${PORT}`);
    });

    app.get("/", (req, res) => {
      res.json({
        "Project name": "Auth app for test",
        version: "1.0.0^development",
        author: "https://www.github.com/qobulovasror",
      });
    });
    
    Routes(app);

  } catch (error) {
    // if something wrong in the server it logs an error
    console.log(`SERVER ERROR: ${error}`);
  }
}

server().then();