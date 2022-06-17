const todayDiv = document.getElementById("today");
const timeDiv = document.getElementById("clock");

function getTime() {
  let now = new Date();
  let year = now.getFullYear(); //년도
  let month = now.getMonth() + 1; //월 1-12
  let day = now.getDate(); //일 1-31
  let dayNumber = now.getDay(); //요일 0-6
  const dayList = ["일", "월", "화", "수", "목", "금", "토"];
  let hour = now.getHours(); //0-23시
  let minute = now.getMinutes(); //0-59분
  let second = now.getSeconds(); //0-59초
  let noon = "오전";
  if (hour > 11) {
    noon = "오후";
    hour = hour - 12;
    if (hour == 0) {
      hour = 12;
    }
  }

  todayDiv.textContent = 
    year + 
    "-" + 
    month + 
    "-" + 
    day + 
    " " + 
    dayList[dayNumber] + 
    "요일";

  timeDiv.textContent =
    noon +
    " " +
    formatNumber(hour) +
    ":" +
    formatNumber(minute) +
    ":" +
    formatNumber(second)
    ;
}


getTime();
setInterval(getTime, 1000);

function formatNumber(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}