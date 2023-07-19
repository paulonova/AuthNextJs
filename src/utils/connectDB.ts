import { MongoClient } from "mongodb";

const DATABASE_URL = process.env.DATABASE_URL;
const options = {}

if(!DATABASE_URL) throw new Error("Please add you mongo db url to env.local file");

let client = new MongoClient(DATABASE_URL, options)
let clentPromise

