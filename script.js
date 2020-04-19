$(document).ready(function() 
{
  var str="";
  
  $("#zero").click(function()
    {
      if(str=="0")
        {
          str="0"
        }
      else
        str=str.concat("0");
        $("#answer").text(0);
      $("#input").text(str);    
    });
    
  $("#one").click(function()
    {
      if(str=="0")
        {
          str="1";
        }
      else
        str=str.concat("1");
        $("#answer").text(1);
      $("#input").text(str);    
    });
    
  $("#two").click(function()
    {
      if(str=="0")
        {
          str="2"
        }
      else
        str=str.concat("2");
         $("#answer").text(2);
      $("#input").text(str); 
    });
  
  $("#three").click(function()
    {
      if(str=="0")
        {
          str="3"
        }
      else
        str=str.concat("3");
        $("#answer").text(3);
      $("#input").text(str);   
    });
    
  $("#four").click(function()
    {
      if(str=="0")
        {
          str="4"
        }
      else
        str=str.concat("4");
         $("#answer").text(4);
      $("#input").text(str);
    });
    
  $("#five").click(function()
    {
      if(str=="0")
        {
          str="5"
        }
      else
        str=str.concat("5");
         $("#answer").text(5);
      $("#input").text(str);   
    });
    
  $("#six").click(function()
    {
      if(str=="0")
        {
          str="6"
        }
      else
        str=str.concat("6");
          $("#answer").text(6);
      $("#input").text(str);
    });
    
  $("#seven").click(function()
    {
      if(str=="0")
        {
          str="7"
        }
      else
        str=str.concat("7");
        $("#answer").text(7);
      $("#input").text(str);    
    });
    
  $("#eight").click(function()
    {
      if(str=="0")
        {
          str="8"
        }
      else
        str=str.concat("8");
        $("#answer").text(8);
      $("#input").text(str);
    });
    
  $("#nine").click(function()
    {
      if(str=="0")
        {
          str="9"
        }
      else
        str=str.concat("9");
        $("#answer").text(9);
      $("#input").text(str);
    });
    
  
  $("#dot").click(function()
    {
      str=str.concat(".");
       $("#answer").text('.');
      $("#input").text(str);   
    });
    
  
  $("#add").click(function()
    {
      if(str.charAt(str.length-1)=="+" || str.charAt(str.length-1)=="-" || str.charAt(str.length-1)=="*" || str.charAt(str.length-1)=="/" )
        {
          console.log("Error");
        }
      else
        str=str.concat("+");
        $("#answer").text('+');
      $("#input").text(str);
    });
    
  $("#sub").click(function()
    {
      if(str.charAt(str.length-1)=="+" || str.charAt(str.length-1)=="-" || str.charAt(str.length-1)=="*" || str.charAt(str.length-1)=="/" )
        {
          console.log("Error");
        }
      else
        str=str.concat("-");
         $("#answer").text('-');
      $("#input").text(str);   
    });
    
  $("#multiply").click(function()
    {
      if(str.charAt(str.length-1)=="+" || str.charAt(str.length-1)=="-" || str.charAt(str.length-1)=="*" || str.charAt(str.length-1)=="/" )
        {
          console.log("Error");
        }
      else
        str=str.concat("*");
        $("#answer").text('*');
      $("#input").text(str);    
    });
    
  $("#divide").click(function()
    {
      if(str.charAt(str.length-1)=="+" || str.charAt(str.length-1)=="-" || str.charAt(str.length-1)=="*" || str.charAt(str.length-1)=="/" )
        {
          console.log("Error");
        }
      else
        str=str.concat("/");
        $("#answer").text('/');
      $("#input").text(str);   
    });
    
  $("#ac").click(function()
    {
      str="0";
      $("#answer").text(str);
      $("#input").text(str);
    });
    
  $("#c").click(function()
    {
      str=str.slice(0,-1);
      $("#input").text(str);

    });
  
  
  $("#equal").click(function()
    {
      $("#answer").text(eval(str));
       str=str.concat("= "+eval(str));
    $("#input").text(str);
      console.log(eval(str));
      });  

});
