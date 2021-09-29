
var conta = 0

function insert(num){

    var initial = $("#result").html();

    if (initial == 0){
        $("#result").html(" ")
    }
    if (conta != 0){
        conta = 0
        $("#result").html(" ")
        
    }
    $("#result").append(num);
    
}

function clean(){
    $("#result").html("0");
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

        conta = eval(result);

        $("#result").html(conta);
        
    }
}

