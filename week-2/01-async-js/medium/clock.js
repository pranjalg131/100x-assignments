// First Way 
//  - HH:MM::SS (Eg. 13:45:23)

// - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function printDate(){
  console.clear();
  let date = new Date();

  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");

  let hours12HourFormat = (date.getHours() % 12).toString().padStart(2, "0"); 
  let suffix = "AM";
  if(Math.floor(date.getHours() / 12) === 1) suffix = "PM";

  console.log( ` The time is : ${hours}:${minutes}::${seconds} OR ${hours12HourFormat}:${minutes}::${seconds} ${suffix}`  );
  
}

setInterval(printDate, 1000);