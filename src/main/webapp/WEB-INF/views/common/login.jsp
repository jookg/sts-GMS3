<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<c:set var="ctx" value="<%=application.getContextPath() %>" />
<c:set var="img" value="${ctx}/resources/img" />
<c:set var="css" value="${ctx}/resources/css" />
<c:set var="js" value="${ctx}/resources/js" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<link rel="stylesheet" href="${ctx}/resources/css/member.css" />
<script src="${js}/member.js" ></script>
</head>
<body>
<div id="wrapper">
	<header>
	<h1 class="gms-text-center">Login</h1>
	<hr /><br/><br/>
	</header>
	<div id="container" align="center">
	<form id="login_box" name="login_box">
		<img src="${ctx}/resources/img/abc.jpg" width=200px; height=200px; alt="" /><br />
		<span class="gms-textcolor-blue gms-inline-block member-span">ID</span>
		<input type="text" id="id" name="id" value="joo" class="input-size" /> <br/>
		<span class="gms-textcolor-blue gms-inline-block member-span">PASSWORD</span> 
		<input type="password" id='pass' name="password" value="123" class="input-size" /><br/>
		<input type="submit" id="loginBtn" class="gms-bgcolor-blue" value="로그인"/>
		<input type="reset" class="gms-bgcolor-red" value="취소"/>
		<input type="hidden" name="action" value="login" />
		<input type="hidden" name="page" value="main" />
		<input type="button" class="gms-bgcolor-blue" onclick="location.href='${ctx}/member.do?action=move&page=member_join'" value="회원가입"/>
	</form>
	</div>
	<script>
	app.member.init();
	
	</script>
</div>
		<footer>
		<div>
			<p>Posted by: Hege Refsnes</p>
   			<p>Contact information: <a href="mailto:someone@example.com">someone@example.com</a>.</p>
			<a href="${ctx}/JDBC_test.jsp">DB연결 테스트</a><br/>
			<a href="<%=request.getContextPath()%>/util/update_email.jsp">이메일</a>
		</div>
	</footer>
</body>
</html>