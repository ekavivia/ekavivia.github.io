window.onload = function(){
    greet();
    function greet(){
        var theMessage;
        var theHours    = new Date().getHours();
        var morning     = ('Good Morning');
        var afternoon   = ('Good Afternoon');
        var evening     = ('Good Evening');
        if(theHours >= 0 && theHours < 12){
            theMessage = morning;
        }else if(theHours >= 12 && theHours <17){
            theMessage = afternoon;
        }else if(theHours >= 17 && theHours <24){
            theMessage = evening;
        }
        document.getElementById('greet').innerHTML='<h1>'+theMessage+'</h1>';
    }
}