/**
 * Created by LuyuanNie on 3/17/16.
 */
express= require('express');
var app = new express();
var path = require('path');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req,res){
    res.render('index.ejs')
});


module.exports = app;