/**
 * Member javaScript
 */
var app=app || {};
	app.path=(function(){
	var init=function(ctx){
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
			  location.href=app.path.ctx()+"/member/member_list";
			  //app.controller.List('member','member_list','1');
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
			  app.controller.List('member','member_list','1');
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
		location.href=app.path.ctx()+'/'+dir+'/'+page;
	};
	var List=function(dir,page,num){
		location.href=app.path.ctx()+"/"+dir+".do?action=list&page="+page+"&num="+num;
	};
	var gms_del=function(name){
		  	var person = prompt("삭제할 "+name, "입력");
	};
	var updateStudent=function(id,email){
			location.href=app.path.ctx()+"/member.do?action=update&page=member_update&id="+id+"&email="+email;
		};
	var deleteStudent=function(id){
			location.href=app.path.ctx()+"/member.do?action=delete&page=member_list&id="+id;
		};
	var detailStudent=function(id){
			location.href=app.path.ctx()+"/member.do?action=detail&page=member_detail&id="+id;
		};
	var searchStudent=function(num){
		var search_id=$("#search_id").val();
		location.href=app.path.ctx()+"/member.do?action=search&page=member_list&num="+num+"&search_id="+search_id;
	  };
	return {
		init:init,
		moveTo:moveTo,
		List:List,
		gms_del:gms_del,
		updateStudent:updateStudent,
		deleteStudent:deleteStudent,
		detailStudent:detailStudent,
		searchStudent:searchStudent
	};
})();
var home=(function(){
	var init=function(){
		
	};
	return {
		
	};
})();
app.member=(function(){
	var init=function(){
		$('#loginBtn').on('click',function(){
			if($("#id").val()==""){
				alert('아이디 없음');
				return false;
			}
			if($("#pass").val()==""){
				alert('비밀번호 다름');
				return false;
			}
			$('#login_box').attr('method','post');
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
app.memberDetail=(function(){
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
	return {
		init:init
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
		$('#id').attr('placeholder',id);
		$('#name').text(name+" Profile");
		$('#phone').attr('placeholder',phone);
		$('#email').attr('placeholder',email);
		
		$('#confirmBtn').on('click',function(){
			app.controller.updateStudent(id,$('#email').val());
		});
	};
	return {
		init:init
	};
})();