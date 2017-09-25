package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Component;
@Component
public interface ArticleService {
	public String write(ArticleDTO bean);
	public List<ArticleDTO> list();
	public List<ArticleDTO> findById(String id);
	public ArticleDTO findBySeq(String seq);
	public String count();
	public String modify(ArticleDTO bean);
	public String remove(String seq);
	
	
	/*public void post(Object o);
	public List<?> list(Object o);
	public Object get(Object o);
	public void put(Object o);
	public void delete(Object o);*/
}
