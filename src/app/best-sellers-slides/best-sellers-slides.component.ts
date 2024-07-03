import { Component, OnInit } from '@angular/core';
import { BiblusDataService } from '../Services/biblus-data.service';
import { bestsellerData } from '../interfaces/slider2.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-best-sellers-slides',
  templateUrl: './best-sellers-slides.component.html',
  styleUrl: './best-sellers-slides.component.css'
})


export class BestSellersSlidesComponent implements OnInit {


  

  constructor(private sliderservice2: BiblusDataService, private router: Router){}


  slides2: bestsellerData[] = [];
  page: number = 1;

  //  ngOnInit(): void {
  //   this.sliderservice2.slide2().subscribe(data => {
  //     this.slides2 = data.data.slice(0, 15);
  //     console.log('Slides Data:', this.slides2);  // Debugging line
  //   }, error => {
  //     console.error('Error fetching slides:', error);
  //   });
  // }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.sliderservice2.getBestsellers(this.page).subscribe(data => {
      this.slides2 = data.data.slice(0, 15);
      
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
