import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http:Http) { }
   fetchData(){
    return  this.http.get('http://5c92dbfae7b1a00014078e61.mockapi.io/owners')
    .map((res) => res.json())

}
}
