import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { AuthService } from './../auth.service';
import * as AuthActions from './auth-actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  @Effect()
  LogIn: Observable<Action> = this.actions.ofType(AuthActions.AuthActionTypes.LOGIN)
    .pipe(map((action: AuthActions.LogIn) => action.payload))
    .pipe(switchMap(payload => {
      return this.authService.logIn(payload.email, payload.password)
        .pipe(
          map(user => {
            return new AuthActions.LogInSuccess({token: JSON.parse(user._body).id, email: payload.email});
           }),
          catchError((err, caught) => {
            return of(new AuthActions.LogInFailure({ error: err }));
          })
       );
    }));

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActions.AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      localStorage.setItem('token', user.payload.token);
      this.presentToastWithMessage('Logged in successfully');
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActions.AuthActionTypes.LOGIN_FAILURE),
    tap((err) => {
      this.presentToastWithMessage(err);      
    })
  );

  @Effect()
  SignUp: Observable<any> = this.actions.ofType(AuthActions.AuthActionTypes.SIGNUP)
    .pipe(map((action: AuthActions.SignUp) => action.payload))
    .pipe(switchMap(payload => {
      return this.authService.signUp(payload)
        .pipe(
          map((user) => {
            return new AuthActions.SignUpSuccess({token: user.token, email: payload.email});
          }),
          catchError((err, caught) => {
            return of(new AuthActions.SignUpFailure({ error: err }));
          })
        );
    }));

  @Effect({ dispatch: false })
  SignUpSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActions.AuthActionTypes.SIGNUP_SUCCESS),
    tap((user) => {
      this.presentToastWithMessage('Signed up successfully');
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  SignUpFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActions.AuthActionTypes.SIGNUP_FAILURE),
    tap((err) => {
      this.presentToastWithMessage(err);      
    })
  );

  async presentToastWithMessage(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2000,
    });
    toast.present();
  }
}
