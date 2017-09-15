package com.gms.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;
@Repository
public interface MemberMapper {
	public int insert(MemberDTO member);
	public List<?> selectAll(CommandDTO cmd);
	public StudentDTO selectById(CommandDTO cmd);
	public List<?> selectByName(CommandDTO cmd);
	public String count(CommandDTO cmd);
	public int update(StudentDTO member);
	public int delete(CommandDTO cmd);
}
