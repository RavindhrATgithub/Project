const { calculateObjectSize } = require("bson");
const { response } = require("express");
const e = require("express");
var  express= require("express")
//const  mongoose  = require("mongoose")
var app=express()
const mongoose =require("mongoose")

var MongoClient = require('mongodb').MongoClient;

app.get("/",(req,res)=>{
   if(req.query.Year==3)
    {
      console.log("this is 3nd year");

       var url="mongodb+srv://newUser:eXtG1fHdLfKLxWsc@firstdb.fp4ty.mongodb.net/mydb?retryWrites=true&w=majority"
      
       MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        const myobj1 = { Excellent: req.query.E1,
          VeryGood: req.query.V1, 
          Good: req.query.G1,
          Satisfaction: req.query.S1,
          Poor: req.query.P1,
                       };
        dbo.collection("THIRDsub1").insertOne(myobj1, function(err, res) {
          if (err) throw err;
          console.log("1st subject inserted");
          
          
        });

        const myobj2 = { Excellent: req.query.E2,
          VeryGood: req.query.V2, 
          Good: req.query.G2,
          Satisfaction: req.query.S2,
          Poor: req.query.P2,
                       };
        dbo.collection("THIRDsub2").insertOne(myobj2, function(err, res) {
          if (err) throw err;
          console.log("2nd subject inserted");
          
          
        });

        if(req.query.selective=="AI")
     {
        const myobj3 = { Excellent: req.query.E3,
          VeryGood: req.query.V3, 
          Good: req.query.G3,
          Satisfaction: req.query.S3,
          Poor: req.query.P3,
                       };
        dbo.collection("THIRDsub3").insertOne(myobj3, function(err, res) {
          if (err) throw err;
          console.log("3rd subject inserted");
          
          
        });

     }
     else{

      const myobj3 = { Excellent: req.query.E3,
        VeryGood: req.query.V3, 
        Good: req.query.G3,
        Satisfaction: req.query.S3,
        Poor: req.query.P3,
                     };
      dbo.collection("THIRDsub7").insertOne(myobj3, function(err, res) {
        if (err) throw err;
        console.log("3rd subject inserted");
        
        
      });


     }

        const myobj4 = { Excellent: req.query.E4,
          VeryGood: req.query.V4, 
          Good: req.query.G4,
          Satisfaction: req.query.S4,
          Poor: req.query.P4,
                       };
        dbo.collection("THIRDsub4").insertOne(myobj4, function(err, res) {
          if (err) throw err;
          console.log("4th subject inserted");
          
          
        });



        const myobj5 = { Excellent: req.query.E5,
          VeryGood: req.query.V5, 
          Good: req.query.G5,
          Satisfaction: req.query.S5,
          Poor: req.query.P5,
                       };
        dbo.collection("THIRDsub5").insertOne(myobj5, function(err, res) {
          if (err) throw err;
          console.log("5th subject inserted");
          
          
        });


        const myobj6 = { Excellent: req.query.E6,
          VeryGood: req.query.V6, 
          Good: req.query.G6,
          Satisfaction: req.query.S6,
          Poor: req.query.P6,
                       };
        dbo.collection("THIRDsub6").insertOne(myobj6, function(err, res) {
          if (err) throw err;
          console.log("6th subject inserted");
          
          
        });

        

      });  

    }            
      

      /*  MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("mydb");
          const myobj = { name: req.query.sub1ans, address: req.query.sub1ans2 };
          dbo.collection("rufftable").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            
            db.close();
          });
        });  


                 */


        if(req.query.Year==2){

          console.log("this is 2rd year");
          var url="mongodb+srv://newUser:eXtG1fHdLfKLxWsc@firstdb.fp4ty.mongodb.net/mydb?retryWrites=true&w=majority"
      
       MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        const myobj1 = { Excellent: req.query.E1,
          VeryGood: req.query.V1, 
          Good: req.query.G1,
          Satisfaction: req.query.S1,
          Poor: req.query.P1,
                       };
        dbo.collection("SECONDsub1").insertOne(myobj1, function(err, res) {
          if (err) throw err;
          console.log("1st subject inserted");
          
          
        });

        const myobj2 = { Excellent: req.query.E2,
          VeryGood: req.query.V2, 
          Good: req.query.G2,
          Satisfaction: req.query.S2,
          Poor: req.query.P2,
                       };
        dbo.collection("SECONDsub2").insertOne(myobj2, function(err, res) {
          if (err) throw err;
          console.log("2nd subject inserted");
          
          
        });



        const myobj3 = { Excellent: req.query.E3,
          VeryGood: req.query.V3, 
          Good: req.query.G3,
          Satisfaction: req.query.S3,
          Poor: req.query.P3,
                       };
        dbo.collection("SECONDsub3").insertOne(myobj3, function(err, res) {
          if (err) throw err;
          console.log("3rd subject inserted");
          
          
        });



        const myobj4 = { Excellent: req.query.E4,
          VeryGood: req.query.V4, 
          Good: req.query.G4,
          Satisfaction: req.query.S4,
          Poor: req.query.P4,
                       };
        dbo.collection("SECONDsub4").insertOne(myobj4, function(err, res) {
          if (err) throw err;
          console.log("4th subject inserted");
          
          
        });



        const myobj5 = { Excellent: req.query.E5,
          VeryGood: req.query.V5, 
          Good: req.query.G5,
          Satisfaction: req.query.S5,
          Poor: req.query.P5,
                       };
        dbo.collection("SECONDsub5").insertOne(myobj5, function(err, res) {
          if (err) throw err;
          console.log("5th subject inserted");
          
          
        });


        const myobj6 = { Excellent: req.query.E6,
          VeryGood: req.query.V6, 
          Good: req.query.G6,
          Satisfaction: req.query.S6,
          Poor: req.query.P6,
                       };
        dbo.collection("SECONDsub6").insertOne(myobj6, function(err, res) {
          if (err) throw err;
          console.log("6th subject inserted");
          
          
        });

        
       


      });  


        }
        
        res.send("<h1>Your responses has been recorded</h1>")

       
    })

    app.get("/display",(req,res)=>{

       if(req.query.Ayear==2)    
          {
        console.log("this is admin second year");
       // window.alert("Welcome Ruba mam!")
        var url="mongodb+srv://newUser:eXtG1fHdLfKLxWsc@firstdb.fp4ty.mongodb.net/mydb?retryWrites=true&w=majority"
        var e=0,v=0,g=0,s=0,p=0;
        res.write("<p style='font-size:30px;text-align:center;color:rgb(250,0,0);font-weight:700;'>SECOND YEAR FEEDBACK RESPONSES</p>");
     MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");

      dbo.collection("SECONDsub1").find({}).toArray(function(err, result) {
        if (err) throw err;
        else
        {
          res.write("<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>NUMERICAL METHODS AND LINEAR PROGRAMMING PROBLEM / 18MA401</p>");
        call(result);
        }
        });
        dbo.collection("SECONDsub2").find({}).toArray(function(err, result) {
          if (err) throw err;
          else
          {
            res.write("<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>COMPUTER NETWORKS / 18CS401</p>"); 
          call(result);
          }
          });


          dbo.collection("SECONDsub3").find({}).toArray(function(err, result) {
            if (err) throw err;
            else
            {
              res.write("<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>DESIGN AND ANALYSIS OF ALGORITHMS / 18CS402 </p>");
            call(result);
            }
            });
            dbo.collection("SECONDsub4").find({}).toArray(function(err, result) {
              if (err) throw err;
              else
              {
                res.write("<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>OBJECT ORIENTED PROGRAMMING C++ / 18CS403</p>");
              call(result);
              }
              });

     
                     dbo.collection("SECONDsub5").find({}).toArray(function(err, result) {
                      if (err) throw err;
                      else
                      {
                        res.write("<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>SOFTWARE ENGINEERING / 18CS404</p>");
                        
                      call(result);
                     }
                      });
                      dbo.collection("SECONDsub6").find({}).toArray(function(err, result) {
                        if (err) throw err;
                        else{
                          res.write("<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>   MICROPROCESSORS AND MICROCONTROLLERS / 18CS405</p>");
                        call(result);
                       
                        }
                        });
       
        });

        
        function call(result)
        {
         for(var i=0;i<result.length;i++)
         {
         e+=parseInt(result[i].Excellent);
         v+=parseInt(result[i].VeryGood);
         g+=parseInt(result[i].Good);
         s+=parseInt(result[i].Satisfaction);
         p+=parseInt(result[i].Poor);
         
         }
         var length=result.length;
         length*=2;
         let V=v/length;
         let G=g/length;
         let P=p/length;
         let S=s/length;
         let E=e/length;

         res.write("<p style='margin-left:200px;font-weight:bold'> Excellent: &nbsp; &nbsp; "+E.toFixed(2)+"% <input style='height:20px;width:"+e*10+"px;background-color:rgb(250,150,10);'></p>");
         res.write("<p style='margin-left:200px;font-weight:bold'> VeryGood:&nbsp; &nbsp;"+V.toFixed(2)+"%  <input style='height:20px;width:"+v*10+"px;background-color:rgb(250,150,10);'></p>");
         res.write("<p style='margin-left:200px;font-weight:bold'> Good: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "+G.toFixed(2)+"%  <input style='height:20px;width:"+g*10+"px;background-color:rgb(250,150,10);'></p>");
         res.write("<p style='margin-left:200px;font-weight:bold'> Satisfaction: "+S.toFixed(2)+"%  <input style='height:20px;width:"+s*10+"px;background-color:rgb(250,150,10);'></p>");
         res.write("<p style='margin-left:200px;font-weight:bold'> Poor:  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "+P.toFixed(2)+"%  <input style='height:20px;width:"+p*10+"px;background-color:rgb(250,150,10);'><br><br><br></p>");
         
         e=0;v=0;p=0;g=0;s=0;
         
 
        }
        
      }

      else{


        console.log("this is admin third year");
      //  window.alert("Welcome Manimala mam!")
        var url="mongodb+srv://newUser:eXtG1fHdLfKLxWsc@firstdb.fp4ty.mongodb.net/mydb?retryWrites=true&w=majority"
        var e=0,v=0,g=0,s=0,p=0;
        res.write("<p style='font-size:30px;text-align:center;color:rgb(250,0,0);font-weight:700;'>THIRD YEAR FEEDBACK RESPONSES</p>");
     MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");

      dbo.collection("THIRDsub1").find({}).toArray(function(err, result) {
        if (err) throw err;
        else
        {
          res.write("<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>PRINCIPLES OF COMPILER DESIGN / 18CS601</p>");
        call(result);
        }
        });
        dbo.collection("THIRDsub2").find({}).toArray(function(err, result) {
          if (err) throw err;
          else
          {
            res.write("<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>WEB TECHNOLOGY / 18CS602</p>"); 
          call(result);
          }
          });


          dbo.collection("THIRDsub3").find({}).toArray(function(err, result) {
            if (err) throw err;
            else
            {
              res.write("<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>ARTIFICIAL INTELLIGENCE / 18CSPE602</p>");
            call(result);
            }
            });

            dbo.collection("THIRDsub7").find({}).toArray(function(err, result) {
              if (err) throw err;
              else
              {
                res.write("<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>PYTHON PROGRAMMING /18CSPE604 </p>");
              call(result);
              }
              }); 
            dbo.collection("THIRDsub4").find({}).toArray(function(err, result) {
              if (err) throw err;
              else
              {
                res.write("<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>COMPUTER HARDWARE AND TROUBLESHOOTING / 18CSPE609</p>");
              call(result);
              }
              });

     
                     dbo.collection("THIRDsub5").find({}).toArray(function(err, result) {
                      if (err) throw err;
                      else
                      {
                        res.write("<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>BASICS OF INTERNET OF THINGS / 18ECOE06</p>");
                        
                      call(result);
                     }
                      });
                      dbo.collection("THIRDsub6").find({}).toArray(function(err, result) {
                        if (err) throw err;
                        else{
                          res.write("<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>MOBILE COMPUTING / 18CSPE804</p>");
                        call(result);
                       
                        }
                        });
       
        });

        
        function call(result)
        {
         for(var i=0;i<result.length;i++)
         {
         e+=parseInt(result[i].Excellent);
         v+=parseInt(result[i].VeryGood);
         g+=parseInt(result[i].Good);
         s+=parseInt(result[i].Satisfaction);
         p+=parseInt(result[i].Poor);
         
         }
         var length=result.length;
         length*=2;
         let V=v/length;
         let G=g/length;
         let P=p/length;
         let S=s/length;
         let E=e/length;
        
         res.write("<p style='margin-left:200px;font-weight:bold'> Excellent: &nbsp; &nbsp;   "+E.toFixed(2)+"% <input style='height:20px;width:"+e*10+"px;background-color:rgb(250,150,10);'></p>");
         res.write("<p style='margin-left:200px;font-weight:bold'> VeryGood:   &nbsp;   "+V.toFixed(2)+"%  <input style='height:20px;width:"+v*10+"px;background-color:rgb(250,150,10);'></p>");
         res.write("<p style='margin-left:200px;font-weight:bold'> Good: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "+G.toFixed(2)+"%  <input style='height:20px;width:"+g*10+"px;background-color:rgb(250,150,10);'></p>");
         res.write("<p style='margin-left:200px;font-weight:bold'> Satisfaction: "+S.toFixed(2)+"%  <input style='height:20px;width:"+s*10+"px;background-color:rgb(250,150,10);'></p>");
         res.write("<p style='margin-left:200px;font-weight:bold'> Poor:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "+P.toFixed(2)+"%  <input style='height:20px;width:"+p*10+"px;background-color:rgb(250,150,10);'><br><br><br></p>");
         
         e=0;v=0;p=0;g=0;s=0;
         
 
        }
        


      }
      
        
    });



   

app.listen(100,()=>{

      

    console.log("server started")
})
