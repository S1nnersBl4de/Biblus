import { Component, OnInit} from '@angular/core';
import { BiblusDataService } from '../Services/biblus-data.service';
import {Router } from '@angular/router';
import { Author,  authorROOT} from '../interfaces/authors.interface';

@Component({
  selector: 'app-allauthors',
  templateUrl: './allauthors.component.html',
  styleUrl: './allauthors.component.css'
})
export class AllauthorsComponent implements OnInit {

  authors: Author[] = [];
  totalRecords: number = 0;
  pageSize: number = 95;
  currentPage: number = 1;

  constructor(private authorservice: BiblusDataService, private router: Router ){}

  ngOnInit(): void {
    this.loadAuthors(this.currentPage);
  }

  loadAuthors(page: number): void {
    this.authorservice.displayallAuthors(page).subscribe((data: authorROOT) => {
      this.authors = data.data;
      this.totalRecords = 96 * this.pageSize; 
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.page + 1; 
    this.loadAuthors(this.currentPage);
  }

  viewauthor(authorId: number): void{
    this.router.navigate(['singleAuthor', authorId]);
  }

}
