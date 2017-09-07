package com.gms.web.util;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Component;
@Component
public class Clock {
	public String now(){
		return new SimpleDateFormat("YYYY년MM월dd일 a hh:mm:ss").format(new Date());
	}
}
