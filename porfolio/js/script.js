let menuVisible= false;
//funcion que oculta y muestra el menu//
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }
    else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }

}
function seleccionar(){
    //ocultar menu una vez que seleccionamos una opcion//

    document.getElementById("nav").classList="";
    menuVisible=False;
}
//function que aplica
function efectoHabilidades(){

    var skills= document.getElementById("Skills");
    var distanciaSkills=window.innerHeight-skills.getBoundingClientRect()
    if(distanciasSkills>=300){
        let habilidades=document.getElementsByClassName("progreso");
        
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("uxui");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("angularjs");
        habilidades[5].classList.add("adobe");
        habilidades[6].classList.add("blender");
        habilidades[7].classList.add("scorm");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("proactividad");
        
        habilidades[10].classList.add("equipos");
        
        habilidades[11].classList.add("equipos");
        
        habilidades[12].classList.add("equipos");
        habilidades[13].classList.add("resolutiva");
        

        

    }
}
 window.onscroll=function(){
    efectoHabilidades();
 }
        













    }
}