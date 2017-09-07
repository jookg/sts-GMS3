package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.gms.web.command.CommandDTO;
/*import com.gms.web.domain.MajorBean;
import com.gms.web.domain.MemberBean;
import com.gms.web.domain.StudentBean;
import com.gms.web.service.MemberService;*/

public class MemberServiceImpl implements MemberService {
	Map<String, MemberDTO> map;

	public static MemberServiceImpl getInstance() {
		return new MemberServiceImpl();
	}

	private MemberServiceImpl() {
		map = new HashMap<>();
	}

	@Override
	public String addMember(Map<String,Object> map) {
		//MemberBean m=(MemberBean)map.get("member");
		//List<MajorBean> list =(List<MajorBean>)map.get("major");
		return null;//(MemberDAOImpl.getInstance().insert(map).equals("1")) ? "등록성공" : "등록오류";//(MemberDAOImpl.getInstance().insert(member).equals("1")) ? "가입성공" : "가입오류";
		// map.put(member.getId(), member);
	}

	@Override
	public List<?> getMembers(CommandDTO cmd) {
		/*
		 * Set<String> keys=map.keySet(); for(String s:keys){
		 * list.add(map.get(s)); }
		 */
		return null;//MemberDAOImpl.getInstance().selectAll(cmd);
	}

	@Override
	public String countMembers(CommandDTO cmd) {
		return null;//MemberDAOImpl.getInstance().countMembers(cmd);
	}

	@Override
	public StudentDTO findById(CommandDTO cmd) {

		return null;//MemberDAOImpl.getInstance().selectById(cmd);
	}

	@Override
	public List<StudentDTO> findByName(CommandDTO cmd) {
		/*
		 * Set<String> keys=map.keySet(); for (String s : keys) {
		 * if(name.equals(map.get(s).getName())){ searchList.add(map.get(s)); }
		 * }
		 */
		return null;//MemberDAOImpl.getInstance().selectByName(cmd);
	}

	@Override
	public String modify(StudentDTO member) {
		// map.get(member.getId()).setPw(member.getPw());
		return null;//(MemberDAOImpl.getInstance().updatePw(member).equals("1")) ? "업데이트완료" : "업데이트오류";
	}

	@Override
	public String remove(CommandDTO cmd) {
		// map.remove(id);
		return null;//(MemberDAOImpl.getInstance().delete(cmd).equals("1")) ? "삭제성공" : "삭제오류";
	}

	@Override
	public Map<String,Object> login(MemberDTO bean) {
		Map<String,Object> map= new HashMap<>();
		CommandDTO cmd=new CommandDTO();
		cmd.setSearch(bean.getId());
		StudentDTO mb = findById(cmd);
		String page= mb.getId()!=null? bean.getPw().equals(mb.getPw())? "main":"login_fail" : "login_fail";
		map.put("page", page);
		map.put("user", mb);
		return map;
	}
}
