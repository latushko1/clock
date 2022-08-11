document.addEventListener('DOMContentLoaded', () => {
    const clockTime = new Date('Aug 11 2022 14:25:00');

    const daysVal = document.querySelector('.time-count__days .time-count__val');
    const hoursVal = document.querySelector('.time-count__hours .time-count__val');
    const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
    const secondsVal = document.querySelector('.time-count__seconds .time-count__val');
    const content = document.querySelector('.time-count__content')

    const daysText = document.querySelector('.time-count__days .time-count__text');
    const hoursText = document.querySelector('.time-count__hours .time-count__text');
    const minutesText = document.querySelector('.time-count__minutes .time-count__text');
    const secondsText = document.querySelector('.time-count__seconds .time-count__text');



    function declOfNum(number, titles) {  
        let cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }

    const timeCount = () => {
        let now = new Date();

        let leftUntil = clockTime - now;

       
        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hourse = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftUntil / 1000 / 60 ) % 60;
        let seconds = Math.floor(leftUntil / 1000) % 60;

        daysVal.textContent = days;
        hoursVal.textContent = hourse;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;

        if (days < 10)  {
            daysVal.textContent = `0${days}`
        }

        if (hourse < 10)  {
            hoursVal.textContent = `0${hourse}`
        }

        if (minutes < 10)  {
            minutesVal.textContent = `0${minutes}`
        }

        if (seconds < 10)  {
            secondsVal.textContent = `0${seconds}`
        }

        if(days <= 0 && hourse<= 0 && minutes<=0 && seconds <=0){
            document.querySelector('.time-count__title').remove();
            content.innerHTML = `<h2 class='time-count__title-ivent'>Событие завершено</h2>`;
            clearInterval(interval);
        }

        daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
        hoursText.textContent = declOfNum(hourse, ['час', 'часа', 'часов']);
        minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']); 
    }

    

    timeCount();
    let interval = setInterval(timeCount, 1000);
})