import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { kidsbooks } from '../interfaces/kids.interface';
import { BiblusDataService } from '../Services/biblus-data.service';

@Component({
  selector: 'app-kidinfo',
  templateUrl: './kidinfo.component.html',
  styleUrl: './kidinfo.component.css'
})
export class KidinfoComponent implements OnInit {

  book: any;

  constructor(
    private route: ActivatedRoute,
    private infoservice: BiblusDataService
  ) {}

  ngOnInit(): void {
    const kidsId = this.route.snapshot.paramMap.get('id');
    console.log('Fetching details for book ID:', kidsId);

    if (kidsId) {
      this.infoservice. kidsbookswithId(kidsId).subscribe({
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
