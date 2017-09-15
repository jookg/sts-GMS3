package com.gms.web.member;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.proxy.BlockHandler;
import com.gms.web.proxy.PageHandler;
import com.gms.web.proxy.PageProxy;

@Controller
@RequestMapping("/member")
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired MemberService service;
	@Autowired CommandDTO cmd;
	@Autowired BlockHandler blockHandler;
	@Autowired PageHandler pageHandler;
	@Autowired PageProxy pxy;
	@Autowired MajorDTO major;
	
	@RequestMapping("/member_list/{page}")
	@SuppressWarnings("unchecked")
	public String member_list(Model model,@PathVariable String page) {
		//logger.info("memberList.size() is {}","진입");
		cmd.setSearch("%%");
		pxy.setPageSize(5);
		pxy.setBlockSize(5);
		pxy.setTheNumberOfRows(Integer.parseInt(service.count(cmd)));
		pxy.setPageNumber(Integer.parseInt(page));
		pxy.execute(blockHandler.attr(pxy), service.list(pageHandler.attr(pxy)),model);
		//List<StudentDTO> list=(List<StudentDTO>)service.list(cmd);
		//model.addAttribute("list",list);
		return "auth:member/member_list.tiles";
	}
	@RequestMapping("/member_search/{name}/{page}")
	public String member_search(Model model,@PathVariable String name,@PathVariable String page) {
		cmd.setSearch("%"+name+"%");
		pxy.setPageSize(5);
		pxy.setBlockSize(5);
		pxy.setTheNumberOfRows(Integer.parseInt(service.count(cmd)));
		pxy.setPageNumber(Integer.parseInt(page));
		cmd=pageHandler.attr(pxy);
		cmd.setSearch("%"+name+"%");
		pxy.execute(blockHandler.attr(pxy), service.findByName(cmd),model);
		return "auth:member/member_list.tiles";
	}
	@RequestMapping(value="/member_insert",method=RequestMethod.POST)
	public String member_insert(@ModelAttribute MemberDTO member,@RequestParam("subject") List<String> list) {
		//String[] sub=subject.split(",");
		List<MajorDTO> plist=new ArrayList<>();
		Map<String,Object> pmap=new HashMap<>();
		
		for(String m:list) {
		major=new MajorDTO();
		major.setId(member.getId());
		major.setTitle(member.getName());
		major.setMajorId(member.getMajor());
		major.setSubjId(m);
		plist.add(major);
		}
		
		pmap.put("member", member);
		pmap.put("list", plist);
		service.add(pmap);
		return "auth:common/main.tiles";
	}
	@RequestMapping(value="/member_update",method=RequestMethod.POST)
	public String member_update(@ModelAttribute StudentDTO stu) {
		service.modify(stu);
		return "redirect:/member/member_detail/"+stu.getId();
	}
	@RequestMapping("/member_detail/{id}")
	public String member_detail(Model model,@PathVariable String id) {
		cmd.setSearch(id);
		model.addAttribute("student",service.findById(cmd));
		return "auth:member/member_detail.tiles";
	}
	@RequestMapping("/member_delete/{id}")
	public String member_delete(@PathVariable String id) {
		cmd.setSearch(id);
		int a=service.remove(cmd);
		//String ctx=PathFactory.create().getCtx();
		return "redirect:/member/member_list/1";
	}

}
