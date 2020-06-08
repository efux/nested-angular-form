import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../dto/user';
import {Portfolio} from '../dto/portfolio';

@Injectable({providedIn: 'root'})
export class UserFormService {

  constructor(private fb: FormBuilder) {
    /**
     * The job of this service is to build the whole form from the DTOs.
     * In our project we also have a service which does the opposite Form -> DTO for sending to the backend.
     */
  }

  build(portfolio: Portfolio): FormGroup {
    return this.fb.group({
      address: this.fb.control(portfolio.address, [Validators.required, Validators.minLength(5)]),
      user: this.buildPersoenlicheAngaben(portfolio.user)
    });
  }

  private buildPersoenlicheAngaben(user: User): FormGroup {
    return this.fb.group({
      firstName: this.fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      lastName: this.fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)])
    });
  }

}
