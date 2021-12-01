$(function () {
  makeCal($("#calendar_wrap"), new Date());
});

function makeCal(target, date) {
  //처음 실행시 현재 날짜 정보
  if (date == null || date == undefined) {
    date = new Date();
  }
  var seldate = date;
  var year = seldate.getFullYear();
  var month = seldate.getMonth() + 1;
  $(target).empty().append(makeHTML(year, month));

  var firstDay = new Date(
    seldate.getFullYear(),
    seldate.getMonth(),
    1
  ).getDay();
  var lastDate = new Date(
    seldate.getFullYear(),
    seldate.getMonth() + 1,
    0
  ).getDate();

  var row = "<tr>";
  var count = 0;

  //공백 요일 테이블
  for (var i = 0; i < firstDay; i++) {
    row += "<td></td>";
    count++;
  }

  //날짜 출력 테이블
  for (var i = 0; i < lastDate; i++) {
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
  row += "</tr>";

  function makeHTML(year, month) {
    var cal_html_code =
      "<table class='calendar_table'>" +
      "<thead class='year_month'>" +
      "<th colspan='7'><p><span>" +
      year +
      "</span>년<span>" +
      month +
      "</span>월</p></th></thead>" +
      "<thead class = 'week'>" +
      "<th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th>" +
      "</thead>" +
      "<tbody id='date_table'></tbody>" +
      "<tfoot class='cal_select'>" +
      "<th colspan='7'><p><span class='prev'>이전 달</span>&nbsp;&nbsp;" +
      "<span class='next'>다음 달</span></p></th>" +
      "</tfoot></table>";

    return cal_html_code;
  }

  $(target).find("#date_table").append(row);
  clickEvent();

  function clickEvent() {
    $(".calender_table").on("click", ".prev", function () {
      seldate = new Date(
        seldate.getFullYear(),
        seldate.getMonth() - 1,
        seldate.getDate()
      );
      makeCal($(target), seldate);
    });
    $(".calender_table").on("click", ".next", function () {
      seldate = new Date(
        seldate.getFullYear(),
        seldate.getMonth() + 1,
        seldate.getDate()
      );
      makeCal($(target), seldate);
    });
  }
}
