import {Component, OnInit} from '@angular/core';
import {Tour} from "../../model/Tour";
import {TourService} from "../../service/tour.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{
  tours: Tour[] = [];
  constructor(private tourService: TourService) { }

  ngOnInit(): void {
    this.tourService.getALl().subscribe((data)=>{
      this.tours = data;
    })
  }

}
