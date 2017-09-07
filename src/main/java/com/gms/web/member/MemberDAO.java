package com.gms.web.member;

import java.util.List;
import java.util.Map;

import com.gms.web.command.CommandDTO;

public interface MemberDAO {
	public String insert(Map<?,?> map);
	public List<?> selectAll(CommandDTO cmd);
	public StudentDTO selectById(CommandDTO cmd);
	public List<?> selectByName(CommandDTO cmd);
	public String countMembers(CommandDTO cmd);
	public String updatePw(StudentDTO member);
	public String delete(CommandDTO cmd);
}
