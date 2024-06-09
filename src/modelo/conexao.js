import mongoose from "mongoose"

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
  }


const DATABASE_URL_MONGODB="mongodb://localhost:27017/livraria"

const banco = mongoose.connect(DATABASE_URL_MONGODB, options)
  .then(() => console.log('Conected to MongoDB successfully'))
  .catch(err => console.log('Fail to connect to MongoDB', err))

export default banco