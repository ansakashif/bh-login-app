import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AuthenticationState } from '../models/authentication-state.model';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: './login.component.html',
    styles : [`
    em {float: right; color: #E05C65; padding-left: 10px}
    .btn-default { margin-left: 0.5em; }`]
})

export class LoginComponent implements OnInit {
    @ViewChild('loginForm') form: NgForm;

    userName;
    password;
    mouseOverLogin;
    loggingIn = AuthenticationState.loggingIn;
    constructor(private router: Router, public authService: AuthService) {

    }
    ngOnInit () {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['/profile']);
            return;
        }
    }
    cancel() {
        this.router.navigate(['/welcome']);
    }
    login(formValues) {
        // This condition prevents login request if invalid entries are provided in the username and password fields.
        if (this.form.invalid) {
            return;
        }
        this.authService.loginUser(formValues.userName, formValues.password);
    }
}
