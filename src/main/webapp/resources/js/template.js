var compUI={
		div : (x)=>{return $('<div/>',{id:x});},
		img : (x,y)=>{return $('<img/>',{id: x, src: y});},
		input : (json)=>{return $('<input/>',json);},
		h1 : x=>{return $('<h1/>',{id:x});},
		span : x=>{return $('<span/>',{id:x});},
		aa : x=>{return $('<a>',{href:'#',role:'button',id:x});}
}
var bbsUI={
		tbl : ()=>{
		/*	var a=[
				{width:'5%',txt:'No'},
				{width:'20%',txt:'제 목'},
				{width:'35%',txt:'내 용'},
				{width:'15%',txt:'글쓴이'},
				{width:'15%',txt:'작성일'},
				{width:'10%',txt:'조회수'}
			];
			'<th style=width:'+j.width+'>'+j.txt+'</th>'*/
			var y='	<table id="member_list_tab" style="margin-top:50px;">'
				+'			<tr>'
				+'				<th>no.</th>'
				+'				<th>아이디</th>'
				+'				<th>제목</th>'
				+'				<th>내용</th>'
				+'				<th>조회수</th>'
				+'				<th>등록일</th>'
				+'				<th>수정/삭제</th>'
				+'			</tr><tbody id="tbd">'
				
				
				+'	</tbody></table>';
			
			return y;
		}
}