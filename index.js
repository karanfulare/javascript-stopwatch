console.log('script attached ');         // confirming script attached 
 var s = document.getElementById('sec');             // getting all my text and buttons and storing them in var for later use 
 var m = document.getElementById('min'); 
 var start = document.getElementById('start');
 var stop = document.getElementById('stop');
 var reset = document.getElementById('reset');
var seconds=0;
var minutes=0;

 start.addEventListener('click',function(){               // event listener it performs specified function/tasks on specified action(eg.click)
     console.log('start the watch');
    
     
      interval=setInterval(function(){                            // named setinterval so that i can use clearinterval  to stop it 
            if(seconds<60){
                    seconds++;                            // increment seconds 
                  if(seconds==60){
                              minutes++;
                              seconds=0;                    // once sec reaches 60 we set it to 0 and increment min by 1 here and above this line 
                    }
            }
            
            m.innerText=minutes;               // changes the innertext value 
             s.innerText=seconds;
            console.log(seconds);
           
         },1000);                                    // 1000 ms = 1 sec , so our func runs every 1 sec until it is terminated  
        
   
 })

 stop.addEventListener('click',function(){
    console.log('stop the watch');
    m.innerText=minutes;
    s.innerText=seconds;
    clearInterval(interval);                       //stoping the interval
})

reset.addEventListener('click',function(){
    console.log('reset the watch');
    minutes=0;
    seconds=0;                                     // if we do not set seconds=0 here we, func in start will take the current value of seconds which will not be 0 
    s.innerText='00';
    m.innerText="00";
    clearInterval(interval);                 //stoping the interval
})
