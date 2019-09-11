//set fuction to update time

var Clock = setInterval(updateTime, 1000);

// function to loop every second

function updateTime(){
    var TimeNow = new Date();  //create variable to update
    console.log('second');

//Hours
    if (TimeNow.getHours() > 12){
        if (TimeNow.getHours() - 12 < 10){
            document.getElementById("Hour").innerHTML = '0' + (TimeNow.getHours() - 12);
            }
            else {
                document.getElementById("Hour").innerHTML = TimeNow.getHours() - 12;
            }
    }
    else{
            if (TimeNow.getHours() < 10){
            document.getElementById("Hour").innerHTML = '0' + TimeNow.getHours();
            }
            else {
                document.getElementById("Hour").innerHTML = TimeNow.getHours();
            }
        }
//Minutes
    if (TimeNow.getMinutes() > 9){
        document.getElementById("Min").innerHTML = TimeNow.getMinutes();
        }
    else{
        document.getElementById("Min").innerHTML = '0' + TimeNow.getMinutes();
        }
//Seconds
    if (TimeNow.getSeconds() > 9){
        document.getElementById("Sec").innerHTML = TimeNow.getSeconds();
        }
    else{
        document.getElementById("Sec").innerHTML = '0' + TimeNow.getSeconds();
        }
    }