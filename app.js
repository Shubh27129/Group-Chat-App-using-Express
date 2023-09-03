const express= require('express')
const data= require('data')
const bodyParser= require('body-parser')

const app= express();

const loginRoutes= require('./routes/login')
const chatRoutes= require('./routes/chat')

app.use(bodyParser.urlencoded({extended: false}))

app.use(loginRoutes)
app.use(chatRoutes)




 
// app.get('/', (req, res, next) =>{
//     res.send('<form action="/" method="POST"><input type="text" name="username" ><button type="submit">Send</button></form>')
// })
   
// app.post("/",(req,res,next)=>{
//     console.log(req.body)
// })

app.listen(3000)

