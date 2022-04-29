function tocaSom (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); 

for (let c = 0; c < listaDeTeclas.length; c++) {

    const tecla = listaDeTeclas[c];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onekeydown = function (event) {
        if (event.code === 'Enter' || event.code === 'Space' || event.code === 'numpadEnter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onekeyup = function () {
        tecla.classList.remove('ativa');
    }
    
}
