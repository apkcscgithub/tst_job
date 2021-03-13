const exps = require("express");
const app = exps();

var port  = 3000;
app.use(exps.json());
app.use("/tst",require("./src/ctl/routs"));
app.get("/",(rq,rs)=>{
	
});
app.get("/tst",(rq,rs)=>{
    console.log("Post tst OK");
});
app.listen(port,()=>{
    console.log("Server Start");
});