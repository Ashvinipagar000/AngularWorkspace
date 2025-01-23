import { Component } from '@angular/core';

@Component({
  selector: 'app-guiding-para',
  templateUrl: './guiding-para.component.html',
  styleUrls: ['./guiding-para.component.css']
})
export class GuidingParaComponent {
  formData = {
    equipmentName: '',
    customerName: '',
    projectName: '',
    projectNumber: '',
    yearOfPdp: '',
    plantLocation: '',
    unitName: '',
    documentType: '',
    technology: ''
  };

  // Dropdown Options
  unitOptions = ['Unit 1', 'Unit 2', 'Unit 3'];
  documentOptions = ['Type 1', 'Type 2', 'Type 3'];
  technologyOptions = ['Tech 1', 'Tech 2', 'Tech 3'];

  // Form Submission
  onSubmit() {
    console.log('Form Submitted:', this.formData);
    alert('Form submitted successfully!');
  }

  // Reset Form
  onReset() {
    this.formData = {
      equipmentName: '',
      customerName: '',
      projectName: '',
      projectNumber: '',
      yearOfPdp: '',
      plantLocation: '',
      unitName: '',
      documentType: '',
      technology: ''
    };
  }
}


