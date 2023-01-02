import 'dotenv/config.js'

import mongoose from "mongoose"

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.connect(process.env.MONGO_URI, options)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err))

export default mongoose