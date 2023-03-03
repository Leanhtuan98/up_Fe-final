import { Component } from '@angular/core';
import {Tour} from "../../model/Tour";
import {TourService} from "../../service/tour.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tours: Tour[] = [];
  constructor(private tourService: TourService) { }

  ngOnInit(): void {
    this.tourService.getALl().subscribe((data)=>{
      this.tours = data;
    })
  }

}
