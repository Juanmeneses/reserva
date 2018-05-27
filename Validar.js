function login()
{
   var rut = document.getElementById("tx01").value;
    var password = document.getElementById("tx02").value;
    
    if( rut === 0 || rut=== null  || !(/\b\d{7,8}\-[K|k|0-9]/.test(rut)) )
 {
      alert ("ingrese un rut valido ");
        return false;        
   }
    
    if( password === 0 || password === null || password.length <6 || password.length >8){
        alert("ingrese una contraseña valida");
        return false;
    }
}

function registro()
{
 
    var rut = document.getElementById("tx1").value;
    var nombre = document.getElementById("tx2").value; 
    var nombre2= document.getElementById("tx12").value;   
    var apellido = document.getElementById("tx3").value;
    var apellido2= document.getElementById("tx4").value;   
    var fechanac= document.getElementById("dt1").value; //REVISAR COMO SE CAPTURA LA FECHA
    var genero = document.getElementsByName("radio1");
    var generoaux = null;
       
    for(var i=0; i<genero.length;i++ )
    {
        if( genero[i].checked ) {
        generoaux = genero[i].value;
        }   
    }

    var num2 = document.getElementById("tx8").value; 
    var correo = document.getElementById("tx9").value;
    
    var calle = document.getElementById("tx10").value;
    var nrocasa = document.getElementById("tx11").value;
    var poblacion = document.getElementById("pob").value;
    var region = document.getElementById("select1").value;
    var provincia = document.getElementById("provincia").value;
    var comuna = document.getElementById("select2").value;
////    var block= document.getElementById("block").value;
////    var depto= document.getElementById("depto").value;
   
    var previ = document.getElementById("select3").value;
    var contrasena = document.getElementById("tx5").value;
    var contrasena1 = document.getElementById("tx6").value; 



if(rut.length === 0){
        document.getElementById("tx1").focus();
        alert("Indique su RUT");
        return false;
    }
if(nombre.length === 0 || nombre2.length === 0){
        document.getElementById("tx2").focus();
        alert("Indique ambos nombres");
        return false;
    }
if(apellido.length === 0 || apellido2.length === 0 ){
        document.getElementById("tx3").focus();
        alert("indique sus apellidos");
        return false;
        }
        
if(fechanac.length === 0){ 
        document.getElementById("dt1").focus();
        alert("Indique su fecha de nacimiento");
        return false;
        }
        
        if (generoaux===null){        
        document.getElementsByName("radio1");
        alert("Indique su genero");
        return false;                   
        }

if(num2.length===0){
        document.getElementById("tx8").focus();
        alert("ingrese un numero de telefono");
        return false;
        }
if(num2.length < 9 ||  num2.length>9){
        document.getElementById("tx8").focus();
        alert("ingrese un numero de telefono valido");
        return false;
        }        
        
        
if(correo.length===0){
        document.getElementById("tx9").focus();
        alert("ingrese un correo electronico");
        return false;
        }else{

if( !(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(correo)) ) {
          document.getElementById("tx9").focus();
         alert("Ingrese un correo valido");
        return false; 
      }   
    }       

        if(region.length === 0){
        document.getElementById("select1").focus();
        alert("indique su región");
        return false;
        }

        if(provincia.length === 0){
        document.getElementById("provincia").focus();
        alert("indique su provincia");
        return false;
        }     

        if (comuna.length === 0){
        document.getElementById("select2").focus();
        alert("indique su comuna");
        return false;
        }   

        if(poblacion.length === 0){
        document.getElementById("pob").focus();
        alert("indique poblacion o villa");
        return false;
        }
        

if(calle.length===0){
        document.getElementById("tx10").focus();
        alert("indique su dirección");
        return false;
        }

if(nrocasa.length===0){
        document.getElementById("tx11").focus();
        alert("ingrese numero de vivienda");
        return false;
        }    
 
if (previ.length === 0){          
        document.getElementById("select3").focus();
        alert("indique previsión");
        return false;
        }        

if (contrasena.length===0  ){
        document.getElementById("tx5").focus();
        alert("indique su contraseña");
        return false;            
}

if (contrasena.length<6 || contrasena.length>8) {
    document.getElementById("tx5").focus;
    alert("la contraseña debe tener  entre 6 y 8 caracateres!")
    return false;


}

    
if(contrasena !== contrasena1){
    document.getElementById("tx5").focus();
    alert("las contraseñas deben ser iguales!");
    return false;    
    }
    alert("Usuario Registrado Exitosamente");
  }




  
  function validarut(){
      
      var rut = document.getElementById("tx1").value;

      
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rut )){   //valida un pattern simple
	alert("ingrese un rut valido");
      return false;
  }
  }
  
//  function validarut2(){
//    var cadena = document.getElementById("tx01").value;
//    var T=cadena;
//    var M=0,S=1;
//    var uno = 0;
//    var dos = 0;
//    
//  
//	  for(;T;T=Math.floor(T/10))
//      S=(S+T%10*(9-M++%6))%11;
//	  //return S?S-1:'k';
//
//      
//      var uno=cadena.charAt(cadena.length-1);
//      var dos=S?S-1:'k';
//      
//      //verificacion    
////      alert("rut "+uno+" dv "+dos)
//      
//      if(uno===dos)
//      {
//          alert("Rut Valido");
//          return true;
//      }else{ 
//          alert("Digito Verificador Incorrecto");
//          document.getElementById("rut").value="";
//          return false;}
//        
//        
//        
//    }
//
//  }
  
