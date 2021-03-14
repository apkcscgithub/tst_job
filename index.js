const exps = require("express");
const app = exps();

var port  = 3000;
app.use(exps.json());
app.listen(port,()=>{
    console.log("Server Start");
});
app.use((rq,rs,nxt)=>{
    console.log("middleware Run");
    nxt();
    console.log("middleware Run Next");
});
app.use("/tst",require("./src/ctl/routs"));
//app.use("/\^(*)",require("./src/ctl/routs"));
app.get("/",(rq,rs)=>{
	
});
app.get("/tst",(rq,rs)=>{
    console.log("Post tst OK");
});
