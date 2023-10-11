import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

//const connectionString = "mongodb+srv://zondosibu9:jysDpjO3ZOzkiqOP@cluster0.g8qypb5.mongodb.net/" ;
//console.log(connectionString);
//const Db = process.env.ATLAS_URI;
//console.log(connectionString);

const variable = process.env.MONGO_CONN_STRING
console.log(variable);


const client = new MongoClient(variable);

let conn;
try {
  conn = await client.connect();
  console.log('mongoDB is CONNECTED!!! :)');
} catch(e) {
  console.error(e);
}

let db = client.db("APDS_POE");

export default db;
