<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
String fname = request.getParameter("fname");
String id = request.getParameter("custId");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
first-name : <%=fname %> <br>
id : <%=id %>
</body>
</html>