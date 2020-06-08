import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-persoenliche-angaben',
  templateUrl: './persoenliche-angaben.component.html',
  styleUrls: ['./persoenliche-angaben.component.css']
})
export class PersoenlicheAngabenComponent implements OnInit, OnDestroy {

  @Input() persoenlicheAngabenFormGroup: FormGroup;

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    /* I could adapt default values here by reacting to Input() variables to this component
     * or adapt the validation rules, although I think this should be the job the service as well.
     *
     * The job of this component is to add changes to the visual representation of the form and maybe
     * react to other changes. Form Creation is job of the Service.
     */

    // e.g. adapt validation rules
    this.persoenlicheAngabenFormGroup.controls.firstName.setValidators([Validators.required, Validators.minLength(10)]);

    // react to changes in the form
    this.persoenlicheAngabenFormGroup.controls.lastName.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(lastName => console.log(lastName));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

