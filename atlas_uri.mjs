// require('dotenv').config();
import * as dotenv from 'dotenv'
dotenv.config()
const USER_PASSWORD = process.env.USER_PASSWORD
const USER_NAME = process.env.USER_NAME

const URI = `mongodb+srv://${USER_NAME}:${USER_PASSWORD}@cluster0.kci2qpn.mongodb.net/New_Database?retryWrites=true&w=majority`
export default URI;





    