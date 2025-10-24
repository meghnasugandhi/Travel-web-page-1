const express=require('express');
const cors = require('cors');
const app=express()

const port=5000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ name: "Meghna" });
});

app.listen(port,()=>{
    console.log("running on port 5000")
})