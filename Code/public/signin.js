function validateform(){  
    var name=document.myform.email.value;  
    var password=document.myform.password.value; 
    document.getElementById('mail-err').innerHTML=''; 
    document.getElementById('pass-err').innerHTML='';  
      
    if (name==null || name==""||name.includes('@')==false){  
        let e='! Invalid email id';
    //   alert("Name can't be blank"); 
    document.getElementById('mail-err').innerHTML=e; 
      return false;  
    }else if(password.length<6||password.length>16){
        let p='! Password length must between 8-16';  
    //   alert("Password must be at least 6 characters long."); 
    document.getElementById('pass-err').innerHTML=p;  
      return false;  
      }  
    
} 