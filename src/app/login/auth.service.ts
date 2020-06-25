import { Injectable } from '@angular/core';
import { MockServer } from '../services/mock-server';
import { Router } from '@angular/router';
import { AuthenticationState } from '../models/authentication-state.model';

@Injectable()

export class AuthService {
    errorMessage;
    userState = AuthenticationState.notLogged;
    constructor(private mockServer: MockServer, private router: Router) {
    }
    loginUser(userName: string, password: string) {
        this.userState = AuthenticationState.loggingIn;
        this.mockServer.login(userName, password).then((response: any) => {
            // Response from mock server
            console.log('Response from mock server', response);
            if (response.success) {
                localStorage.setItem('LoggedInUser', userName);
                this.router.navigate(['/profile']);
                this.userState = AuthenticationState.loggedIn;
            } else {
                this.userState = AuthenticationState.notLogged;
            }
            this.errorMessage = response.errorMessage;
        });
    }

    logoutUser() {
            this.userState = AuthenticationState.loggingOut;
            this.mockServer.logout().then(() => {
                localStorage.clear();
                this.router.navigate(['/login']);
                this.userState = AuthenticationState.notLogged;
            });
    }

    isAuthenticated() {
        if (!localStorage.getItem('LoggedInUser')) {
            return false;
        }
        return true;
    }
}
