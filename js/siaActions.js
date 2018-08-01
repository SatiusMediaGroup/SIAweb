
var $win = $(window);

$(document).ready(function(){
    $('.gallery-item-icon').hide();
    $('.servicios h1').hide();

    var $nav = $('.nav');
    var $btnmas = $('.contenedorslider');
    var $btnserv1 = $('#ser1');
    var $btnserv2 = $('#ser2');
    var $btnserv3 = $('#ser3');
    var $btnserv4 = $('#ser4');
    var $btnserv5 = $('#ser5');

    $nav.localScroll();
    $btnmas.localScroll();

    $btnserv1.on('click' , function(e){
        e.preventDefault();
        $('#idservicio').html('<h1>Administración propiedad horizontal</h1>');
        $('.gallery-item').html('<img class="serimg" src="src/img/icons/casas.png">');
        $('#descservicio').html(`<p>SIA ofrece a la creciente demanda de conjuntos de Propiedad Horizontal un equipo de trabajo interdiciplinario, de profesionales con liderazgo, honestidad, compromiso, actitud para realizar una gestion efectiva, discreta y de calidad.
        Nuestra cualidad que hace la diferencia esta en que se conforma un equipo de trabajo con el Consejo de Administracion de la Propiedad Horizontal, que en el marco de referencia de la ley 675 de 2011, ejecuta a cabalidad las actividades Administrativas, Financieras y Operativas, que garanticen la satisfaccion y la sana convivencia de los residentes.
        El plan de trabajo de SIA en cada Propiedad Horizontal contiene los requerimientos de sus entes Administrativos, los requerimiento Operativos del dia, dia y los requerimientos de orden legal, con base en lo cual conforma la estrategia para cumplirlos y un cronograma de trabajo, que permite un optimo flujo y cumplimiento de las actividades, alcanzando los objetivos cumliendo con el presupuesto aprobado y en forma oportuna    
        Beneficios:<br>
        <ul>
            <li>Idoneidad y experiencia del grupo de profesionales en la administracion de Propiedad Horizontal
            <li>Portal web con acceso a cada uno de los residentes de la Propiedad Horizontal donde se comparte la informacion <br> de la gestion adminstrativa, operativa y financiera, circulares, reglamentos, actas, reservas de areas comunes y donde se registran y gestionan PQRS 
            <li>Amplia experincia en la Adminisracion Provisional, combrada por la constructora
            <li>Amplia experincia en la elaboracion de requerimientos de areas comunes a la entidad Constructora
            <li>Amplia experincia en el recibo areas comunes a la entidad Constructora
            <li>Amplia experincia en procesos de conciliacion ante Camara de Comercio, en los requerimientos a la entidad Constructora
            <li>Gestion de recuperacion de cartera en forma efectiva que permite resultados operativos optimos
            <li>Personal especializado en manejo de zonas verdes y piscina
        <ul>
        </p>`);
    });

    $btnserv2.on('click' , function(e){
        e.preventDefault();
        $('#idservicio').html('<h1>Asesorías</h1>');
        $('.gallery-item').html('<img class="serimg" src="src/img/icons/apartamentos.png">');
        $('#descservicio').html('<p>Texto servicio asesoria</p>');
    });

    $btnserv3.on('click' , function(e){
        e.preventDefault();
        $('#idservicio').html('<h1>Auditoria</h1>');
        $('.gallery-item').html('<img class="serimg" src="src/img/icons/fincas.png">');
        $('#descservicio').html('<p>Texto servicio auditoria</p>');
    });

    $btnserv4.on('click' , function(e){
        e.preventDefault();
        $('#idservicio').html('<h1>Revisoría fiscal</h1>');
        $('.gallery-item').html('<img class="serimg" src="src/img/icons/bodegas.png">');
        $('#descservicio').html('<p>Texto servicio revisoria fiscal</p>');
    });

    $btnserv5.on('click' , function(e){
        e.preventDefault();
        $('#idservicio').html('<h1>Contabilidad</h1>');
        $('.gallery-item').html('<img class="serimg" src="src/img/icons/terrenos.png">');
        $('#descservicio').html(`<p>La gestion contable de una Propiedad Horzontal u otro tipo de establecimiento comercial, SIA la realiza dando cumplimiento a los estandares normativos y de mejores practicas, obteniendo un producto confiable para la toma de desiciones de la gerencia y transparente y de calidad para el ente que los vigila.
        La causacion de las transacciones contables son exigidas a los terceros con el fin de que los informes financieros reflejen la realidad de la emprea al cierre de un periodo fiscal, cumpliendo con un procedimiento normalizado y estandarrizado,
        Los estados financieros son complementados con las notas a los estados financieros, el informe de ejecucion presupuestal, Flujo de Caja, estado de la Cartera, conciliacion bancaria, arqueo de caja, etc.<br>
        Se genera en forma eficiente la facturacion de las unidades privadas y la circular de cartera morosa los tres (3) primeros dias de cada mes.<br>
        La Cartera morosa se gestiona sin ningun costo adicional para la Propiedad Horizontal y se realiza con profesionales del derecho con amplia experiencia y trayectoria en la materia.
        <ul>
            <li>Informes
            <li>Balance
            <li>Estados Financieros
            <li>Circular de Cartera
            <li>Factura servicio Admon
            <li>Liquidacion de impuestos
            <li>Presupuesto año fiscal
            <li>Conciliacion Bancaria
        <ul>
        </p>`);
    });


    $(window).scroll(function(){
        

        if ($(document).scrollTop() < 160) {
            $('.marca').css('height' ,  '7rem');
            $('header').css('background' , 'transparent');
            $('nav').css('background' , 'transparent');
        }else{
            $('.marca').css('height' ,  '4rem');
            $('header').css('background' , 'white');
            $('nav').css('background' , 'white');
        }

        if(($(document).scrollTop() > 300) && ($(document).scrollTop() < 700)){

                
                $('.gallery-item-icon').slideDown();
                $('.servicios h1').slideDown();
        }
    });
});