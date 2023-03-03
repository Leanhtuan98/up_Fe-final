import { Component } from '@angular/core';
import {Tour} from "../../../model/Tour";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TourService} from "../../../service/tour.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  id: any;
  tour: Tour | undefined;
  formDelete !: FormGroup;

  constructor(private route: ActivatedRoute, private tourService : TourService, private router : Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.tourService.findById(this.id).subscribe(data =>{
        this.tour = data;
        this.formDelete = new FormGroup({
          id: new FormControl(this.tour?.id),
          name: new FormControl(this.tour?.name)
        })
      })
    }
  }

  deleteProduct() {
    let tourNew = this.formDelete.value
    this.tourService.findById(tourNew.id).subscribe(data =>{
      this.tour = data;
      console.log(this.tour)
      this.tourService.delete(this.tour).subscribe(data =>{
        this.router.navigate(['/admin'])
      })
    })
  }
}

