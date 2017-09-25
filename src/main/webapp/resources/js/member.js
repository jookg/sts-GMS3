/**
 * Member javaScript
 */
var app=app || {};
	app.path=(function(){
	var init=function(ctx){
		alert('ab');
		app.session.init(ctx);
		//member.init();
		onCreate();
	};
	var onCreate=function(){
		setContentView();

		location.href=ctx()+"/auth/login_view";
	};
	var setContentView=function(){
	};
	var ctx=function(){
		return app.session.getPath('ctx');
	};
	var js=function(){
		return app.session.getPath('js');
	};
	var img=function(){
		return app.session.getPath('img');
	};
	var css=function(){
		return app.session.getPath('css');
	};
	return {
		init:init,
		ctx:ctx,
		js:js,
		img:img,
		css:css
	};
})();
	app.session=(function(){
	var init=function(ctx){
		sessionStorage.setItem('ctx',ctx);
		sessionStorage.setItem('js',ctx+'/resources/js');
		sessionStorage.setItem('img',ctx+'/resources/img');
		sessionStorage.setItem('css',ctx+'/resources/css');
	};
	var getPath=function(x){
		return sessionStorage.getItem(x);
	};
	return {
		init : init,
		getPath : getPath

	};
})();
	app.main=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		 $('.list-group a').eq(0).on('click',function(){
			  app.controller.moveTo('member','member_join');
		  });
		  $('.list-group a').eq(1).on('click',function(){
			  //location.href=app.path.ctx()+"/member/member_list";
			  app.member.list('1');
		  });
		  $('.list-group a').eq(2).on('click',function(){
			  var person = prompt("검색할 아이디", "joo");
			  location.href=app.path.ctx()+"/member/member_detail";
			  // app.controller.detailStudent(person);
		  });
		  $('.list-group a').eq(3).on('click',function(){
			  location.href=app.path.ctx()+"/member/member_update";
			  //app.controller.moveTo('member','member_update');
		  });
		  $('.list-group a').eq(4).on('click',function(){
			  app.controller.gms_del('회원');
		  });
		  $('.list-group a').eq(5).on('click',function(){
			  location.href=app.path.ctx()+"/grade/grade_add";
			  //app.controller.moveTo('member','member_update');
		  });
		  $('.list-group a').eq(6).on('click',function(){
			  location.href=app.path.ctx()+"/grade/grade_list";
			  //app.controller.moveTo('member','member_update');
		  });
		  $('.list-group a').eq(7).on('click',function(){
			  location.href=app.path.ctx()+"/grade/grade_detail";
			  //app.controller.moveTo('member','member_update');
		  });
		  $('.list-group a').eq(8).on('click',function(){
			  location.href=app.path.ctx()+"/grade/grade_update";
			  //app.controller.moveTo('member','member_update');
		  });
		  $('.list-group a').eq(9).on('click',function(){
			  location.href=app.path.ctx()+"/grade/grade_delete";
			  //app.controller.moveTo('member','member_update');
		  });
	};
	var setContentView=function(){
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
	app.navbar=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('#logout').on('click',function(){
			location.href=app.path.ctx()+"/auth/login";
		});
		  $('.dropdown-menu a').eq(0).on('click',function(){
			  app.controller.moveTo('member','member_join');
		  });
		  $('.dropdown-menu a').eq(1).on('click',function(){
			  app.member.list('1');
		  });
		  $('.dropdown-menu a').eq(2).on('click',function(){
			  app.controller.moveTo('member','member_detail');
		  });
		  $('.dropdown-menu a').eq(3).on('click',function(){
			  app.controller.moveTo('member','member_update');
		  });
	};
	var setContentView=function(){
		  var $d1 =$("#navbar_ul_stu");
		  var $d2 =$("#navbar_ul_grade");
		  var $d3 =$("#navbar_ul_board");
		  $d1.addClass("dropdown-menu");
		  $d2.addClass("dropdown-menu");
		  $d3.addClass("dropdown-menu");
		  
	};
	return {
		init:init
	}
})();
	app.grade=(function(){
		var init=function(){
			onCreate();
		};
		var onCreate=function(){
			setContentView();
		};
		var setContentView=function(){
			
		};
	})();
	app.controller=(function(){
	var init=function(){
		
	};
	var moveTo=function(dir,page){
		location.href=app.path.ctx()+'/common/path/'+dir+'/'+page;
	};

	var gms_del=function(name){
		  	var person = prompt("삭제할 "+name, "입력");
	};

	return {
		init:init,
		moveTo:moveTo,
		gms_del:gms_del
	};
})();

