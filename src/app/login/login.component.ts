import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../Services/authservice.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthserviceService, private router: Router,  private notification: NzNotificationService) {}

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        this.notification.success('Success', 'წარმატებით გაიარეთ ავტორიზაცია <3');
        this.router.navigate(['/']);
      },
      error => {
        this.notification.error('Error', 'ვერ გაიარეთ ავტორიზაცია ცადეთ ხელახლა');
      }
    );
  }

}
