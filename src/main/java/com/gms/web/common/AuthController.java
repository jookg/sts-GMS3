package com.gms.web.common;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.member.MemberDTO;
import com.gms.web.member.MemberService;

@Controller
@SessionAttributes("user")
@RequestMapping("/auth")
public class AuthController {
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	@Autowired MemberService service;
	//@Autowired MemberDTO bean;
	@RequestMapping("/login_view")
	public String goLogin() {
		return "public:common/login.tiles";
	}
	@RequestMapping(value="/login",method=RequestMethod.POST)
	public String login(@RequestParam("id") String id, @RequestParam("pass") String pass,Model model){
		MemberDTO md = new MemberDTO();
		md.setId(id);
		md.setPw(pass);
		Map<String,Object> map=service.login(md);
		model.addAttribute("user", map.get("user"));
		return String.valueOf(map.get("page"));//"auth:common/main.tiles";
	}
	
}
