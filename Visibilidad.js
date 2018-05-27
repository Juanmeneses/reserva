function eliminarhorauno(){
    
    var but1 = document.getElementById("but1");
    if(but1.onclick){
    document.getElementById("hora1").style.display="none";
    }
    
}

function eliminarhorados(){
    
    var but2 = document.getElementById("but2");
    if(but2.onclick){
    document.getElementById("hora2").style.display="none";
    }
    
}

function sinhoras(){
   
    var muestra1=document.getElementById("hora1").style.display;
    var muestra2=document.getElementById("hora2").style.display;
    
    if((muestra1 && muestra2)==="none"){
        document.getElementById("ninguna").style.display="block";
        document.getElementById("horas").style.display="none";
        alert("No hay ninguna hora programada");
    }
    }
    
function visibilidadcriterios(){
    
    var busqueda = document.getElementById("criterio").selectedIndex;
    var busqueda1 = document.getElementById("criterio").selectedIndex;
    var busqueda2 = document.getElementById("criterio").selectedIndex;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    
    
    if(busqueda === 1){
       
        document.getElementById("div1").style.display = 'block';
        document.getElementById("div2").style.display = 'none';
        document.getElementById("div3").style.display = 'none';
        document.getElementById("div").style.display = 'none';
   
    }else if(busqueda1 === 2 )
             {
                 alert("Indique Nombre Y Apellido  O RUT ");
                 document.getElementById("div1").style.display = 'none';                
                 document.getElementById("div2").style.display = 'block';
                 document.getElementById("div3").style.display = 'none';
                 document.getElementById("div").style.display = 'none';
                
                 
    }else if(busqueda2 === 3)
             {
                 document.getElementById("div1").style.display = 'none';
                 document.getElementById("div2").style.display = 'none';
                 document.getElementById("div3").style.display = 'block';
                 document.getElementById("div").style.display = 'none';
             }    
}    
    
    
