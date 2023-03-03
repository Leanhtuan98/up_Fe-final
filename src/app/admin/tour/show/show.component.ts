import { Component } from '@angular/core';
import {Tour} from "../../../model/Tour";
import {TourService} from "../../../service/tour.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  tour : Tour[] = [];

  constructor(private tourService: TourService, private http: HttpClient) {
    this.findAll();
  }

  findAll() {
    this.tourService.findAll().subscribe(data => {
      this.tour = data;
    }, error => {
      alert("false")
    })
  }
}
