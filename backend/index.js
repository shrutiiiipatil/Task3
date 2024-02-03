//entry point 
//connection to db
const express = require('express')

const bodyParser=require('body-parser')

const router = express()
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));


const port = 5000
const mongDb=require('./db');

mongDb();
router.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
  router.use(bodyParser.urlencoded({extended:true}))
})

    
  

router.get('/', (req, res) => {
  res.send('Hello World!')
})
router.use(express.json())
router.use('/api',require('./Routes/CreateUser'));
//router.use('/img',require('./Routes/upload'));




router.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
module.exports=router;
