// js/modal.js
$(document).ready(function(){
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