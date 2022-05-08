
function call() {
  
    var u=document.getElementById("Suname").value;
    var p=document.getElementById("Spwd").value;

    
    if(u==="")
    {
           alert("Enter the username ")
    }
    else if(p==="")
    {

        alert("Enter the password")
    }
    else{
        alert("Loggedin successfully");
    
        var YEAR=document.getElementsByName('year');
        var yearselector="";
        if(YEAR[0].checked)
         {yearselector="div"}
         else
        {yearselector="siv"}


// alert(yearselector)
        var div1=document.getElementById("div1");
        var div2=document.getElementById("div2"); 
        div1.style.display="none";
        div2.style.display="none";

        var mdiv=document.getElementsByClassName("maindiv");
        mdiv[0].style.display="none";
        mdiv[1].style.display="none";
      
        
        
        var sdiv=document.getElementsByClassName(yearselector);
        for(i=0;i<6;i++)
        {
        sdiv[i].style.display="block";
    
        }
     

    
         //  two.remove;    
      
        
       document.getElementById("mainform").style.display="block";
    }
  
}
var check=[0,0,0,0,0,0];
var filled=0;
function submitfun(){

   for(let i=0;i<6;i++)
   {
       if(check[i]);
       else 
       filled=1;
   }
   if(filled==1){

    alert("Please complete all the subjects")
    return false;
   }

   if(filled!=1){
      alert("Completed! Thankyou for your responses "); 
      return true;
   }


}
var counting=0;
var subject=0;
var tempdiv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var flag=0;
function subcall(num){

    if(check[num-1]==1)
    {
        alert("You have already completed this!"); return
    }

    var YEAR=document.getElementsByName('year');
        var yearselector="";
        if(YEAR[0].checked)
        {
         yearselector="div";
        }
         else
         {
        yearselector="siv";
         }   

   

    var sdiv=document.getElementsByClassName(yearselector);

    if(num>0){
    
    for(let i=0;i<6;i++)
        {
         sdiv[i].style.display="none";
        } 
        check[num]=1;
        document.getElementById("commondiv").style.display="block";
        document.getElementById("mainform").style.display="none";
        
        subject=num;    
    }
    else
    {
      flag=0;
       for(let i=0;i<20;i++)
       {
           if(!tempdiv[i]){flag=1; }
       }     
       
       if(flag!=1)
       {
         
         for(let j=1;j<21;j++)
         {
            for(let i=1;i<=5;i++)
            {
             var inopj=document.getElementById(j+""+i+"b");
             inopj.style.background="white";
             inopj.style.filter="drop-shadow(0px 0px 5px 5px black)";
             inopj.style.width="90px";
             inopj.style.height="25px";
            
            }
            tempdiv[j-1]=0;
         }

             for(let i=0;i<6;i++)
               {
                  sdiv[i].style.display="block";
              } 
         document.getElementById("commondiv").style.display="none";
         document.getElementById("mainform").style.display="block";
         var y=sdiv[subject-1];
         y.style.border="4px solid rgb(187 238 241)";
         y.style.background="radial-gradient(#f1f6f7, #8cecfb)";
         if(counting<=5){
         alert((++counting)+" Subjects completed");}
         
         if(counting==6){

          document.getElementById("Username").value=document.getElementById("Suname").value;
          if(yearselector=="div")
          {
          document.getElementById("Year").value=2;
          } 
          else
          {
            document.getElementById("Year").value=3;
          }

         } 


         flag=0;  
         check[subject-1]=1;

        }
        else {

            alert("Please answer for all the questions!");
        }
    }
    
}



function fillanswer(quesno,givenans,obj){

 var input= document.getElementById("sub"+subject+"ans"+quesno);
 input.value=givenans;
  
 tempdiv[parseInt(quesno)-1]=1;
  for(let i=1;i<=5;i++)
   {
    var inopj=document.getElementById(quesno+i+"b");
    inopj.style.background="white";
    inopj.style.filter="drop-shadow(0px 0px 5px 5px black)";
    inopj.style.width="90px";
    inopj.style.height="25px"
   
   }
    obj.style.background="rgb(255 201 5)";
    obj.style.filter="drop-shadow(5px 5px 5px 15px black)";
    obj.style.width="90px";
    obj.style.height="25px"


}