app.home=(function(){
	var init=function(){
		$('#loginBtn').on('click',function(){
			if($("#id").val()==""){
				alert('아이디 입력');
				return false;
			}
			if($("#pass").val()==""){
				alert('비밀번호 입력');
				return false;
			}
			$('#login_box').attr('method','post');
			//$('#login_box').attr('action',app.path.ctx()+"/common/path/common/main");
			$('#login_box').attr('action',app.path.ctx()+"/auth/login");
			/*var form=$('#login_box');
			form.method="post";
			form.action=app.ctx()+"/common.do";*/
			return true;
		});
	};

	return {
		init:init
	};
})();
app.member=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('#updateBtn').on('click',function(){
			//id,pw,name,phone,email,title;
			sessionStorage.setItem('id',$('#pid').text());
			sessionStorage.setItem('name',$('#pname').text());
			sessionStorage.setItem('phone',$('#pphone').text());
			sessionStorage.setItem('email',$('#pemail').text());
			app.controller.moveTo('member','member_update');
		});
	};
	var setContentView=function(){
		
	};
	var list=function(no){
		location.href=app.path.ctx()+"/member/member_list/"+no;
	};
	var searchStudent=function(no){
		var search_id=$("#search_id").val();
		location.href=app.path.ctx()+"/member/member_search/"+search_id+"/"+no;
	};
	var deleteStudent=function(id){
		location.href=app.path.ctx()+"/member/member_delete/"+id;
	};
	var detailStudent=function(id){
		location.href=app.path.ctx()+"/member/member_detail/"+id;
	};
	var updateStudent=function(id,name,phone,email){
		sessionStorage.setItem('id',id);
		sessionStorage.setItem('name',name);
		sessionStorage.setItem('phone',phone);
		sessionStorage.setItem('email',email);
		app.controller.moveTo('member','member_update');
	};
	return {
		init:init,
		list:list,
		searchStudent:searchStudent,
		deleteStudent:deleteStudent,
		detailStudent:detailStudent,
		updateStudent:updateStudent
	};
})();
app.memberInsert=(function(){
	var init=function(){
		onCreate();
		add();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		
	};
	var add=function(){
			$('#join_yes_btn').on('click',function(){
				var id=$('#id').val();
				var pass=$("#pass").val();
				var name=$("#name").val();
				var birth=$("#birth").val();
				if(id==""){
					alert('아이디 없음');
					return false;
				}
				if(pass==""){
					alert('비밀번호 입력');
					return false;
				}
				if(name==""){
					alert('이름 없음');
					return false;
				}
				if(birth==""){
					alert('생일 입력');
					return false;
				}
			$('#join_box').attr('method','post');
			$('#join_box').attr('action',app.path.ctx()+"/member/member_insert");
		});
	};
	return {
		init:init,
		add:add
	};
})();
app.memberUpdate=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		var id= sessionStorage.getItem('id');
		var name= sessionStorage.getItem('name');
		var phone= sessionStorage.getItem('phone');
		var email= sessionStorage.getItem('email');
		$('#id').val(id);
		$('#name').text(name+" Profile");
		$('#phone').attr('placeholder',phone);
		$('#email').attr('placeholder',email);
		
		$('#confirmBtn').on('click',function(){
			//location.href=app.path.ctx()+"/member/member_update";
			if($('#pw').val()!=$('#confirm').val()){
				alert('비밀번호가 일치하지 않습니다');
				return false;
			}
			$('#update_stu').attr('method','post');
			$('#update_stu').attr('action',app.path.ctx()+"/member/member_update");
		});
	};
	return {
		init:init
	};
})();