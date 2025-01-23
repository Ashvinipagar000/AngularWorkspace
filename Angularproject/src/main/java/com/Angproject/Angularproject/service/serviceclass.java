package com.Angproject.Angularproject.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.Angproject.Angularproject.dao.daoclass;
import com.Angproject.Angularproject.entity.tbluser;
import com.Angproject.Angularproject.entity.tbluserips;

@Service
public class serviceclass {
	@Autowired
	daoclass daoclass;
	//1
	public void registeruser(tbluser tbluser) {
		daoclass.registeruser(tbluser );
	}
	//2
	public List<tbluser> getAllUser(){
		return daoclass.getAllUser();
	}

	// 3 edit task
			public void edituser(int id, tbluser updateuser) {
				daoclass.edituser(id, updateuser);
			}
			
	// 4 delete task
	
	public void deleteuser(@PathVariable int id) {
		daoclass.deleteuser(id);
	}
	
	// get ip address by username
	public String getipaddress(String username) {
		return daoclass.getipaddress(username);
		
	}
	
	// 6 delete ip from tblip
	public void deleteipaddress(@PathVariable int ipid) {
		daoclass.deleteipaddress(ipid);
	}
	
	//
	public boolean deleteip(@PathVariable int idIp) {
		return daoclass.deleteip(idIp);
	}
	
	
	//8 grt tbluserips
	public tbluserips getip(@PathVariable int ipid) {
		return daoclass.getip(ipid);
		
	}
	public tbluserips getip1(@PathVariable int ipid) {
		// TODO Auto-generated method stub
		return daoclass.getip(ipid);
	}
	
	// 9 edit ipaddress
	public void editipaddress(@PathVariable int ipid, String updatedip) {
		 daoclass.editipaddress(ipid, updatedip);
	}
	
	//10 add ip
	public void addIpAddress(@PathVariable tbluserips newIp) {
		daoclass.addIpAddress(newIp);
	    
	}
	
	//entry form
	public List<Map<String, Object>> getUsersList() {
		return daoclass.getUsersList();
	}
	

	
}
