import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  dropdownOptions: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];


  // Chat payload object
  chatPayload: any = {
    selectedOptions: [], // Array to hold selected dropdown values
    customerName: '',
    projectName: '',
    equipmentName: '',
    projectNumber: '',
    date: ''
  };

  promptList = [
    {
      sourceName: 'Category 1',
      samplePromptList: [
        { prompt: 'Write a poem about nature.' },
        { prompt: 'Describe your favorite childhood memory.' }
      ]
    },
    {
      sourceName: 'Category 2',
      samplePromptList: [
        { prompt: 'Plan a trip to Mars.' },
        { prompt: 'Invent a new holiday tradition.' }
      ]
    },
    {
      sourceName: 'Category 3',
      samplePromptList: [
        { prompt: 'Design a futuristic car.' },
        { prompt: 'Explain the concept of time travel.' }
      ]
    }
  ];

  // Function to handle prompt selection
  chatTextUpdate(selectedPrompt: string): void {
    console.log(`Selected Prompt: ${selectedPrompt}`);
    // Implement further logic to update the chat or handle the selected prompt
  }
  // Function to handle form submission
  submitPayload() {
    console.log('Chat Payload:', this.chatPayload);
    // You can send `chatPayload` to your backend or use it elsewhere
  }
}
