package com.gms.web.member;

import java.util.List;
import java.util.Map;

import com.gms.web.command.CommandDTO;

public interface MemberService {
	public String addMember(Map<String,Object> map);
	public List<?> getMembers(CommandDTO cmd);
	public String countMembers(CommandDTO cmd);
	public StudentDTO findById(CommandDTO cmd);
	public List<?> findByName(CommandDTO cmd);
	public String modify(StudentDTO member);
	public String remove(CommandDTO cmd);
	public Map<String,Object> login(MemberDTO bean);
}
