//set fuction to update time

var Clock = setInterval(updateTime, 1000);

// function to loop every second

function updateTime(){
    var TimeNow = new Date();  //create variable to update
    console.log('second');

//Convert military hours to standard

if (TimeNow.getHours() > 12){
    document.getElementById("Hour").innerHTML = TimeNow.getHours() - 12;}

else{
    document.getElementById("Hour").innerHTML = TimeNow.getHours();
}
document.getElementById("Min").innerHTML = TimeNow.getMinutes();
document.getElementById("Sec").innerHTML = TimeNow.getSeconds();

}

