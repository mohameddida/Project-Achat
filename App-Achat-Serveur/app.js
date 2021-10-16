import  express  from "express";

// middleware
const app = express();
app.use(express.json())
//routes
app.get('/',(req,res)=>{
  res.send('hello word')
  
})

app.get('/body',(req,res)=>{
  const id = req.body.id
  res.send(id)

  
})
//listening
app.listen(4000,()=>{
  console.log('server working')
})