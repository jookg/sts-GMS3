package com.gms.web.member;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Lazy @Component @Data
public class MemberDTO{
	private String id,pw,name,ssn,phone,email,major,regdate;

	public String toString(){
		return "ID: "+id+" PW: "+pw+" 이름: "+name+" 주민번호: "+ssn+" 전공"+major+"\n";
	}

}
