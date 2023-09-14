//import packages from node_modules
import Express from 'express'
import DotEnv from 'dotenv'
import cors from 'cors'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

//import packages from files
import db from "./model/db.js";
import Routes from "./routes/index.js";
import logger from './middlewares/loggerMiddleware.js';

//configure .env file
DotEnv.config()

const app = Express()

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

//import PORT number from env
const PORT = process.env.PORT || 5000;

async function server() {
  try {
    //connnect db
    await db();

    app.use(cors())

    app.listen(PORT, () => {
      console.log(`Server is running: http://localhost:${PORT}`);
    });

    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.get("/", (req, res) => {
      // console.log(req.headers['x-forwarded-for'] || req.connection.remoteAddress) //ip adress
      res.json({
        "Project name": "Auth app for test",
        version: "1.0.0^development",
        author: "https://www.github.com/qobulovasror",
      });
    });
    
    Routes(app);

  } catch (error) {
    logger.error(error);
    // if something wrong in the server it logs an error
    console.log(`SERVER ERROR: ${error}`);
  }
}

server().then();