var exps = require("express");
var md5 = require("md5");
var db = require("../../src/db/dbs");
var r1 = exps.Router();
r1.use(exps.json());

r1.get("/cs",(rq,rs)=>{
	rs.send("Cs Sent.");
});
r1.get("/com",(rq,rs)=>{
	rs.send("com Sent.");
});
r1.get("/mdl",(rq,rs)=>{
	rs.send("mdl Sent.");
});
r1.get("/ops",(rq,rs)=>{
	rs.send("ops Sent.");
});
r1.get("/fin",(rq,rs)=>{
	rs.send("fin Sent.");
});
/*
r1.post("/cs",(rq,rs)=>{
	let UserName = rq.body.UserName;
    let FName = rq.body.FName;
    let LName = rq.body.LName;
    let UCode = rq.body.UCode;
    let pws = md5(rq.body.pws);
    let sql = "INSERT INTO node_mysql.users( UserName, FName, LName, UCode, pws, Availability) VALUES ('"+ UserName+"','"+ FName+"','"+ LName+"','"+ UCode+"','"+ pws+"',1)";
    db.query(sql,(er,rslt)=>{
        if(er)throw er
        rs.json({
            msg :"Insert Done",
            act:1
        });

    });
   
    console.log("Post New OK");
});
r1.post("/upd",(rq,rs)=>{
    //rs.send("Post update OK");
    let UserID = rq.body.UserID;
    let UserName = rq.body.UserName;
    let FName = rq.body.FName;
    let LName = rq.body.LName;
    let UCode = rq.body.UCode;
    let pws = md5(rq.body.pws);
    let sql = "UPDATE  node_mysql.users SET UserName='"+ UserName+"', FName='"+ FName+"', LName='"+ LName+"',UCode='"+ UCode+"', pws='"+ pws+"' WHERE UserID='"+UserID+"'";
    db.query(sql,(er,rslt)=>{
        if(er)throw er
        rs.json({
            msg :"UPDATE Done",
            act:1
        });

    });
    console.log("Post update OK");
});
r1.post("/de",(rq,rs)=>{
   // rs.send("Post Delete OK");
    let UserID = rq.body.UserID;
    
    let sql = "DELETE FROM  node_mysql.users  WHERE UserID='"+UserID+"'";
    db.query(sql,(er,rslt)=>{
        if(er)throw er
        rs.json({
            msg :"DELETE Done",
            act:1
        });

    });
    console.log("Post Delete OK");
});
r1.post("/s",(rq,rs)=>{
    //rs.send("Post Show OK");
    let UserID = rq.body.UserID;
    if(UserID == 0){
        var sql = "SELECT * FROM  node_mysql.users";
    }else{
        var sql = "SELECT * FROM  node_mysql.users  WHERE UserID='"+UserID+"'";
    }
    db.query(sql,(er,rslt)=>{
        if(er)throw er
        rs.json({
            msg :"SHOW DETAILS",
            act:1,
            DATA :rslt
        });

    });
    console.log("Post Show OK");
});
*/
module.exports = r1;