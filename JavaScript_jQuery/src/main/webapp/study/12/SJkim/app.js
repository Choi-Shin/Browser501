$(function () {
  makeCal($("#calendar_wrap"), new Date());
});

function makeCal(target, date) {
  //처음 실행시 현재날짜 정보
  if (date == null || date == undefined) {
    date = new Date();
  }
  //2021년 11월
  var selDate = date;
  var year = selDate.getFullYear();
  var month = selDate.getMonth() + 1;
  $(target).empty().append(makeHtml(year, month));

  //1일의 요일 계산
  var thisMonth = new Date(selDate.getFullYear(), selDate.getMonth(), 1);
  //마지막 일자 계산
  var thisLastDay = new Date(selDate.getFullYear(), selDate.getMonth() + 1, 0);

  var tag = "<tr>";
  var cnt = 0;

  //빈 공백 tag
  for (i = 0; i < thisMonth.getDay(); i++) {
    tag += "<td></td>";
    cnt++;
  }

  //일자 tag
  for (i = 1; i <= thisLastDay.getDate(); i++) {
    if (cnt % 7 == 0) {
      tag += "<tr>";
    }
    tag += "<td>" + i + "</td>";
    cnt++;
  }
  while (cnt % 7 != 0) {
    tag += "<td></td>";
    cnt++;
  }
  if (cnt % 7 == 0) {
    tag += "</tr>";
  }

  function makeHtml(year, month) {
    var calendar_html_code =
      "<table class='custom_calendar_table'>" +
      "<thead class='cal_yyymm'>" +
      "<th colspan='7'><p><span>" +
      year +
      "</span>년 <span>" +
      month +
      "</span>월</p></th>" +
      "</thead>" +
      "<thead  class='cal_week'>" +
      "<th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th>" +
      "</thead>" +
      "<tbody id='custom_set_date'>" +
      "</tbody>" +
      "<tfoot class='cal_move'>" +
      "<th colspan='7'><p><span class='prev'>이전 달</span>&nbsp&nbsp<span class='next'>다음 달</span></p></th>" +
      "</tfoot>" +
      "</table>";
    return calendar_html_code;
  }

  $(target).find("#custom_set_date").append(tag);
  clickEvent();

  function clickEvent() {
    //이전달
    $(".custom_calendar_table").on("click", ".prev", function () {
      selDate = new Date(
        selDate.getFullYear(),
        selDate.getMonth() - 1,
        selDate.getDate()
      );
      makeCal($(target), selDate);
    });
    //다음날
    $(".custom_calendar_table").on("click", ".next", function () {
      selDate = new Date(
        selDate.getFullYear(),
        selDate.getMonth() + 1,
        selDate.getDate()
      );
      makeCal($(target), selDate);
    });
  }
}
