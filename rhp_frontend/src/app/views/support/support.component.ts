import { Component } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {

  contactForm = {
      name : '',
      email : '',
      phone : '',
      message : ''
  }


  constructor(private snackBar: MatSnackBar) { }


  onSubmit() {
    console.log(this.contactForm);
    if (this.contactForm.name == '' || this.contactForm.email == '' || this.contactForm.phone == '' || this.contactForm.message == '') {
      this.snackBar.open('Please fill in all fields', 'Close', {
        duration: 3000,
        direction: 'ltr',
        verticalPosition: 'top'
      });
    } else {
      this.snackBar.open('Thank you for contacting us. We will get back to you shortly', 'Close', {
        duration: 3000,
        direction: 'ltr',
        verticalPosition: 'top',
        panelClass: ['blue-snackbar']
      });
      // reset form
      this.contactForm = {
        name : '',
        email : '',
        phone : '',
        message : ''
      }
    }
  }

}
