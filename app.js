let mongodbcon = require('./mongodbcon');
let express = require('express');
let app = express();
let path = require('path');
let fpath = path.join(__dirname,'front-end');

app.use(express.static(fpath));
 app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/',async(req ,res)=>{
    res.sendFile(`${fpath}/subhan-menscollection.html`);

   

});


app.post('/register',async(req,res)=>{
    let data = await mongodbcon();
    data = await data.insertOne({
        FirstName : req.body.fname,
        LastName: req.body.lname,
        Phone: req.body.phone,
        Email: req.body.email,
        password: req.body.password
    });
    res.redirect('./navigationHtmlfile/registor.html');
});


app.post('/login',async(req,res)=>{
    let data = await mongodbcon();
    data = await data.findOne({
        Email : req.body.email,
        password:req.body.password
 
    })
    if(!data){
        res.send("email and password are not found");
    }else{
        res.redirect('/');
        
    }
});












app.listen(8080,(error)=>{
    if(error) throw error;
    console.log("server is running");
})
