import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
    selector: 'app-nav-bar',
    template: `<div class="container-fluid">
                    <div class="row nav-bar">
                        <div class="col-md-6">
                            <img src="/assets/logo.png">
                        </div>
                        <div class="col-md-6 d-flex justify-content-end align-items-center">
                            <span class="color-white">{{auth.userState}}</span>
                        </div>
                    </div>
                </div>`,
    styles: [`.nav-bar { background-color: #d9dfe4 }
               img { width: 100px; }`]            
})

export class NavbarComponent {
    constructor(public auth: AuthService) {

    }
}
