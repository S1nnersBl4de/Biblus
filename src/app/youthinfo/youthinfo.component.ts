import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { kidsbooks } from '../interfaces/kids.interface';
import { BiblusDataService } from '../Services/biblus-data.service';

@Component({
  selector: 'app-youthinfo',
  templateUrl: './youthinfo.component.html',
  styleUrl: './youthinfo.component.css'
})
export class YouthinfoComponent implements OnInit {

  book: any;

  constructor(
    private route: ActivatedRoute,
    private infoservice: BiblusDataService
  ) {}

  ngOnInit(): void {
    const youthId = this.route.snapshot.paramMap.get('id');
    console.log('Fetching details for book ID:', youthId);

    if (youthId) {
      this.infoservice.youthbookswithId(youthId).subscribe({
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
