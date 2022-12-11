function ciudad(){
    alert("Cargando informe meteorológico...");
}
function borrar(elementoID){
    let elemento=document.querySelector(elementoID);
    elemento.remove();
}
function cambiarTemp(elementoSelect){
    let elementos=document.getElementsByClassName("temp");
    for(let i=0;i<elementos.length;i++){
        if(elementoSelect.value == "ºF"){
                elementos[i].innerHTML=Math.round ((elementos[i].innerHTML*(9/5))+32);
        }else{
                elementos[i].innerHTML=Math.round ((elementos[i].innerHTML-32)*(5/9));
        }
    }

}