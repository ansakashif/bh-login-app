import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    template: `<div class="container mt-3">
                <div class="text-center">
                    <h1>Welcome</h1>
                    <h2>Please log in to continue</h2>
                    <button type="button" class="btn btn-primary" (click)="continueToLogin()">Continue to Login</button>
                </div>
               </div>`
})

export class WelcomeComponent implements OnInit {
    constructor(private router: Router, private authService: AuthService) {

    }

    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['/profile']);
            return;
        }
    }

    continueToLogin() {
        this.router.navigate(['/login']);
    }

}
