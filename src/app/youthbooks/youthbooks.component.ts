import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BiblusDataService } from '../Services/biblus-data.service';
import { kidsbooks, kidsROOT } from '../interfaces/kids.interface';
@Component({
  selector: 'app-youthbooks',
  templateUrl: './youthbooks.component.html',
  styleUrl: './youthbooks.component.css'
})
export class YouthbooksComponent {

  youth: kidsbooks[] = [];
  totalRecords: number = 0;
  pageSize: number = 16;
  currentPage: number = 1;


  constructor(private youthbookservice: BiblusDataService, private router: Router) { }

  ngOnInit(): void {
    this.loadyouthbooks(this.currentPage);
  }

  loadyouthbooks(page: number): void {
    this.youthbookservice.displayallyouthbooks(page).subscribe((data: kidsROOT) => {
      this.youth = data.data;
      this.totalRecords = 50; 
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.page + 1; 
    this.loadyouthbooks(this.currentPage);
  }

  goToyouthBookDetail(youthid: number): void {
    this.router.navigate(['/youthbooksinfo', youthid]);
  }

}
