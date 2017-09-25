package com.gms.web.board;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.command.Command;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.service.IListService;


@RestController
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	@Autowired BoardMapper bmapper;
	@Autowired GradeMapper gmapper;
	@Autowired Command cmd;
	
	
	
	public @ResponseBody Map<?, ?> post(){
		return null;
	};
	@RequestMapping("/get/{cate}/list")
	public @ResponseBody Map<?, ?> list(@PathVariable String cate) {
		Map<String,Object> map=new HashMap<>();
		IListService listService=null;
		switch (cate) {
		case "board":
			cmd=null;
			listService=(x)->{
				
				return bmapper.selectSome(cmd);
			};
			
			map.put("list", listService.execute(cmd));
			//System.out.println(map.get("list"));
			//map.put("msg", cate+" 리스트");
			break;
		case "grade":
			cmd=null;
			listService=(x)->{
				
				return gmapper.selectAll();
			};
			
			map.put("list", listService.execute(cmd));
			//map.put("msg", cate+" 리스트");
			break;
		default:
			System.out.println("잘못입력");
			break;
		}
		
		return map;
	}
	public @ResponseBody Map<?, ?> get(){
		return null;
	};
	public @ResponseBody Map<?, ?> put(){
		return null;
	};
	public @ResponseBody Map<?, ?> delete(){
		return null;
	};
	
/*	@RequestMapping("/board_write")
	public String board_Add() {
		return "auth:board/board_write.tiles";
	}
	@RequestMapping("/board_detail")
	public String board_Detail() {
		return "auth:board/board_detail.tiles";
	}
	@RequestMapping("/board_update")
	public String board_Update() {
		return "auth:board/board_update.tiles";
	}
	@RequestMapping("/board_delete")
	public String board_Delete() {
		return "auth:board/board_delete.tiles";
	}
	@RequestMapping("/board_list")
	public String board_List() {
		return "auth:board/board_list.tiles";
	}*/
}
