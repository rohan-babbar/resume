const path = require('path')
const express = require('express')
const hbs =  require('hbs')
//sharing on localhost 3000.
const port = process.env.PORT||3000;

const app = express()


//Define paths for Express Config
const publicDirectoryPath = path.join(__dirname, '../public')
const  viewsPath = path.join(__dirname,'../templates/views')

//Setup handlebars engine and views location
app.set('view engine','hbs') //key, value ->name of the module
app.set('views',viewsPath)
//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{ //rout handler for root page
    res.render('index')

})
//Adding server listen call
app.listen(port,()=>{
    console.log(`Server Is Up On Port ${port}`)
});