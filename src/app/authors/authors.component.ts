import { Component } from '@angular/core';
import { BiblusDataService } from '../Services/biblus-data.service';
import { OnInit } from '@angular/core';
import { Author } from '../interfaces/slider2.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent implements OnInit {

  constructor(public authorservice: BiblusDataService , public router: Router){}

  authors: Author[] = [];

  ngOnInit(): void {
    this.authorservice.authors().subscribe(data => {
      this.authors = data.data;

    })
  }

  viewauthor(authorId: number): void{
    this.router.navigate(['singleAuthor', authorId]);
  }

}
