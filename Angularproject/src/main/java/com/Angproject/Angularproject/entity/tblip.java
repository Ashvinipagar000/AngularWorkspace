package com.Angproject.Angularproject.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class tblip {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto increment

    
    private int id_ip;

    @Column(name = "ip_address") // Optional: Specify column name if necessary
    private String ip_address;
    
    
	public tblip() {
		super();
		// TODO Auto-generated constructor stub
	}

	public tblip(String ip_address, int id_ip) {
		super();
		
		this.ip_address = ip_address;
		this.id_ip = id_ip;
	
	}

	public String getIp_address() {
		return ip_address;
	}

	public void setIp_address(String ip_address) {
		this.ip_address = ip_address;
	}

	public int getId_ip() {
		return id_ip;
	}

	public void setId_ip(int id_ip) {
		this.id_ip = id_ip;
	}

	@Override
	public String toString() {
		return "tblip [ ip_address=" + ip_address + ", id_ip=" + id_ip
				+ "]";
	}
    
    
}
