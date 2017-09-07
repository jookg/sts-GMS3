package com.gms.web.board;

import java.util.List;

public interface ArticleService {
	public String write(ArticleDTO bean);
	public List<ArticleDTO> list();
	public List<ArticleDTO> findById(String id);
	public ArticleDTO findBySeq(String seq);
	public String count();
	public String modify(ArticleDTO bean);
	public String remove(String seq);
}
