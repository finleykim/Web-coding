


var currentindex = 0;

setInterval(function(){
    
    if (currentindex<2){
        currentindex++;
    }else{
        currentindex=0;
    }
    
    var slidePosition = currentindex * (-360)+"px"
    
    $("slidelist").animate({})
},3000);