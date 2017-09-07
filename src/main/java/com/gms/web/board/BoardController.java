package com.gms.web.board;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/board")
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	
	@RequestMapping("/board_write")
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
	}
}
