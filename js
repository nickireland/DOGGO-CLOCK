var time = new Date().getHours();

var wakeuptime = 7;
var noon = 12;
var chowtime = 12;
var dreamtime = chowtime + 1;
var playtime;
var nighttime = 18;
var message  = document.getElementById('timeEvent');
var doggo = document.getElementById('doggo');
var image = "https://lh3.googleusercontent.com/7m_LjhXshCaN-3sRbHKzwV3_2qdaZ2-tKfTWhni3aWmhh-DA7ngH89cJhQh0Q7FGDy97YMB_AWgKiI5GmmjCFfSZgf8MhTtT8EDDK1D4JEiy_FwKz2stYCqIPnWbfV-UqfhIw3GMSL8=w2400";

var updateClock = function() {
  image = "https://lh3.googleusercontent.com/7m_LjhXshCaN-3sRbHKzwV3_2qdaZ2-tKfTWhni3aWmhh-DA7ngH89cJhQh0Q7FGDy97YMB_AWgKiI5GmmjCFfSZgf8MhTtT8EDDK1D4JEiy_FwKz2stYCqIPnWbfV-UqfhIw3GMSL8=w2400";
  var messageText;
  
  if(time == playtime){
    image = "https://lh3.googleusercontent.com/TjbB270YYogPWSXnMUUQaV6jIjXNvhmNyseEX6-417k00KbpY1VEi1opsQ_h43TX1_TL8r74EU8cL4iiMzfHGQWr_TL06oCqaK2TNw_JQCFvDhBWThXBAdLxEma3xoNO5k9RU0Qh_wI=w2400";
    messageText = "come hooman! it is time for zooms!";
  } else if (time == dreamtime){
    image = "https://lh3.googleusercontent.com/21HDl5OianWfeyQ7VlmTXGliXFCDRqKrkkWGIFya9VxPEEsZt1QLPvXoMljB6JDNij3w1YJwE8f6YiyFooB_4TeKlBc8YpgPOx5IYomeb9VKbGq8sYC4UjJMDhZlirLh_tP8dR8TNCA=w2400";
    messageText = "if i am sleeps on you. you cannot move. it is. the law.";
  } else if (time == chowtime){
    image = "https://lh3.googleusercontent.com/5YNkoD3jY1iBLLRbLjIvunTpJLZGovrO-f43e2Us6lQp2QRTg-WrzxPRYUmIilszeiSAl5HmBnTg3lPgRrpSSI9f1y0q_334bl-JgmHhf0EbJwJBeKLyxc7kAvXANUpcEI5MgFYMu_o=w2400";
    messageText = "OH BOY OH BOY OH BOY OH BOY OH BOY OH BOY OH BOY OH BOY";
  } else if (time == wakeuptime){
    image = "https://lh3.googleusercontent.com/mkZOoMkzE37TiFVfthwteuVlKIArV9KsuB8vpHrDdedte1BCMNAUOBZTPjOdKb25iB8UaVqI-uOjDbmJuXsqk94oyXo5Cs4xupi4gYKqYKjSyUYfwfvpP8AApreqJ7Ti8mfvR0fPYFM=w2400";
    messageText = "goooooooob morning fren!";
  } else {
    messageText = "hello!";
  } 
  
  message.innerText = messageText;
  doggo.src = image;
  
  showCurrentTime();
};

var showCurrentTime = function() {
  var clock = document.getElementById('clock');
  
  
  var currentTime = new Date();
  
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";
  
  if(hours >= noon){
    meridian = "PM";
  }
  
  if(hours > 12){
    hours = hours - 12;
  }
  
  if(minutes < 10){
    minutes = "0"+minutes;
  }
  
  if(seconds < 10){
    seconds = "0"+seconds;
  }
  
  var clockTime = hours + ":" + minutes + ":" + seconds + "   " + meridian;
  
  clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var playTimeButton = document.getElementById("playTimeButton");
var dreamTimeSelect = document.getElementById("dreamTimeSelector");
var chowTimeSelect = document.getElementById("chowTimeSelector");
var wakeUpTimeSelect = document.getElementById("wakeUpTimeSelector");
var isPlayTime = false;

var playEvent = function(){
  if(isPlayTime === false){
    isPlayTime = true;
    time = playtime;
    playTimeButton.innerText = "com on fren!";
    playTimeButton.style.backgroundColor = "#222";
  } else {
    isPlayTime = false;
    time = new Date().getHours();
    playTimeButton.innerText = "goodbye hooman!";
    playTimeButton.style.backgroundColor = "#222";
  }
};

var chowEvent = function() {
  chowtime = chowTimeSelector.value;
};

var wakeUpEvent = function(){
  wakeuptime = wakeUpTimeSelector.value;
};

var napEvent = function(){
  dreamtime = dreamTimeSelector.value;
};

playTimeButton.addEventListener('click',playEvent);
dreamTimeSelector.addEventListener('change', napEvent);
chowTimeSelector.addEventListener('change', chowEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
