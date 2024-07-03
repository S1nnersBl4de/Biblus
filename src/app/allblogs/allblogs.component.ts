import { Component } from '@angular/core';
import { faClockFour } from '@fortawesome/free-solid-svg-icons';
import { bloginfo } from '../interfaces/blog.interface';
import { BiblusDataService } from '../Services/biblus-data.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allblogs',
  templateUrl: './allblogs.component.html',
  styleUrl: './allblogs.component.css'
})
export class AllblogsComponent implements OnInit {

  icon = faClockFour;
  

  constructor(public blogservice: BiblusDataService,  private router: Router){}

  blogs:bloginfo[] = [];

  ngOnInit(): void {
    this.blogservice.blog2().subscribe(info => {
       this.blogs = info.data;
    });
  }
  viewBlog(blogId: string): void {
    this.router.navigate(['/singleblog', blogId]);
  }

}
