import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';


@Injectable()
export class ApiCalls{

private baseURL:string = 'https://fsc-test.api.u300.net/focusscript/webapi/v1/athenahealth';

constructor(private http:Http){

}

getAppoitments(){

    return new Promise(resolve =>{
        this.http.get(`${this.baseURL}/appointments`).subscribe(res => resolve(res.json()));
    });
}

}