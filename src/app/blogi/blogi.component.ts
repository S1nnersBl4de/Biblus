import { Component } from '@angular/core';
import { faClockFour } from '@fortawesome/free-solid-svg-icons';
import { bloginfo } from '../interfaces/blog.interface';
import { BiblusDataService } from '../Services/biblus-data.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogi',
  templateUrl: './blogi.component.html',
  styleUrl: './blogi.component.css'
})
export class BlogiComponent implements OnInit {

  icon = faClockFour;

  constructor(public blogservice: BiblusDataService, public router: Router){}

  blogs:bloginfo[] = [];

  ngOnInit(): void {
    this.blogservice.blog().subscribe(info => {
       this.blogs = info.data;
    });
  }

  viewBlog(blogId: string): void {
    this.router.navigate(['/singleblog', blogId]);
  }




}
