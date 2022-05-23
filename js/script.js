let sec = 00
let min = 00
let hr = 00
let interval 

function twoDigits(digit){
    if(digit < 10){
        return('0' + digit)
    }else{
        return(digit)
    }
}
//Clicando no botão de iniciar
function start(){
    time() //Chamando função time para iniciar o contador imediatamente
    
    interval = setInterval(time, 1000) //Definindo o intervalo de tempo
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval);
    sec = 00
    min = 00
    hr = 00
    document.querySelector('.display').innerHTML = '00:00:00'

}

function time(){
    sec++;
    document.querySelector('.display').innerHTML = sec;

    if(sec == 60){
        min++
        sec=0

        if(min == 60){
            hr++
            min=0
        }
    }
    document.querySelector('.display').innerHTML = twoDigits(hr) +':'+ twoDigits(min) +':'+ twoDigits(sec);
}