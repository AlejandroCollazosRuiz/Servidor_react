const express =require ('express');
const app = express();
const PORT =5000;

app.get('/api',(req,res)=>{
    res.json({users:[{"id":1,"first_name":"Glen","last_name":"Dissman","email":"gdissman0@nytimes.com","gender":"Male"},
    {"id":2,"first_name":"Mateo","last_name":"Cobbin","email":"mcobbin1@pen.io","gender":"Male"},
    {"id":3,"first_name":"Kareem","last_name":"Cool","email":"kcool2@360.cn","gender":"Bigender"},
    {"id":4,"first_name":"Genny","last_name":"Arrighini","email":"garrighini3@weibo.com","gender":"Female"},
    {"id":5,"first_name":"Caterina","last_name":"Germaine","email":"cgermaine4@earthlink.net","gender":"Female"},
    {"id":6,"first_name":"Hyman","last_name":"Endle","email":"hendle5@hubpages.com","gender":"Male"},
    {"id":7,"first_name":"Evelyn","last_name":"Petrik","email":"epetrik6@bigcartel.com","gender":"Male"},
    {"id":8,"first_name":"Monti","last_name":"Ondrasek","email":"mondrasek7@wordpress.com","gender":"Male"},
    {"id":9,"first_name":"Ashlan","last_name":"Yellep","email":"ayellep8@blogtalkradio.com","gender":"Female"},
    {"id":10,"first_name":"Adan","last_name":"Walentynowicz","email":"awalentynowicz9@amazon.com","gender":"Female"}]})
})

app.listen(PORT,()=>console.log(`server on port ${PORT}`));