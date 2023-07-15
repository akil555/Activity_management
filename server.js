const mongoose = require('mongoose');
connectdb = ()=>{
    mongoose.connect("mongodb://0.0.0.0:27017/KEC")
}
connectdb()
console.log("Connecting to MongoDB")

const iic_schema = new mongoose.Schema({
    id:String,
    name:String,
    part:String,
    date:String,
    link:String
})

iic = mongoose.model("iic",iic_schema);


const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/KEC',getall);
app.get('/api/KEC/:fid', get);
app.post('/api/KEC', insert);
app.put('/api/KEC/:fid',update);
app.delete('/api/KEC/:id', deleteiic);

const port = 3003;
app.listen(port, () => {
    console.log(`Listening at post ${port}`)
})


