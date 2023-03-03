import {Component, OnInit} from '@angular/core';
import {Tour} from "../../../model/Tour";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TourService} from "../../../service/tour.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  tour: Tour | undefined;
  formEdit!: FormGroup;

  constructor(private route: ActivatedRoute, private tourService: TourService, private router: Router) {
  }

  ngOnInit(): void {
    this.formEdit = new FormGroup({
      // id: new FormControl(this.tour?.id),
      // name: new FormControl(this.tour?.name),
      // image: new FormControl(this.tour?.image),
      // price: new FormControl(this.tour?.price),
      // status: new FormControl(this.tour?.status)
      id: new FormControl(""),
      name: new FormControl(""),
      image: new FormControl(""),
      price: new FormControl(""),
      status: new FormControl(""),
      dayStart: new FormControl(""),
      dayEnd: new FormControl(""),
      avgPoint: new FormControl(""),

    })
    this.id = this.route.snapshot.paramMap.get('id');
    this.tourService.findById(this.id).subscribe(data => {
      // this.tour = data
      this.id = +data["id"]

    })
    this.showedit(this.id)


    // if (this.id != null) {

  }

  showedit(id: number) {
    this.tourService.findById(id).subscribe((data) => {
      this.formEdit.get("id")?.setValue(data.id)
      this.formEdit.get("name")?.setValue(data.name)
      this.formEdit.get("image")?.setValue(data.image)
      this.formEdit.get("price")?.setValue(data.price)
      this.formEdit.get("status")?.setValue(data.status)
      this.formEdit.get("dayStart")?.setValue(data.dayStart)
      this.formEdit.get("dayEnd")?.setValue(data.dayEnd)
      this.formEdit.get("avgPoint")?.setValue(data.avgPoint)
    })

  }


  editTour() {
    let tourNew = this.formEdit.value
    this.tourService.create(tourNew).subscribe(data => {
      this.router.navigate(['/admin'])
    })
  }


}
