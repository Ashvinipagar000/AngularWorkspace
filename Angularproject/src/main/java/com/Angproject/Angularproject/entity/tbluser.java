package com.Angproject.Angularproject.entity;

import java.sql.Date;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class tbluser {
	@Id
	int userid;
	String username;
	String email;
	String password;
	Date birthdate;
	String address;
	LocalDateTime createdate;
	String ip;
	public tbluser(String  ip, int userid, String username, String email, String password, Date birthdate, String address,
			LocalDateTime createdate) {
		super();
		this.userid = userid;
		this.ip=ip;
		this.username = username;
		this.email = email;
		this.password = password;
		this.birthdate = birthdate;
		this.address = address;
		this.createdate = createdate;
	}
	public tbluser() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Date getBirthdate() {
		return birthdate;
	}
	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public LocalDateTime getCreatedate() {
		return createdate;
	}
	public void setCreatedate(LocalDateTime createdate) {
		this.createdate = createdate;
	}
	@Override
	public String toString() {
		return "tbluser [ ip= "+ ip+ " , userid=" + userid + ", username=" + username + ", email=" + email + ", password=" + password
				+ ", birthdate=" + birthdate + ", address=" + address + ", createdate=" + createdate + "]";
	}
	
	
	
}
