function get_Time() {
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var ampm = "";

  if (hours < 12) {
    ampm = "오전 ";
  } else {
    ampm = "오후 ";
  }
  hours = hours == 0 ? 12 : hours;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return ampm + "\n" + hours + ":" + minutes;
}
// 년과 달을 받아서 마지막 일을 알아 냅니다.
function lastDate(year, month) {
  var last = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
  //해당년도가 400의 배수일 때는 윤년이지만 100의 배수일 때는 평년. 나머지 4의 배수만 윤년.
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    last[1] = 29;
    return last[month];
  } else {
    return last[month];
  }
}
function param() {
  var year = document.getElementById("year").value;
  var month = document.getElementById("month").value - 1;
  if (month > 12) {
    alert("잘못된 입력입니다.");
    return window.location("calenderFind.html");
  }
  var firstDay = new Date(year, month, 1).getDay();
  var last = lastDate(year, month);
  var a = drawCal(firstDay, last, year, month);
  return a;
}
// table태그를 이용하여 달력을 만들어 줍니다.
function drawCal(firstDay, lastDate, year, monthName) {
  var text = "";
  text +=
    "<style>td {height: 100px;}table { margin: 0 auto;margin-top: 30px;width: 700px;}table { margin: 0 auto;margin-top: 30px;width: 700px;}</style>";

  alert(year + "년 " + (monthName + 1) + "월 달력을 출력합니다.");
  var title = year + "년 " + (monthName + 1) + "월";
  var table = "<table>";
  table +=
    "<caption style='background-color: #eef6f1; color:navy; font-size:80px; font-weight:bold'>" +
    title +
    "</caption>";
  table += "<colgroup>";
  for (var i = 0; i < 7; i++) {
    table += "<col width=100px>";
  }
  table += "</colgroup>";
  var openCol = "<td bgcolor=#ffefff>";
  openCol += "<font color=darkblue>";
  var closeCol = "</font></td>";
  text += table + "<tr align=center valign=center>";
  var weekDay = new Array("일", "월", "화", "수", "목", "금", "토");
  // 달력의 일, 월, 화, 수, 목, 금, 토, 일을 출력합니다.
  for (var i = 0; i < 7; i++) {
    text += openCol + weekDay[i] + closeCol;
  }
  text += "</tr>";
  // 달력 표를 만들어 줍니다.
  var row = Math.ceil((lastDate + firstDay) / 7);
  var printDate = 1;
  for (var a = 0; a < row; a++) {
    text += "<tr align=right valign=top bgcolor=#ffefee>";
    for (var b = 0; b < 7; b++) {
      if ((a == 0 && firstDay > b) || lastDate < printDate) {
        text += "<td bgcolor=#f4f4f4>&nbsp;";
      } else {
        text += "<td>" + printDate;
        printDate++;
      }
      text += "</td>";
    }
    text += "</tr>";
  }
  text += "</table>";
  return text;
}
function run() {
  document.write(param());
}
