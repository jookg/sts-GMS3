<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div id="wrapper">
	
		<div id="header">
			<tiles:insertAttribute name="header" />
		</div>
	
		<section>
			<article id="content">
				<tiles:insertAttribute name="content" />
			</article>
		</section>
	</div>
	
		<div id="footer">
			<tiles:insertAttribute name="footer" />
		</div>
	
</body>
<script>
</script>
</html>