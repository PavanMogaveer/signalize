function validateform(){  
    var name=document.myform.email.value;  
    var e=document.myform.epass.value; 
    var c=document.myform.cpass.value; 
    document.getElementById('mail-err').innerHTML=''; 
    document.getElementById('pass-err').innerHTML='';  
      
    if (name==null || name==""||name.includes('@')==false){  
        let em='! Invalid email id';
  
    document.getElementById('mail-err').innerHTML=em; 
      return false;  
    }
    else if(e==''){
        let s='! Enter password';  
 
    document.getElementById('pass-err').innerHTML=s;  
      return false;  
      }  


    else if(e!==c){
        let p='! Password must be same';  
 
    document.getElementById('pass-err').innerHTML=p;  
      return false;  
      }  
    }  