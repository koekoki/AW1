
var conta = 0

function insert(num){

    var initial = $("#result").html();
    if (initial == 0){
        $("#result").html(" ")
    }
    if (conta != 0 && num != '-' && num != '/' && num != '*' && num != '+'){
        conta = 0
        $("#result").html(" ")
        
    }else{
        conta = 0
    }
    var lastResult = initial.slice(-1); 

    if (initial.length < 20){

    if (lastResult != '-' && lastResult != '+' && lastResult != '/' && lastResult != '*')
    $("#result").append(num);
    else 
    if (num != '-' && num != '/' && num != '*' && num != '+')
    $("#result").append(num);
    }

}

function clean(){

    $("#result").html("0");
}

function sound1(){
    var audio = new Audio('css/click.mp3');
    audio.addEventListener('canplaythrough', function() {
    audio.play();
    });
}

function sound2(){
    var audio = new Audio('css/click2.mp3');
    audio.addEventListener('canplaythrough', function() {
    audio.play();
    });
}


function resetar(value){
    alert(value)
    if (value  == "stop" )
        {   
            clean()
            insert()
        }
    else
        insert()
}

function calculate(){

    var result = $("#result").html();

    if(result){
        var resultFormat = parseFloat(result.replace(',', '.'))

        conta = eval(result);

        $("#result").html(conta);
        
    }
}

