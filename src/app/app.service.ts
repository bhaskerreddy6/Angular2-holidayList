import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BaseRequestOptions, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HolidayListService {
    private apiKey = '3268c8a9-88a0-4ce3-b81c-4252e69c6e13';
    private domainUrl = 'https://holidayapi.com/v1/holidays?key=' + this.apiKey + '&country=US&year=2017';  // URL to web API
    constructor(private http: Http) { }
    /*Getting the holiday list*/
    getholidayList() {
        return this.http.get(this.domainUrl)
            .map(res => {
                return res.json();
            }).catch(res => {
                return Observable.throw(res.json());
            })
    }
}
