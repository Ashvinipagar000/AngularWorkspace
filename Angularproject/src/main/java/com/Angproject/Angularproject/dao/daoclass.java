package com.Angproject.Angularproject.dao;

import java.util.List;
import java.util.Map;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.hibernate.transform.AliasToEntityMapResultTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.Angproject.Angularproject.entity.tblip;
import com.Angproject.Angularproject.entity.tbluser;
import com.Angproject.Angularproject.entity.tbluserips;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

@Repository
public class daoclass {
	@Autowired
	SessionFactory sessionFactory;
	
	@SuppressWarnings("deprecation")
	//1
	public void registeruser(tbluser tbluser) {
		Session s= sessionFactory.openSession();

		Transaction t= s.beginTransaction();
		try {
			s.save(tbluser);
			t.commit();
			
		}catch (Exception e){
			if(t!=null) {
				t.rollback();
			}
			e.printStackTrace();
			
		}finally {
			s.close();
			}	
		}
	
	//2
	public List<tbluser> getAllUser(){
		List<tbluser> users=null;
		
		Session s= sessionFactory.openSession();
		
		Transaction t=s.beginTransaction();
		try {
			s = sessionFactory.openSession();
        t = s.beginTransaction();

        CriteriaBuilder criteriaBuilder = s.getCriteriaBuilder();
        CriteriaQuery<tbluser> criteriaQuery = criteriaBuilder.createQuery(tbluser.class);
        Root<tbluser> root = criteriaQuery.from(tbluser.class);
        criteriaQuery.select(root);

        users = s.createQuery(criteriaQuery).getResultList();
        t.commit();
        }catch(Exception e) {
			e.printStackTrace();
		}
		return users;
		
	}
	
	// 3 edit user
			public void edituser(int id, tbluser updateuser) {
				Session s= sessionFactory.openSession();
				Transaction t=s.beginTransaction();
				try {
					tbluser existinguser= s.get(tbluser.class, id);
					if(existinguser!=null) {
						existinguser.setUsername(updateuser.getUsername());
					existinguser.setEmail(updateuser.getEmail());
					existinguser.setBirthdate(updateuser.getBirthdate());
					existinguser.setIp(updateuser.getIp());
					}
					s.update(existinguser);
					t.commit();
					}catch(Exception e) {
						e.printStackTrace();
						if(t!=null) {
							t.rollback();
						}
						
					}finally {
						s.close();
					}
							
			}
			
		// 4 delete user
		public void deleteuser( int id) {
			Session s=sessionFactory.openSession();
			Transaction t= s.beginTransaction();
			try {
				tbluser user=s.get(tbluser.class, id);
				if (user != null) { // Check if task exists
		            s.delete(user); // Delete the task
		        }
				t.commit();
			}catch (Exception e) {
				if(t!=null) {
					t.rollback();
				}
				e.printStackTrace();
			}finally {
				s.close();
			}
		}
		
		// 5 get ip address by username
		public String getipaddress(String username) {
			Session s= sessionFactory.openSession();
			Transaction t= s.beginTransaction();
			String ip = "IP Not Found"; 
			try {
				
				String hql = "FROM tbluser u WHERE u.username = :username";  // HQL query for username
		        Query<tbluser> query = s.createQuery(hql, tbluser.class);  // Create the query
		        query.setParameter("username", username);  // Set the parameter value
		        
		        tbluser user = query.uniqueResult(); 
				
				if(user!=null) {
					ip= user.getIp();
				}
				t.commit();
			
		}catch (Exception e) {
			// TODO: handle exception
			if(t!=null) {
				t.rollback();
			}
			e.printStackTrace();
		}finally {
			s.close();
		}
			return ip;
			
		
		}
		
		// 6 delete ip from tblip
		@SuppressWarnings("deprecation")
		public void deleteipaddress( int ipid) {
			Session s=sessionFactory.openSession();
			Transaction t= s.beginTransaction();
			try {
				tbluserips ips=s.get(tbluserips.class, ipid);
				if (ips != null) { // 
		            s.delete(ips); // Delete 
		        }
				t.commit();
			}catch (Exception e) {
				if(t!=null) {
					t.rollback();
				}
				e.printStackTrace();
			}finally {
				s.close();
			}
		}
		
		//
		
		
		@SuppressWarnings("deprecation")
		public boolean deleteip( int id_ip) {
			Session s=sessionFactory.openSession();
			Transaction t= s.beginTransaction();
			try {
				tblip ips=s.get(tblip.class, id_ip);
				if (ips != null) { // Check if task exists
					s.delete(ips); // Delete 
				}
				t.commit();
			}catch (Exception e) {
				if(t!=null) {
					t.rollback();
				}
				e.printStackTrace();
			}finally {
				s.close();
			}
			return false;
		}
		
		//8 grt tbluserips
		public tbluserips getip(int ipid) {
			Session s= sessionFactory.openSession();
			Transaction t= s.beginTransaction();
			String ip = "IP Not Found"; 
	        tbluserips user= s.get(tbluserips.class, ipid);		
			try {
				
				if(user!=null) {
					return user;
					
				}
			}catch (Exception e) {
			// TODO: handle exception
			if(t!=null) {
				t.rollback();
			}
			e.printStackTrace();
		}finally {
			s.close();
		}
			return user;
		
		}
		
	//9 edit ipaddress
		public void editipaddress(int ipid, String updatedip) {
			Session s=sessionFactory.openSession();
			Transaction t= s.beginTransaction();
			tbluserips existingip= s.get(tbluserips.class, ipid);
			try {
				if(existingip!=null) {
					existingip.setIp_address(updatedip);
				}
				
				s.update(existingip);
				t.commit();
			}catch (Exception e) {
				// TODO: handle exception
				if(t!=null) {
					t.rollback();
				}
				
			}
		}
		
		// add ip
		@SuppressWarnings("deprecation")
		public void addIpAddress(tbluserips newIp) {
		    Session session = sessionFactory.openSession();
		    Transaction transaction = session.beginTransaction();

		    try {
		        // Save the new IP address record
		        session.save(newIp);
		        transaction.commit();
		    } catch (Exception e) {
		        if (transaction != null) {
		            transaction.rollback();
		        }
		        e.printStackTrace();
		    } finally {
		        session.close();
		    }
		}
		
		@PersistenceContext
	    private EntityManager entityManager;
		// listing form 
		public List<Map<String, Object>> getUsersList() {
			
		    String query = "SELECT userid, username, email, birthdate, ip FROM tbluser";
		    List<Map<String, Object>> userList = entityManager.createNativeQuery(query)
		        .unwrap(org.hibernate.query.NativeQuery.class)
		        .setResultTransformer(AliasToEntityMapResultTransformer.INSTANCE)
		        .getResultList();
		    return userList;
		}


		
		
}
