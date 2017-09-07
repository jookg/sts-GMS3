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
		return "grade/grade_add";
	}
	@RequestMapping("/grade_detail")
	public String grade_Detail() {
		return "grade/grade_detail";
	}
	@RequestMapping("/grade_update")
	public String grade_Update() {
		return "grade/grade_update";
	}
	@RequestMapping("/grade_delete")
	public String grade_Delete() {
		return "grade/grade_delete";
	}
	@RequestMapping("/grade_list")
	public String grade_List() {
		return "grade/grade_list";
	}
}
