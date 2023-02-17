require('dotenv').config()
const express = require('express')
const app = express();
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
const productRouter = require('./routes/productRoute')
const connectDB = require('./db/connect')

// middleware
// database
app.use(express.json())
app.use(express.urlencoded({extended: true}));

// routes

app.get('/',(req,res) =>{
    res.send('<h1>Products</h1> <a href="/api/v1/products">Products routes</a>')
});

app.use('/api/v1/products',productRouter)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000
const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,() => console.log(`server is running ${port}....`))
    } catch (error) {
        console.log(error);
      
    }
}
start()