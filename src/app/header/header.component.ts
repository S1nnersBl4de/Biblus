import { Component, OnInit } from '@angular/core';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { BiblusDataService } from '../Services/biblus-data.service';
import { kidsROOT } from '../interfaces/kids.interface';
import { bestsellerDataROOT } from '../interfaces/slider2.interface';
import { blogROOT } from '../interfaces/blog.interface';
import { authorROOT } from '../interfaces/authors.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  
})
export class HeaderComponent implements OnInit {
  icon = faBagShopping;
  icon2 = faUser;
  
  sidebarVisible: boolean = false;



  items: MegaMenuItem[] | undefined;
    isMegaMenuVisible: boolean = false;

    ngOnInit() {
        this.items = [
            { label: 'Home', routerLink: '/' },
            { label: 'Books', routerLink: '/books' },
            { label: 'Authors', routerLink: '/allAuthors' },
            { label: 'Blog', routerLink: '/fullblogs' },
            { label: 'Accessories', routerLink: '/accessories' },
            { label: 'School', routerLink: '/school' },
        ];
    }

    toggleMegaMenu() {
        this.isMegaMenuVisible = !this.isMegaMenuVisible;
    }

    constructor(private router: Router) {}

    navigateToLogin(): void {
      this.router.navigate(['/login']);
    }
}
