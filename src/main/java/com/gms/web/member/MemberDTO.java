package com.gms.web.member;

import lombok.Data;

@Data
public class MemberDTO{
	private String id,pw,name,ssn,phone,email,major,regdate;

	public String toString(){
		return "ID: "+id+" PW: "+pw+" 이름: "+name+" 주민번호: "+ssn+"\n";
	}

}
