import { Component } from '@angular/core';
interface MultiplicationEntry {
  number: number;
  table: number[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bgcolor='lightblue';
  selectedNumber: number = 0; // Default value
  multiplicationTable: MultiplicationEntry[] = [];
  //selectedNumber: number =0; // Store the selected number
  //multiplicationTable: number[] = [];    // Array to hold the multiplication table

  // Method to generate the multiplication table
  
  printTables() :void {
        

      this.multiplicationTable = []; // Clear previous results

     // Check if a number is selected
     if (this.selectedNumber > 0) {
      for (let num = 1; num <= this.selectedNumber; num++) {
          const table: number[] = [];
          for (let i = 1; i <= 10; i++) {
              table.push(num * i); // Calculate and add to the table
          }
          this.multiplicationTable.push({ number: num, table }); // Store each table
      }
  } 
     
      //for (let i = 1; i <= 20; i++) {
       // this.multiplicationTable.push(this.selectedNumber * i); // Calculate and add to the table
      
    }
  }
  

