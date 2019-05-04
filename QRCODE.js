var QRCODE = {code:["290807019493"]}; 
 
 
 function check(form){  
           
     for (var i = 0; i < QRCODE.code.length ; i++)  { 
         
       if ((form.QRCODE.value == QRCODE.code[i]))  { 
       
        valid = true;
        
           break;  
      } 
      else{
        
       
      if (form.QRCODE.value !== QRCODE.code[i]){
           alert("De opgegeven code klopt niet");          
           break;
           }
       }
    }   
       
    
    if (valid)   {    
      window.location.assign('final.html');    
      return false;   
    }           
}
