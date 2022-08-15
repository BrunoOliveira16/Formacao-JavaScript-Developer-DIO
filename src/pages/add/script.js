//Função para envio do Titulo
$(document).ready(function() {
$('.btn-primary').click(function() {
    if ($('#Titulo').val().length != 0) {
        var x = $('.list').html();
        var y = <div class="alert alert-success alert-dismissible fade in">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">X</a> + $('#Titulo').val() + </div>;
        $('.list').html(y + x);
        $('#Titulo').val("");
    } else alert("Por favor preencha o campo titulo!");
});
});

// Função para envio da tarefa
$(document).ready(function() {
$('.btn-primary').click(function() {
    if ($('#text').val().length != 0) {
        var x = $('.list').html();
        var y = `<div class="alert alert-success alert-dismissible fade in">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">X</a>
            ` + $('#text').val() + `</div>`;
        $('.list').html(y + x);
        $('#text').val("");
    } else alert("Por favor preencha o campo tarefa!");
});
});

// Função para envio da data de incio
$(document).ready(function() {
    $('.btn-primary').click(function() {
        if ($('#data').val().length != 0) {
            var x = $('.list').html();
            var y = 
 `<div class="alert alert-success alert-dismissible fade in">
<a href="#" class="close" data-dismiss="alert" aria-label="close">X</a>
          ` + $('#data').val() + `</div>`;
            $('.list').html(y + x);
            $('#data').val("");
        } else alert("Por favor preencha o campo data inicio!");
    });
});

// Função para envio da hora de inicio
$(document).ready(function() {
    $('.btn-primary').click(function() {
        if ($('#hora').val().length != 0) {
            var x = $('.list').html();
            var y = 
 `<div class="alert alert-success alert-dismissible fade in">
<a href="#" class="close" data-dismiss="alert" aria-label="close">X</a>
          ` + $('#hora').val() + `</div>`;
            $('.list').html(y + x);
            $('#hora').val("");
        } else alert("Por favor preencha o campo Hora inicio!");
    });
});

// Função para envio da duração da atividade
$(document).ready(function() {
    $('.btn-primary').click(function() {
        if ($('#tempo').val().length != 0) {
            var x = $('.list').html();
            var y = 
 `<div class="alert alert-success alert-dismissible fade in">
<a href="#" class="close" data-dismiss="alert" aria-label="close">X</a>
          ` + $('#tempo').val() + `</div>`;
            $('.list').html(y + x);
            $('#tempo').val("");
        } else alert("Por favor preencha o campo duração da atividade!");
    });
});
