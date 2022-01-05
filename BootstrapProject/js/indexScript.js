// Instrução JQuery que só roda quando o html tiver totalmente carredo
$(document).ready(function(){
    // Progress bar
    //Circulo A:
    let containerA = document.getElementById('circleA');

    let circleA = new ProgressBar.Circle(containerA,{
        color: '#64DAF9',
        strokeWidth: 8, // width da barra
        duration:1400, // duração da animação
        from: {color: '#AAA'}, // cor que começa
        to:{color: '#65DAF9'}, // cor que termina
        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value =  Math.round(circle.value()*60);

            circle.setText(value);
        }
    });

    //Circulo B:
    let containerB = document.getElementById('circleB');

    let circleB = new ProgressBar.Circle(containerB,{
        color: '#64DAF9',
        strokeWidth: 8, // width da barra
        duration:1600, // duração da animação
        from: {color: '#AAA'}, // cor que começa
        to:{color: '#65DAF9'}, // cor que termina
        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value =  Math.round(circle.value()*254);

            circle.setText(value);
        }
    });

    //Circulo C:
    let containerC = document.getElementById('circleC');

    let circleC = new ProgressBar.Circle(containerC,{
        color: '#64DAF9',
        strokeWidth: 8, // width da barra
        duration:1000, // duração da animação
        from: {color: '#AAA'}, // cor que começa
        to:{color: '#65DAF9'}, // cor que termina
        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value =  Math.round(circle.value()*32);

            circle.setText(value);
        }
    });


    //Circulo D:
    let containerD = document.getElementById('circleD');

    let circleD = new ProgressBar.Circle(containerD,{
        color: '#64DAF9',
        strokeWidth: 8, // width da barra
        duration:2500, // duração da animação
        from: {color: '#AAA'}, // cor que começa
        to:{color: '#65DAF9'}, // cor que termina
        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value =  Math.round(circle.value()*5243);

            circle.setText(value);
        }
    });


    //iniciando o loader quando o usuário chegar no elemento de progress bar

    let dataAreaOffset = $('#data-area').offset(); // pega posição da div #data-area na pagina
    let stop = 0; // flag para rodar o load da progressbar apenas uma vez 
    $(window).scroll(function(e){
        let scroll = $(window).scrollTop(); // coleta onde está o scroll do usuário

        if((scroll > (dataAreaOffset.top - 500)) && stop == 0){
            circleA.animate(1.0); // 1.0 significa que o conteudo interno doprogressbar tem 100% do que foi
            circleB.animate(1.0);// atribuido em seu value
            circleC.animate(1.0);
            circleD.animate(1.0);
            stop = 1; // seta flag para nao rodar o progressbar mais de 1 vez por load de pagina
        }
        
    });
   

   // PARALLAX
   
   //carrega todas as imagens da pagina primeiro para evitar bug no parallax:
   setTimeout(function(){
       $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
       
   },250); // 250 milisegundos

}); 