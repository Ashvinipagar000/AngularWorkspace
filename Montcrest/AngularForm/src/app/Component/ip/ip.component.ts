// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-ip',
//   templateUrl: './ip.component.html',
//   styleUrls: ['./ip.component.css']
// })
// export class IpComponent {
//   ipAddress: string = '';
//   ipid:number=0;
//   ipList: any[] = [];
//   nextId: number = 1;

//   constructor(private http: HttpClient) { }

//   // Method to add IP address
//   addIpAddress() {
//     if (this.ipAddress) {
//       const newIp = { id: this.nextId, ipAddress: this.ipAddress };
//       this.ipList.push(newIp);  // Add to list (simulate adding to the table)
//       this.nextId++;  // Increment ID for the next entry
//       this.ipAddress = '';  // Reset input field
//       this.saveIpAddress(newIp);  // Send to back-end to save in database
//     }
//   }

//   // Method to send new IP address to the back-end (API)
//   saveIpAddress(ip: any) {
//     // Replace with your actual back-end API URL
//     const apiUrl = 'http://localhost:8080/tbluserips/addips';

//     this.http.post(apiUrl, ip).subscribe((response: any) => {
//       console.log('IP address added to DB:', response);
//     }, (error: any) => {
//       console.error('Error saving IP address:', error);
//     });
//   }

//   // Method to delete IP address from list and database
//   deleteIp(ipid: number) {
//     // Remove from front-end list
//     this.ipList = this.ipList.filter(ip => ip.id !== ipid);

//     // Send delete request to back-end
//     this.http.delete(`http://localhost:8080/tbluserips/deleteipaddress/${ipid}`).subscribe((response: any) => {
//       console.log('IP address deleted from DB');
//     }, (error: any) => {
//       console.error('Error deleting IP address:', error);
//     });
//   }

//   // Method to edit IP address (if needed)


//   editIp(ipid: number, updatedIp: any): Observable<any> {
//     const url = `http://localhost:8080/tbluserips/editipaddress/${ipid}`;
//     return this.http.put(url, updatedIp);
//   }
// }


import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css']
})
export class IpComponent {
  ipAddress: string = '';
  ipid:number=0;
  ipList: any[] = [];
  nextId: number = 1;

  editedIpAddress: string = '';  // For storing the updated IP address
  editingIpId: number | null = null;

  constructor(private http: HttpClient) { }

  // Method to add IP address
  addIpAddress() {
    if (this.ipAddress) {
      const newIp = { id: this.nextId, ipAddress: this.ipAddress };
      this.ipList.push(newIp);  // Add to list (simulate adding to the table)
      this.nextId++;  // Increment ID for the next entry
      this.ipAddress = '';  // Reset input field
      this.saveIpAddress(newIp);  // Send to back-end to save in database

    }
  }

  // Method to send new IP address to the back-end (API)
  saveIpAddress(ip: any) {
    // Replace with your actual back-end API URL
    const apiUrl = 'http://localhost:8080/tbluserips/addips';

    this.http.post(apiUrl, ip).subscribe((response: any) => {
      console.log('IP address added to DB:', response);
    }, (error: any) => {
      console.error('Error saving IP address:', error);
    });
  }

  // Method to delete IP address from list and database
  deleteIp(ipid: number) {
    // Remove from front-end list
    this.ipList = this.ipList.filter(ip => ip.id !== ipid);

    // Send delete request to back-end
    this.http.delete(`http://localhost:8080/tbluserips/deleteipaddress/${ipid}`).subscribe((response: any) => {
      console.log('IP address deleted from DB');
    }, (error: any) => {
      console.error('Error deleting IP address:', error);
    });
  }

  // Method to edit IP address (if needed)


  // editIp(ipid: number, updatedIp: any): Observable<any> {
  //   const url = `http://localhost:8080/tbluserips/editipaddress/${ipid}`;
  //   return this.http.put(url, updatedIp);
  // }

  editIp(ip: any) {
    this.editingIpId = ip.id;  // Set the IP being edited by storing its ID
    this.editedIpAddress = ip.ipAddress;  // Set the current IP address to be editable

  }
}


