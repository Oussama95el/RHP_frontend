import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../../services/employee.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProfileInterface} from "../../../Interfaces/Profile.interface";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styles: [
   '.mat-mdc-checkbox .mdc-form-field {\n' +
   '    color: #0d6efd !important;\n' +
   '}'
    ]
})
export class ProfileFormComponent {

  @Input() profile?: ProfileInterface;

  @Output() dataEvent = new EventEmitter<ProfileInterface>();
  profileForm!: FormGroup;

  jobTitles = [
    { value: 'developer', viewValue: 'Developer' },
    { value: 'designer', viewValue: 'Designer' },
    { value: 'manager', viewValue: 'Manager' }
  ];

  taxRates = [
    { value: 0.05, viewValue: '5%' },
    { value: 0.1, viewValue: '10%' },
    { value: 0.15, viewValue: '15%' },
    { value: 0.2, viewValue: '20%'}
  ];

  constructor(private fb: FormBuilder, private service: EmployeeService, private snackBar: MatSnackBar) {
    this.profileForm = this.fb.group({
      jobTitle: ['', Validators.required],
      description: ['', Validators.required],
      joint: [false],
      kids: ['', Validators.required],
      taxId: ['', Validators.required],
      bankAccount: ['', Validators.required],
      taxRate: ['', Validators.required],
      netSalary: ['', Validators.required],
      benefits: ['', Validators.required],
      registrationNumber: [''],
    });
  }

  ngOnInit(): void {
    // set values from profile to
    this.profileForm.patchValue({
          jobTitle: this.profile?.jobTitle,
          description: this.profile?.description,
          joint: this.profile?.joint,
          kids: this.profile?.kids
    })
  }

  onSubmit(): void {


    if (this.profileForm.valid) {
      // Set the value of the registrationNumber form control
      this.profileForm.patchValue({
        registrationNumber: this.profile?.registrationNumber
      });
      console.log(this.profileForm.value);
      this.service.updateEmployeeProfile(this.profileForm.value).subscribe(
        (data: any) => {
          this.dataEvent.emit(data.data.profile);
          this.snackBar.open('Profile updated successfully', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.profileForm.reset();
        }
      );
    }else {
      this.snackBar.open('Please fill all the fields', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      }
    }

}
