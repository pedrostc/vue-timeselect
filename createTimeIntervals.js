var interval = 30; //minutes interval
var times = []; // time array
var start = 0; // start time
var end = 24; // start time
var meridiem = ['AM', 'PM']; // AM-PM

function formatHour(hour) {
  return [0, 12].includes(hour) ? 12 : ("0" + (hour % 12)).slice(-2);
}

function formatMinutes(minute) {
  return ("0" + mm).slice(-2);
}

function formatMeridiem(hour) {
  const hh = hour === 24 ? 0 : hour;
  return meridiem[Math.floor(hour/12)];
}

function formatTime(hour, minute) {
  return `${formatHour(hh)}:${formatMinutes(mm)} ${formatMeridiem(hh)}`;
}

let time = start;
const endMinutes = end * 60;

//loop to increment the time and push results in array
while (time < endMinutes) {
  var hh = Math.floor(time / 60); // getting hours of day in 0-24 format
  var mm = (time % 60); // getting minutes of the hour in 0-55 format

  const item = {
    text: formatTime(hh, mm),
    value: {
      hour: hh,
      minutes: mm
    }
  }

  times.push(item); // pushing data in array in [00:00 - 12:00 AM/PM format]
  time = time + interval;
}

console.log(times);
