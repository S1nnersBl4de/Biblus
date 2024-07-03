import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BiblusDataService } from '../Services/biblus-data.service';
import { bloginfo } from '../interfaces/blog.interface';

@Component({
  selector: 'app-bloginfo',
  templateUrl: './bloginfo.component.html',
  styleUrl: './bloginfo.component.css'
})
export class BloginfoComponent implements OnInit {

  blog: any; 

  constructor(
    private route: ActivatedRoute, 
    private blogservice: BiblusDataService
  ) { }

  ngOnInit(): void {
    const blogId = this.route.snapshot.paramMap.get('id');
    console.log('Fetching details for book ID:', blogId);

    if (blogId) {
      this.blogservice.blogwithID(blogId).subscribe({
        next: (response) => {
            this.blog = response;  
        },
        error: (err) => {
          console.error('Error fetching book details:', err);
        }
      });
    }
  }

}
