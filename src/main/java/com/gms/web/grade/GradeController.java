package com.gms.web.grade;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/grade")
public class GradeController {

	private static final Logger logger = LoggerFactory.getLogger(GradeController.class);

	@RequestMapping("/grade_add")
	public String grade_Add() {
		return "auth:grade/grade_add.tiles";
	}
	@RequestMapping("/grade_detail")
	public String grade_Detail() {
		return "auth:grade/grade_detail.tiles";
	}
	@RequestMapping("/grade_update")
	public String grade_Update() {
		return "auth:grade/grade_update.tiles";
	}
	@RequestMapping("/grade_delete")
	public String grade_Delete() {
		return "auth:grade/grade_delete.tiles";
	}
	@RequestMapping("/grade_list")
	public String grade_List() {
		return "auth:grade/grade_list.tiles";
	}
}
