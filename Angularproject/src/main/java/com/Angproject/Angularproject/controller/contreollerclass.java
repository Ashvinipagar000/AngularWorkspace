package com.Angproject.Angularproject.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.Angproject.Angularproject.entity.tbluser;
import com.Angproject.Angularproject.entity.tbluserips;
import com.Angproject.Angularproject.service.serviceclass;


@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class contreollerclass {
	@Autowired 
	serviceclass serviceclass;
	
	//1
	@PostMapping("/tbluser/registeruser")
	public ResponseEntity<String> registeruser(@RequestBody tbluser tbluser) {
		try {
            serviceclass.registeruser(tbluser);
            return ResponseEntity.status(HttpStatus.OK).body("User registered successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error while registering user");
        }
	}
	
	//2
	@GetMapping("/tbluser/getAlluser")
	@ResponseBody
	public List<tbluser> getAllUser(){
		return serviceclass.getAllUser();
	}
	
	
	
	//3 edit task
	@PutMapping("/tbluser/edituser/{id}")
	public void edittask2(@PathVariable int id, @RequestBody tbluser updateuser) {
		serviceclass.edituser(id, updateuser);
	}
	
	//delete user
	@DeleteMapping("/tbluser/deleteuser/{id}")
	public ResponseEntity<Void> deleteuser(@PathVariable int id) {
		serviceclass.deleteuser(id);
		return ResponseEntity.noContent().build();
	}
	
	// get ip address by username
	@GetMapping("/tbluser/ipaddress/{username}")
	public String getipaddress(@PathVariable String username) {
		return serviceclass.getipaddress(username);
		
	}
	
	//delete ip from tblip
	@DeleteMapping("tbluserips/deleteipaddress/{ipid}")
	public ResponseEntity<Void> deleteipaddress(@PathVariable("ipid") int ipid) {
		serviceclass.deleteipaddress(ipid);
		return ResponseEntity.noContent().build();
		
		
	}
	
	
	//
	@DeleteMapping("/tblip/deleteip/{id_ip}")
    public ResponseEntity<Void> deleteip(@PathVariable("id_ip") int idIp) {
        // Call the service or DAO layer to delete the IP address by id
        boolean isDeleted = serviceclass.deleteip(idIp);

        if (isDeleted) {
            return ResponseEntity.ok().build();  // 200 OK
        } else {
            return ResponseEntity.status(404).build();  // 404 Not Found
        }
    }
	
	//8 grt tbluserips
	@GetMapping("tbluserips/getip/{ipid}")
	public tbluserips getip(@PathVariable int ipid) {
		return serviceclass.getip(ipid);
		
	}
	
	//9 edit ipaddress
	@PutMapping ("tbluserips/editipaddress/{ipid}")
	public void editipaddress(@PathVariable int ipid, @RequestBody String updatedip) {
		 serviceclass.editipaddress(ipid, updatedip);
	}
	
	//10  add ip
	@PostMapping("tbluserips/addips")
	public void addIpAddress(@RequestBody tbluserips newIp) {
		serviceclass.addIpAddress(newIp);

	}
	
	// entry form
	@GetMapping("tbluser/getuserlist")
	public List<Map<String, Object>> getUsersList() {
		return serviceclass.getUsersList();
	}

	
}
