import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import http from "http";
import path from "path";
import fs from "fs";


const cert = process.env.CERT;
const key = process.env.PRIVATE_KEY
console.log(cert + "CERT AND KEY" + key)


/*const options = {
  key: fs.readFileSync(key),                  //Change Private Key Path here
  cert: fs.readFileSync(cert),            //Change Main Certificate Path here

}
*/


import records from "./routes/record.mjs";
import user from "./routes/user.mjs";
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use((reg,res,next)=>
{
  res.setHeader('Access-Control-Allow-Origins','*');
  res.setHeader('Access-Control-Allow-Origins','*');
  res.setHeader('Access-Control-Allow-Origins','*');
  next();
})

app.use("/record", records);
app.use("/user",user);

let server = http.createServer(app)


app.get('/record',(req,res)=>{
  console.log(res)
  //res.send('HTTPS in ExpressJS')
})

app.post('/record')
//start the Express server
server.listen(PORT, () => {
  console.log('Server is running on port: ${PORT}');
});