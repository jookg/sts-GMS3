/**
 * 
 */
var meta=meta || {};

var $$= function(x){return meta.session.getPath(x);};

	var ctx=function(){
		return meta.session.getPath('ctx');
	};
	var js=function(){
		return meta.session.getPath('js');
	};
	var img=function(){
		return meta.session.getPath('img');
	};
	var css=function(){
		return meta.session.getPath('css');
	};

	meta.common=(function(){
		var init=function(ctx){
			meta.session.init(ctx);
			onCreate();
			meta.index.init();
			
		};
		var onCreate=function(){
			setContentView();
		};
		var setContentView=function(){
			
		};
	return {
		init:init
	};
	})();
	
	meta.index=(function(){
		var temp,js;
		var init=function(){
			meta.ui.init();
			js=$$('js');
			temp=js+'/template.js';
			onCreate();
		};
		var onCreate=()=>{
			setContentView();
			$.getScript(temp,(x,y)=>{
			/*	compUI.div('content').css({'width':'100%'}).appendTo($container);
				$content=$('#content');
				compUI.img('loading',img()+'/loading.gif').appendTo($content);
				compUI.h1('hBtn').attr('display','inline').appendTo($content);
				$hBtn=$('#hBtn');
				compUI.span('btn2').html('게시판관리').addClass('label label-danger').css({'margin-left':'10px'}).appendTo($hBtn).
				click(()=>{
					alert('게시판');
					var url= $$('ctx')+'/get/board/list';
					$.getJSON(url,x=>{
						alert('x msg is '+x.msg);
					});
				});*/
				
				$wrapper = $('#wrapper');
				$wrapper.append(compUI.div('container'));
				$('#container').css({'width': '500px','margin': '0 auto'}).append(compUI.img('loading',img()+'/loading.gif'));
				//var $image = $('<img/>',{id: 'loading', src: img()+'/loading.gif'});
				//var $button = $('<span/>',{id:'btn1', text:'버튼',class:'label label-default'});
				
				//$image.appendTo($('#wrapper'));
				//$('#wrapper').append($button);
				// $('#wrapper').empty();
				$('#loading').after(compUI.h1('h-btn'));
				$('#h-btn').append(compUI.span('btn1')).attr('display','inline');
				$('#btn1').html('로그인').addClass('label label-success');
				$('#h-btn').append(compUI.span('btn2')).attr('display','inline');
				$('#btn2').html('게시판').addClass('label label-danger').css({'margin-left':'10px'});
				$('#h-btn').append(compUI.span('btn3')).attr('display','inline');
				$('#btn3').html('알고리즘').addClass('label label-primary').css({'margin-left':'10px'});
			$('#btn1').on('click',function(){
				// $('#wrapper').empty();
				$wrapper.empty();
				meta.ui.navbar();
			    meta.auth.init();
				
			});
			$('#btn2').click(()=>{
				$wrapper.empty();
				meta.ui.navbar();
				var url= $$('ctx')+'/get/board/list'
				$.getJSON(url,data=>{
					//alert(x.list[1].content);
					$('#container').css({'width': '80%','margin': '0 auto'}).html(bbsUI.tbl());
					var body;
				/*	var a=[
						{a:1, b:'a', c:3, d:4, e:5},
						{a:2, b:'b', c:4, d:5, e:6},
						{a:3, b:'c', c:5, d:6, e:7},
						{a:4, b:'d', c:6, d:7, e:8},
						{a:5, b:'e', c:7, d:8, e:9}
					];*/
					$.each(data.list,(i,j)=>{
							body+='	<tr>'
							+'			<td>'+j.articleSeq+'</td>'
							+'			<td>'+j.id+'</td>'
							+'			<td><a>'+j.title+'</a></td>'
							+'			<td>'+j.content+'</td>'
							+'			<td>'+j.hitcount+'</td>'
							+'			<td>'+j.regdate+'</td>'
							+'			<td><a>수정</a>/<a>삭제</a></td>'
							+'		</tr>';
						});
					
					$('#tbd').html(body);
				});
			});
				$('#btn3').on('click',function(){
					$wrapper.empty();
					meta.ui.navbar();
					meta.ui.arithmetic();
					$('#tit').text('등차수열');
					$('#arithmeticBtn').on('click',function(){
						alert('등차');
						$('#tit').text('등차수열');
						// $('#content').remove();
						// meta.ui.arithmetic();
						//console.log();
						$('#result').on('click',function(){
							$('#result2').text(meta.algo.arithmetic($('#ar1').val(),$('#ar2').val()));
						});
					});
					$('#switchBtn').click(()=>{
						alert('스위치');
						// $('#content').remove();
						// meta.ui.switchSeries();
						$('#tit').text('스위치수열');
						$('#result').on('click',function(){
							$('#result2').text(meta.algo.switchSeries($('#ar1').val(),$('#ar2').val()));
						});
					});
				});	
			});
		};
		var setContentView=function(){
			
		};
		return {
			init:init
		};
	})();
	meta.algo={
			arithmetic : (s,e)=>{
				
					var st =s;
					var et =e;
					var en =0;
					for(var i=Number(st); i<=Number(et);i++ ){
						en += i;
					}
					return en;
			},
			switchSeries:function(s,e){
				var st =s;
				var et =e;
				var en =0;
				for(var i=Number(st); i<=Number(et);i++ ){
					switch (i%2) {
					case 0:
						en += -i;
						break;
					default:
						en += i;
						break;
					}
					
				}
				
				return en;
			},
			factorialSeries : x=> { 
				var i=1, j=1, sum=1; 
				var limit=x*1; 
				do { 
						i++; 
		 			j*=i; 
		 			sum+=j; 
				} while(i<limit); 
		 		return sum; 
			},
			fibonacciSeries : x=> { 
				var hap, cnt, c; 
			 	var a=1, b=1; 
				var limit=x*1; 
				hap=2; 
				cnt=2; 
				while(1) { 
					c=a+b; 
					hap+=c; 
					cnt++; 
				if(cnt<limit) { 
					a=b; 
					b=c; 
			 	} else { 
					return hap; 
					break; 
					} 
			 	} 
					 
			} 

	};
	meta.ui=(()=>{
		var $wrapper,ctx,img,js,css;
		var init=function(){
			$wrapper=$('#wrapper');
			img=$$('img');
		};
		var navbar=function(){
			$wrapper.html(
			'<header>'
			+'<nav class="navbar navbar-inverse">'
			+'   <div class="container-fluid">'
			+'      <div class="navbar-header">'
			+'      <a class="navbar-brand">GMS</a>'
			+'      </div>'
			+'     <ul class="nav navbar-nav">'
			+'      <li class="active"><a><span class="glyphicon glyphicon-home"></span> &nbsp; Home</a></li>'
			+'      <li class="dropdown">'
			+' 		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">회원관리'
			+'     <span class="caret"></span></a>'
			+'     <ul id="navbar_ul_stu">'
			+'     <li><a>회원가입</a></li>'
			+'    <li><a>회원목록</a></li>'
			+'    <li><a>회원상세</a></li>'
			+'    <li><a>회원수정</a></li>'
			+'     </ul>'
			+'     </li>'
			+'       <li class="dropdown">'
			+'     <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">성적관리'
			+'     <span class="caret"></span></a>'
			+'     <ul id="navbar_ul_grade">'
			+'     <li><a>성적 입력</a></li>'
			+'    <li><a>성적 목록</a></li>'
			+'    <li><a>성적 상세</a></li>'
			+'    <li><a>성적 수정</a></li>'
			+'     </ul>'
			+'     </li>'
			+'       <li class="dropdown">'
			+'     <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">게시판관리'
			+'     <span class="caret"></span></a>'
			+'     <ul id="navbar_ul_board">'
			+'     <li><a>게시글 쓰기</a></li>'
			+' 	<li><a>게시글 목록</a></li>'
			+' 	<li><a>게시글 상세</a></li>'
			+' 	<li><a>게시글 수정</a></li>'
			+'     </ul>'
			+'     </li>'
			+'	 <li class="dropdown">'
			+'     <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">수 열'
			+'     <span class="caret"></span></a>'
			+'     <ul id="navbar_ul_math">'
			+'     <li><a id="arithmeticBtn">등차수열</a></li>'
			+' 	<li><a id="switchBtn">스위치수열</a></li>'
			+' 	<li><a id="geoBtn">등비수열</a></li>'
			+' 	<li><a id="facBtn">팩토리얼</a></li>'
			+' 	<li><a id="fiboBtn">피보나치</a></li>'
			+'     </ul>'
			+'     </li>'
			+'   </ul>'
			+'      <span class="gms-textcolor-blue gms-inline-block member-span gms-float-right">${user.name} <a id="logout"> 로그아웃</a></span>'
			+'   </div>'
			+' </nav>'
			+'</header>'
			+'<div id="container"></div>'
			+'<footer>'
			+'	<div>'
			+'		<p>Posted by: Hege Refsnes</p>'
			+'		<p>Contact information: <a href="mailto:someone@example.com">someone@example.com</a>.</p>'
			+'		<a href="${ctx}/JDBC_test.jsp">DB연결 테스트</a><br/>'
			+'		<a href="${ctx}/util/update_email.jsp">이메일</a>'
			+'	</div>'
			+'</footer>'
			);
			
			  var $d1 =$("#navbar_ul_stu");
			  var $d2 =$("#navbar_ul_grade");
			  var $d3 =$("#navbar_ul_board");
			  var $d4 =$("#navbar_ul_math");
			  $d1.addClass("dropdown-menu");
			  $d2.addClass("dropdown-menu");
			  $d3.addClass("dropdown-menu");
			  $d4.addClass("dropdown-menu");
		};
		var arithmetic=function(){
			var ui='<div id="content">'
				+'<span id="tit" ></span> <br />'
				+	'시작값<input type="text" id="ar1" /> <br/>'
				+	'끝값<input type="text" id="ar2" /> <br/>'
				+	'연산<button id="result">결과</button><br/>'
				+	'결과<span id="result2" /><div>';
			$wrapper.append(ui);
		};
		var switchSeries =function(){
/*
 * var ui='<div id="content">' +'스위치수열 합 <br />' + '시작값<input type="text"
 * id="ar1" /> <br/>' + '끝값<input type="text" id="ar2" /> <br/>' + '연산<button
 * id="result">결과</button><br/>' + '결과<span id="result2" /><div>';
 * $wrapper.append(ui);
 */
		};
		return {
			init:init,
			arithmetic:arithmetic,
			switchSeries:switchSeries,
			navbar:navbar
		};
	})();
	meta.auth=(function(){
		var init=function(){
			onCreate();
		};
		var onCreate=function(){
			setContentView();
		};
		var setContentView=function(){
			//alert('로그인');
			loginView();
			
		};
		var loginView=function(){
			   var ui='<div id="container" align="center">'
					+ '<div id="login_box" name="login_box">'
					+ '<img src="'+$$('img')+'/abc.jpg" width=200px; height=200px; alt="" /><br />'
					+ '<span class="gms-textcolor-blue gms-inline-block member-span">ID</span>'
					+ '<input type="text" id="login_id" name="id" value="joo" class="input-size" /> <br/>'
					+ '<span class="gms-textcolor-blue gms-inline-block member-span">PASSWORD</span>'
					+ '<input type="password" id="pass" name="pass" value="123" class="input-size" /><br/>'
					+ '</div>'
					+ '</div>';
				$('#wrapper').append(ui);
				// $('#login_id').after(meta.comp.button({type:'button',id:'loginBtn',value:'로그인'}));
				$('#login_box').append(meta.comp.button({type:'button',id:'loginBtn',value:'로그인'}));
				$('#login_box').append(meta.comp.button({type:'button',id:'resetBtn',value:'취소'}));
				
				$('#loginBtn').click(()=>{
					meta.login.init();
				});
				$('#resetBtn').click(()=>{
					alert('aaa');
				});
		};
	return {
		init:init
	};
	})();
	meta.login=(()=>{
		init=function(){
			onCreate();
		};
		onCreate=function(){
			setContentView();
		};
		var setContentView=function(){
			mainView();
		};
		var mainView=function(){
			$('#container').empty();
			var ui='<div class="jumbotron text-center">'
			+'<h1>Grade Management System</h1>'
			+'</div>'
			+'<div class="container">'
			+'	<div class="row">'
			+'		<div class="col-sm-4">'
			+'			<div class="gms-font-20"><i class="glyphicon glyphicon-user"></i>학생관리<br/></div><br/>'
			+'		<ul id="main_ul_stu">'
			+'				<li><a>회원가입</a></li>'
			+'			<li><a>회원목록</a></li>'
			+'				<li><a>회원상세</a></li>'
			+'			<li><a>회원수정</a></li>'
			+'			<li><a>회원삭제</a></li>'
			+'			</ul>'
			+'		</div>'
			+'		<div class="col-sm-4">'
			+'		<div class="gms-font-20"><i class="glyphicon glyphicon-cloud" style="font-size:25px;"></i>성적관리<br/></div><br/>'
			+'			<ul id="main_ul_grade">'
			+'				<li><a>성적 입력</a></li>'
			+'				<li><a>성적 목록</a></li>'
			+'				<li><a>성적 상세</a></li>'
			+'				<li><a>성적 수정</a></li>'
			+'				<li><a>성적 삭제</a></li>'
			+'			</ul>'
			+'		</div>'
			+'		<div class="col-sm-4">'
			+'		<div class="gms-font-20"><i class="glyphicon glyphicon-thumbs-up" style="font-size:25px;"></i>게시판<br/></div><br/>'
			+'			<ul id="main_ul_board">'
			+'				<li><a>게시글 쓰기</a></li>'
			+'				<li><a>게시글 목록</a></li>'
			+'				<li><a>게시글 상세</a></li>'
			+'				<li><a>게시글 수정</a></li>'
			+'				<li><a>게시글 삭제</a></li>'
			+'			</ul>'
			+'		</div>'
			+'	</div>'
			+'</div>';
			
			$('#container').append(ui);
			
			  var $u1 =$('#main_ul_stu');
			  var $u2 =$("#main_ul_grade");
			  var $u3 =$("#main_ul_board");
			  $u1.addClass("list-group");
			  $u2.addClass("list-group");
			  $u3.addClass("list-group");
			  $('.list-group').children().addClass("list-group-item");
		};
		return {
			init:init
		};
	})();
	meta.comp={
		button:function(json){
			return $('<input/>',json);
		}
	};
	meta.session={
		init : function(ctx){
			sessionStorage.setItem('ctx',ctx);
			sessionStorage.setItem('js',ctx+'/resources/js');
			sessionStorage.setItem('img',ctx+'/resources/img');
			sessionStorage.setItem('css',ctx+'/resources/css');
		},
		getPath :function(x){
			return sessionStorage.getItem(x);
		}

	};