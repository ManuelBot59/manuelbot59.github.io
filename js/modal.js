// js/modal.js
$(document).ready(function(){

    // Detectar dispositivos móviles
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Ajustar modal para móviles
    if(isMobile) {
        $('.modal-content').css({
            'margin-top': '20%',
            'max-width': '90%'
        });
    }

    // Mostrar el modal con efecto
    $('#myModal').fadeIn(500);
    
    // Cerrar con la X
    $('.close').on('click', function(){
        $('#myModal').fadeOut(500);
    });
    
    // Cerrar al hacer click fuera
    $(document).on('click', function(e){
        if($(e.target).is('#myModal')) {
            $('#myModal').fadeOut(500);
        }
    });
});


function adjustFlagCounter() {
    const flagCounter = document.getElementById('dynamicFlagCounter');
    const screenWidth = window.innerWidth;
    
    // Ajustar parámetros según el ancho de pantalla
    let newSrc = 'https://www.flagcounter.me/eHs/';
    
    if(screenWidth < 480) { // Móviles pequeños
        newSrc += '?size=s&color=1';
    } else if(screenWidth < 768) { // Móviles grandes
        newSrc += '?size=m&color=1';
    } else if(screenWidth < 992) { // Tabletas
        newSrc += '?size=l&color=1';
    } else { // Escritorios
        newSrc += '?size=xl&color=1';
    }
    
    flagCounter.src = newSrc;
}

// Ejecutar al cargar y al redimensionar
window.addEventListener('load', adjustFlagCounter);
window.addEventListener('resize', adjustFlagCounter);