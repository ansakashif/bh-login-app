import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { AuthenticationState } from '../models/authentication-state.model';

@Component({
    template: `<div class="container">
                <div class="text-center">
                    <h1>Welcome</h1>
                    <h2>You are now logged in</h2>
                    <button type="button" [disabled]="authService.userState == loggingOut"
                     class="btn btn-primary" (click)="continueToLogout()">
                     {{authService.userState == loggingOut ? 'Logging Out..': 'Log Out'}}</button>
                </div>
               </div>`
})

export class ProfileComponent implements OnInit {
    loggingOut = AuthenticationState.loggingOut;
    constructor(private routes: Router, public authService: AuthService) {

    }

    ngOnInit() {
        this.authService.userState = AuthenticationState.loggedIn;
    }

    continueToLogout() {
        this.authService.logoutUser();
    }

}
