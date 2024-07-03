import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BiblusDataService } from '../Services/biblus-data.service';
import { kidsbooks, kidsROOT } from '../interfaces/kids.interface';

@Component({
  selector: 'app-book-kids',
  templateUrl: './book-kids.component.html',
  styleUrl: './book-kids.component.css'
})
export class BookKidsComponent implements OnInit {
  kids: kidsbooks[] = [];
  totalRecords: number = 0;
  pageSize: number = 24;
  currentPage: number = 1;

  constructor(private kidsbookservice: BiblusDataService, private router: Router) { }

  ngOnInit(): void {
    this.loadkidsbooks(this.currentPage);
  }

  loadkidsbooks(page: number): void {
    this.kidsbookservice.displayallkidsbooks(page).subscribe((data: kidsROOT) => {
      this.kids = data.data;
      this.totalRecords = 100; 
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.page + 1; 
    this.loadkidsbooks(this.currentPage);
  }

  goToKidBookDetail(kidId: number): void {
    this.router.navigate(['/kidsbookinfo', kidId]);
  }
}