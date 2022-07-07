function time(ms) {
  let seconds = Math.floor(ms / 1000);
 
  let minutes = Math.floor(seconds / 60);
  
  let hours = Math.floor(minutes / 60);
  
  seconds = seconds % 60;
  minutes = minutes % 60;
  let SECOND = "";
  let MINUTE = "";
  let HOUR = "";
  
  if (seconds == 1) {
    SECOND = seconds + " second";
  } else {
    SECOND = seconds + " seconds";
  }
  if (minutes == 1) {
    MINUTE = minutes + " minute";
  } else {
    MINUTE = minutes + " minutes";
  }
  if (hours == 1) {
    HOUR = hours + " hour";
  } else {
    HOUR = hours + " hours";
  }

  let display = [];
  if (HOUR[0] > 0) {
    display.push(HOUR);
  }
  if (MINUTE[0] > 0) {
    display.push(MINUTE);
  }
  if (SECOND[0] > 0) {
    display.push(SECOND);
  }
  return display.join(' ');
}

module.exports = time;