import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-background-pic',
  templateUrl: './background-pic.component.html',
  styleUrl: './background-pic.component.css'
})
export class BackgroundPicComponent {

  constructor(private router: Router) {}

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

}
