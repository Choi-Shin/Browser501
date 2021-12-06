$(function () {
  makeCal($("#calendar_wrap"), new Date());
});

function makeCal(target, date) {
  if (date == null || date == undefined) {
    date = new Date();
  }
  var calDate = date;
  var year = calDate.getFullYear();
  var month = calDate.getMonth() + 1;
  $(target).empty().append(makeHTML(year, month));

  var firstDay = new Date(
    calDate.getFullYear(),
    calDate.getMonth(),
    1
  ).getDay();
  var lastDate = new Date(
    calDate.getFullYear(),
    calDate.getMonth + 1,
    0
  ).getDate();

  function makeHTML(year, month) {
    var cal_html_code =
      "<table class='cal_table'>" +
      "<thead class='year_month'>" +
      "<th colspan='7'><p><span>" +
      year +
      "</span>년 <span>" +
      month +
      "</span>월</p></th></thead>" +
      "<thead cless='week'>" +
      "<th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th>" +
      "</thead>" +
      "<tbody id='cal_number'></tbody>" +
      "<tfoot class='cal_select'>" +
      "<th colspan='7'><p><span class='prev'>이전 달</span>&nbsp;&nbsp;" +
      "<span class='next'>다음 달</span></p></th></tfoot></table>";

    return cal_html_code;
  }
  //달력 만들기
  var row = "<tr>";
  var count = 0;

  for (var i = 0; i < firstDay; i++) {
    row += "<td></td>";
    count++;
  }

  for (var i = 1; i <= lastDate; i++) {
    if (count % 7 == 0) {
      row += "<tr>";
    }
    row += "<td>" + i + "</td>";
    count++;
  }

  while (count % 7 != 0) {
    row += "<td></td>";
    count++;
  }
  if (count % 7 == 0) {
    row += "</tr>";
  }

  $(target).find("#cal_number").append(row);
  clickEvent();

  function clickEvent() {
    $(".cal_table").on("click", ".prev", function () {
      calDate = new Date(
        calDate.getFullYear(),
        calDate.getMonth() - 1,
        calDate.getDate()
      );
      makeCal($(target), calDate);
    });

    $(".cal_table").on("click", ".next", function(){
      calDate = new Date(
        calDate.getFullYear(),
        calDate.getMonth() + 1,
        calDate.getDate()
      );
      makeCal($(target), calDate);
    })
  }
}
