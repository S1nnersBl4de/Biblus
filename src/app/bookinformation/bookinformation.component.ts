import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bestsellerData } from '../interfaces/slider2.interface';
import { BiblusDataService } from '../Services/biblus-data.service';

@Component({
  selector: 'app-bookinformation',
  templateUrl: './bookinformation.component.html',
  styleUrls: ['./bookinformation.component.css']
})
export class BookinformationComponent implements OnInit {
  book: any;

  constructor(
    private route: ActivatedRoute,
    private infoservice: BiblusDataService
  ) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    console.log('Fetching details for book ID:', bookId);

    if (bookId) {
      this.infoservice.getBookDetails(bookId).subscribe({
        next: (response) => {
            this.book = response;  
        },
        error: (err) => {
          console.error('Error fetching book details:', err);
        }
      });
    }
  }
}