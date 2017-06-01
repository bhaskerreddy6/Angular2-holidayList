import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import { HolidayListService } from '../../app/app.service';


@Component({
    selector: 'home',
    templateUrl: '../app/home/home.component.html',
})
export class HomeComponent {
    holidayDates:any;
    constructor(private _holidayListService: HolidayListService) {
        this.getHolidayDetails();
    }
    /*Method used to get the holidays details from the service getholidaylist */
    getHolidayDetails() {
        this._holidayListService.getholidayList().subscribe(model =>{
            this.holidayDates = Object.keys(model.holidays);
        },
        error =>{
            console.log(error);
        })
    }
}