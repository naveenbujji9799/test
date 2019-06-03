import { Component, OnInit, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { User, LogIn } from './../../../../services/authentication';
import * as fromRoot from './../../../../reducers';
import { Observable } from 'rxjs';
import { BaseComponent } from '../../../../base-component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginPage extends BaseComponent implements OnInit {
  isPasswordFiled = true;
  userIdSigninForm: FormGroup;
  isLoginSuccessful = false;

  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location,
    private store: Store<fromRoot.AppState>
  ) {
    super();
    this.userIdSigninForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
    this.getState = store.select('auth');
  }

  ngOnInit() {
    let subscription = this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
    this.subscriptions.push(subscription);
  }

  signIn() {
    const payload = this.userIdSigninForm.value;
    this.store.dispatch(new LogIn(payload));
  }

  goToPage(pageName) {
    this.router.navigateByUrl(pageName);
  }

  goBack() {
    this.location.back();
  }

  changeTextPassword() {
    this.isPasswordFiled = !this.isPasswordFiled;
  }

  googleSignIn() {
    console.log('google sign in pressed');
  }

}
