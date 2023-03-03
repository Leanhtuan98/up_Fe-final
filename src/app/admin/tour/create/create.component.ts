import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TourService} from "../../../service/tour.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  formCreate! : FormGroup

  constructor(private route: ActivatedRoute, private tourService : TourService, private router : Router) {
  }

  ngOnInit(): void {this.formCreate=new FormGroup({
    id: new FormControl("", [Validators.required, Validators.max(50)]),
    name: new FormControl(""),
    image: new FormControl(""),
    price: new FormControl(""),
    status: new FormControl("")

  })
  }


  createTour() {
    // let tourNew = this.formCreate.value
    // this.tourService.create(tourNew).subscribe(data =>{
    //   this.router.navigate(['/admin'])
    // }, error => {
    // })
    this.tourService.create(this.formCreate.value).subscribe((data)=>{
      this.router.navigate(["/admin"])
    })
  }

}

