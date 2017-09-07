package com.gms.web.member;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/member")
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	
	@RequestMapping("/member_join")
	public String member_join() {
		//logger.info("Welcome home! 조인 {}.");
		return "member/member_join";
	}
	
	@RequestMapping("/member_list")
	public String member_list() {
		return "member/member_list";
	}
	
	@RequestMapping("/member_detail")
	public String member_detail() {
		return "member/member_detail";
	}
	@RequestMapping("/member_update")
	public String member_update() {
		return "member/member_update";
	}
}
