import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BiblusDataService } from '../Services/biblus-data.service';
import { bestsellerData } from '../interfaces/slider2.interface';

@Component({
  selector: 'app-bestsellers-detailed-page',
  templateUrl: './bestsellers-detailed-page.component.html',
  styleUrls: ['./bestsellers-detailed-page.component.css']
})
export class BestsellersDetailedPageComponent implements OnInit {
  slides2: bestsellerData[] = [];
  totalRecords: number = 0;
  page: number = 1;
  pageSize: number = 6;

  constructor(private sliderservice2: BiblusDataService, private router: Router) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.sliderservice2.getBestsellers(this.page).subscribe(data => {
      this.slides2 = data.data;
      this.totalRecords = data.data.length; 
      console.log('Slides Data:', this.slides2);  
    });
  }

  onPageChange(event: any) {
    this.page = event.page + 1;
    this.loadBooks();
  }

  goToBookDetail(bookId: number): void {
    this.router.navigate(['/book', bookId]);
  }
}
