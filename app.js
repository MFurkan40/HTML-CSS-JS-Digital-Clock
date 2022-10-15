setInterval(() => {
  let seconds = new Date().getSeconds();
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();
  let date = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  let day = new Date().toLocaleString("en", { weekday: "long" });
  let session = "AM";
  const clock = document.getElementById("clock");
  const calendar = document.getElementById("calendar");
  const currentDay = document.getElementById("current-day");

  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  String(hours).length == 1 && (hours = "0" + hours);

  String(minutes).length == 1 && (minutes = "0" + minutes);

  String(seconds).length == 1 && (seconds = "0" + seconds);

  String(date).length == 1 && (date = "0" + date);

  String(month).length == 1 && (month = "0" + month);

  clock.innerText = `${hours}:${minutes}:${seconds} ${session}`;
  calendar.innerText = `${date}/${month}/${year}`;
  currentDay.innerText = day;
}, 200);
