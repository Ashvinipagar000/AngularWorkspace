package com.Angproject.Angularproject.entity;

import java.security.Timestamp;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity

public class tbluserips {
	@Id
    
    private int ipid;
    private int user_id;
    private String ip_address;
    private LocalDateTime created_date;
    
    
	public tbluserips(int ipid, int user_id, String ip_address, LocalDateTime created_date) {
		super();
		this.ipid = ipid;
		this.user_id = user_id;
		this.ip_address = ip_address;
		this.created_date = created_date;
	}
	public tbluserips() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getIpid() {
		return ipid;
	}
	public void setIpid(int ipid) {
		this.ipid = ipid;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getIp_address() {
		return ip_address;
	}
	public void setIp_address(String ip_address) {
		this.ip_address = ip_address;
	}
	public LocalDateTime getCreated_date() {
		return created_date;
	}
	public void setCreated_date(LocalDateTime created_date) {
		this.created_date = created_date;
	}
	@Override
	public String toString() {
		return "tbluserips [ipid=" + ipid + ", user_id=" + user_id + ", ip_address=" + ip_address + ", created_date="
				+ created_date + "]";
	}
    
    
}

