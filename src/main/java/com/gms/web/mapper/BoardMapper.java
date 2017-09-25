package com.gms.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.board.ArticleDTO;
import com.gms.web.command.Command;
@Repository
public interface BoardMapper {
	public String insert(Command cmd);
	public List<ArticleDTO> selectAll(Command cmd);
	public List<ArticleDTO> selectSome(Command cmd);
	public ArticleDTO selectOne(Command cmd);
	public String count(Command cmd);
	public String update(Command cmd);
	public String delete(Command cmd);
}
