import { Injectable } from '@angular/core';

@Injectable()

export class MockServer {
    userData = {
        'john': 'dilinger',
        'sam': 'jenkis',
        'mickey': 'cohen',
        'don': 'corleone'
    };
    login(userName: string, password: string) {
        return new Promise((resolve, reject) => {
            if (this.userData[userName] === password) {
                setTimeout(() => {
                    resolve({ success: true, errorMessage: null });
                }, 1000 * this.getRandomInterval());
            } else {
                setTimeout(() => {
                    resolve({ success: false, errorMessage: 'Wrong username/password' });
                }, 1000 * this.getRandomInterval());
            }
        });
    }

    logout() {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({ success: true, errorMessage: null });
                }, 1000 * this.getRandomInterval());
        });
    }

/**
 * This is a function to generate a random number between 1 and 3 to after which the login/logout requests would be served.
 */
    getRandomInterval() {
        return (Math.random() * (2)) + 1;
    }
}
