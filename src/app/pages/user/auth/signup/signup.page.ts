import {
  Component,
  OnInit,
  EventEmitter
} from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { User, SignUp } from './../../../../services/authentication';
import * as fromRoot from './../../../../reducers';
import { Observable } from 'rxjs';
import { BaseComponent } from '../../../../base-component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage extends BaseComponent implements OnInit {

  signUpForm: FormGroup;
  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;
  firstNamePattern = '^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_ \.]*$';
  mobilePattern = '^[6789][0-9]*$';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<fromRoot.AppState>
  ) {
    super();
    this.signUpForm = this.formBuilder.group({
      fname: ['', Validators.compose([Validators.required, Validators.pattern(this.firstNamePattern)])],
      lname: [''],
      mobile: ['', Validators.compose([
                  Validators.required,
                  Validators.pattern(this.mobilePattern),
                  Validators.minLength(10), Validators.maxLength(10)
              ])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', Validators.compose([Validators.required])]
    });
    this.signUpForm.validator = this.matchingPasswords;
    this.getState = store.select('auth');
  }

  ngOnInit() {
    const subscription = this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
    this.subscriptions.push(subscription);
  }

  private mapValidators(validators) {
    const formValidators = [];

    if (validators) {
      for (const validation of Object.keys(validators)) {
        if (validators[validation] === true) {
          formValidators.push(Validators[validation]);
        } else {
          formValidators.push(Validators[validation](validators[validation]));
        }
      }
    }

    return formValidators;
  }

  matchingPasswords(AC: AbstractControl) {
    if (AC.get('password') && AC.get('confirmPassword')) {
      const password = AC.get('password').value; // to get value in input tag
      const confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
      if (password !== confirmPassword) {
        AC.get('confirmPassword').setErrors({ matchingPasswords: true });
      } else {
        return null;
      }
    }
  }

  signup() {
    const payload = this.signUpForm.value;
    this.store.dispatch(new SignUp(payload));
  }

}
