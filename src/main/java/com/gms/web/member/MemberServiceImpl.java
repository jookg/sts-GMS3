package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;
/*import com.gms.web.domain.MajorBean;
import com.gms.web.domain.MemberBean;
import com.gms.web.domain.StudentBean;
import com.gms.web.service.MemberService;*/
@Service
public class MemberServiceImpl implements MemberService {
	private static final Logger logger = LoggerFactory.getLogger(MemberServiceImpl.class);
	//Map<String, MemberDTO> map;
	@Autowired MemberMapper mapper;
	@Autowired MajorDTO subj;
	@Autowired GradeMapper gmap;
	@Autowired MemberDTO member;
	@Autowired MajorDTO major;
/*	public static MemberServiceImpl getInstance() {
		return new MemberServiceImpl();
	}

	private MemberServiceImpl() {
		map = new HashMap<>();
	}
*/
	@Override @Transactional
	public int add(Map<?,?> map) {
		int rs=0;
		List<MajorDTO> list=(List<MajorDTO>)map.get("list");
		member=(MemberDTO)map.get("member");
		mapper.insert(member);
		gmap.insert(list);
		return rs;
	}

	@Override
	public List<?> list(CommandDTO cmd) {
		
		return mapper.selectAll(cmd);//MemberDAOImpl.getInstance().selectAll(cmd);
	}

	@Override
	public String count(CommandDTO cmd) {
		String count = mapper.count(cmd);
		logger.info("count is {}",count);
		return count;//MemberDAOImpl.getInstance().countMembers(cmd);
	}

	@Override
	public StudentDTO findById(CommandDTO cmd) {

		return mapper.selectById(cmd);//MemberDAOImpl.getInstance().selectById(cmd);
	}

	@Override
	public List<?> findByName(CommandDTO cmd) {
		/*
		 * Set<String> keys=map.keySet(); for (String s : keys) {
		 * if(name.equals(map.get(s).getName())){ searchList.add(map.get(s)); }
		 * }
		 */
		return mapper.selectByName(cmd);//MemberDAOImpl.getInstance().selectByName(cmd);
	}

	@Override
	public int modify(StudentDTO member) {
		// map.get(member.getId()).setPw(member.getPw());
		return mapper.update(member);//(MemberDAOImpl.getInstance().updatePw(member).equals("1")) ? "업데이트완료" : "업데이트오류";
	}

	@Override
	public int remove(CommandDTO cmd) {
		// map.remove(id);
		return mapper.delete(cmd);//(MemberDAOImpl.getInstance().delete(cmd).equals("1")) ? "삭제성공" : "삭제오류";
	}

	@Override
	public Map<String,Object> login(MemberDTO bean) {
		Map<String,Object> map= new HashMap<>();
		CommandDTO cmd=new CommandDTO();
		cmd.setSearch(bean.getId());
		StudentDTO mb = mapper.selectById(cmd);
		String page= mb!=null? bean.getPw().equals(mb.getPw())? "auth:common/main.tiles":"public:common/login_fail.tiles":"public:common/login_fail.tiles" ;
		map.put("result", "success");
		map.put("page", page);
		map.put("user", mb);
		return map;
	}
}
