package com.gms.web.command;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class RespMap {
	private String seq,id,content,title,regdate,hitcount,email,birthday,profile;
}
