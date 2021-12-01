package time;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Calendar;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Time_Servlet
 */

//Servlet: web에서 수행되는 또다른 자바
//Servlet(MVC Model1): Client의 요청을 받아서(http://localhost/time)
//					   서버에서 처리한 후 Client에 html문서 형식으로 Browser에 전달
//Servlet(MVC Model2): Client의 요청을 받아 서버에서 처리한 후 결과를 Jsp에 전달해
//				   	   Browser 실행
@WebServlet("/time")
public class Time_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		response.setCharacterEncoding("utf-8");
		
		Calendar c = Calendar.getInstance();
		int hour = c.get(Calendar.HOUR_OF_DAY);
		int minute = c.get(Calendar.MINUTE);
		int second = c.get(Calendar.SECOND);
		System.out.println("서버의 시간을 출력 " + hour + "/" + minute + "/" + second);
		PrintWriter pw = response.getWriter();
		pw.println("<html><body><br><br>");
		pw.println("web 출력: " + hour + "/" + minute + "/" + second + "<br>");
		pw.println("</body></html>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
