import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BiblusDataService } from '../Services/biblus-data.service';


@Component({
  selector: 'app-authorinfo',
  templateUrl: './authorinfo.component.html',
  styleUrl: './authorinfo.component.css'
})
export class AuthorinfoComponent {

  author: any;


  constructor(
    private route: ActivatedRoute, 
    private blogservice: BiblusDataService
  ){}


  ngOnInit(): void {
    const authorId = this.route.snapshot.paramMap.get('id');
    console.log('Fetching details for book ID:', authorId);

    if (authorId) {
      this.blogservice.authorswithID(authorId).subscribe({
        next: (response) => {
            this.author = response;  
        },
        error: (err) => {
          console.error('Error fetching book details:', err);
        }
      });
    }
  }

}
