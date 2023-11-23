let lamp_state = false
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.curtain').onclick = function(element){
        element.target.style = "bottom: 100%; transition: 1s;";
    }

    document.querySelector('.lamp').onclick = function(){
        if (lamp_state == false)
        {
            document.querySelector('.triangle').style.opacity = 0.5;
            document.querySelector('.hat').style.opacity = 1;
            document.querySelector('.wizard').style.opacity = 1;
            document.querySelector('.bunny').style.opacity = 1;
            document.querySelector('.pigeon').style.opacity = 1;
            lamp_state = true
        }
        else
        {
            document.querySelector('.triangle').style.opacity = 0;
            document.querySelector('.hat').style.opacity = 0;
            document.querySelector('.wizard').style.opacity = 0;
            document.querySelector('.bunny').style.opacity = 0;
            document.querySelector('.pigeon').style.opacity = 0;
            lamp_state = false
        }
    }

    document.querySelector('.bunny').onclick = function() {
        document.querySelector('.bunny').style.bottom = '-540px';
        setTimeout(function(){
            document.querySelector('.pigeon').style.bottom = '-270px';
        },500);
    }

     document.querySelector('.pigeon').onclick = function() {
        document.querySelector('.pigeon').style.bottom = '-410px';
        setTimeout(function(){
            document.querySelector('.bunny').style.bottom = '-410px';
        },500);
    }
})



