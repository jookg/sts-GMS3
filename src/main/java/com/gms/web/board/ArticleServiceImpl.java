package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Service;
@Service
public class ArticleServiceImpl implements ArticleService {
	
	public static ArticleServiceImpl getInstance() {
		return new ArticleServiceImpl();
	}
	private ArticleServiceImpl() {
		
	}
	@Override
	public String write(ArticleDTO bean) {
		
		return null;//(ArticleDAOImpl.getInstance().insert(bean)).equals("1")? "게시 완료":"게시 오류";
	}

	@Override
	public List<ArticleDTO> list() {
		
		return null;//ArticleDAOImpl.getInstance().selectAll();
	}

	@Override
	public List<ArticleDTO> findById(String id) {
		// TODO Auto-generated method stub
		return null;//ArticleDAOImpl.getInstance().selectById(id);
	}

	@Override
	public ArticleDTO findBySeq(String seq) {
		// TODO Auto-generated method stub
		return null;//ArticleDAOImpl.getInstance().selectBySeq(seq);
	}

	@Override
	public String count() {
		// TODO Auto-generated method stub
		return null;//ArticleDAOImpl.getInstance().count();
	}

	@Override
	public String modify(ArticleDTO bean) {
		// TODO Auto-generated method stub
		return null;//(ArticleDAOImpl.getInstance().update(bean).equals("1"))? "업데이트성공":"업데이트오류";
	}

	@Override
	public String remove(String seq) {
		// TODO Auto-generated method stub
		return null;//(ArticleDAOImpl.getInstance().delete(seq).equals("1"))? "삭제성공":"삭제오류";
	}

}
