var exps = require("express");
var md5 = require("md5");
var db = require("../../src/db/dbs");
const confg = require("../../src/confg/config");

var authonticate_db = confg.dbb.authonticate_db;
var glossary_db = confg.dbb.glossary_db;

var r1 = exps.Router();
//var OutDatas = {};
r1.use(exps.json());

r1.post("/login", (rq,rs)=>{
    var OutDatas = {
        "Datas":"",
        "Massage":"",
        "Result":"",
        "DatasCount" :0
    }
    //rs.send(rq.body);
     var UserName = rq.body.UserName;
  //  rs.send(rq.body.UserName);
    var pw = rq.body.pw;
    if(UserName=="")
    {
        OutDatas['Massage'] = "User name Not Found";
        OutDatas['Result'] = "0";
    }
    if(pw=="" && OutDatas['Massage']=="")
    {
        OutDatas['Massage'] = "Password Not Found";
        OutDatas['Result'] = "0"
    }
    if(OutDatas['Result']!="0")
    {
        pw = md5(pw);
        let sql = "SELECT \
                au.UserID, au.UserName, g_e.FirstName \
                FROM \
                    "+authonticate_db+".`user` AS au \
                LEFT JOIN "+glossary_db+".employer AS g_e ON au.employer_EmployerID = g_e.EmployerID \
                WHERE \
                    au.Availability = 1 AND \
                    au.`PassWord`='"+pw+"' AND \
                    au.UserName='"+UserName+"' ";
        //console.log(sql); 
        db.query(sql ,(err,resu)=>{
            if(err){
                OutDatas['Massage'] = "Someone Error"+err;
                OutDatas['Result'] = "0";
                OutDatas['Datas'] = "";
                OutDatas['DatasCount'] = 0;
            }else{
                if(resu.length>0)
                {
                    OutDatas['Massage'] = "Data Found";
                    OutDatas['Result'] = "1";
                    OutDatas['Datas'] = resu;
                    OutDatas['DatasCount'] = resu.length;
                }else{
                    OutDatas['Massage'] = "User Name or Password Not Correct";
                    OutDatas['Result'] = "1";
                    OutDatas['Datas'] = "";
                    OutDatas['DatasCount'] = 0;
                }
            }
            //rs.json(OutDatas);
        });
        db.destroy();           
    }
    rs.json(OutDatas);
   // console.log(OutDatas);
});

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

module.exports = r1;