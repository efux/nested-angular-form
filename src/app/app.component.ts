import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UserFormService} from './user-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  isSubmittedFormValid: boolean;
  submittedData: any;

  constructor(private userFormService: UserFormService) {
  }

  ngOnInit() {
    const portfolio = {
      address: 'Random address',
      user: {
        firstName: 'My first name',
        lastName: 'My way too long invalid last name',
        birthDate: new Date()
      }
    };

    /**
     * This component has to know the UserFormService and that there will be a FormGroup 'user' present.
     */
    this.form = this.userFormService.build(portfolio);
  }

  onSubmit() {
    this.isSubmittedFormValid = this.form.valid;
    this.submittedData = this.form.value;
  }
}
