
import { Component, OnInit } from '@angular/core';
import { BiblusDataService } from '../Services/biblus-data.service';
import { onlyimg } from '../interfaces/slider1.interface';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  
})
export class SliderComponent implements OnInit {
  
  constructor(private sliderservice: BiblusDataService){}

  slides: onlyimg[] = [];

  ngOnInit(): void {
    this.sliderservice.slide1().subscribe(data =>{
      this.slides = data.slice(0, 5);

    })


  }

}
