function tocaSom(seletorAudio) {
    //document.querySelector(seletorAudio);
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null  && elemento.localName ==='audio') {
        elemento.play();
    }
    else {  
        alert('Elemento não encontrado');        
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

/*while (i<listaDeTeclas.length){
    const tecla = listaDeTeclas[i];
    const instrumento =tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio)
    };
    i++;
}*/

for (let i = 0; i < listaDeTeclas.length; i++) 
{
    const tecla = listaDeTeclas[i];
    const instrumento =tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio)
    };
    
    tecla.onkeydown = function(event){
        if (event.code ==='Space' || event.code ==='Enter') 
            {
                tecla.classList.add("ativa");
            }            
        }
    

    tecla.onkeyup = function(){
        tecla.classList.remove("ativa");
    }
}
