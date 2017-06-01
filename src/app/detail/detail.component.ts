import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import { HolidayListService } from '../../app/app.service';

@Component({
  selector: 'home',
  templateUrl: '../app/detail/detail.component.html',
})

export class DetailComponent {
  selectedDate: string;
  holidayDetails: any;
  constructor(private route: ActivatedRoute, private _holidayListService: HolidayListService) { }
  ngOnInit() {
    this.route.params.subscribe((c) => {
      this.selectedDate = c["day"];
    });
    this.getHolidayDetails();
  }

  /*Method used to get holidays list from get holidayList api */
  getHolidayDetails() {
    this._holidayListService.getholidayList().subscribe(model => {
      this.holidayDetails = model.holidays[this.selectedDate];
    },
      error => {
        console.log(error);
      })
  }
}