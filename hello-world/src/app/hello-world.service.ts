import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../environments/environment';
import { map } from 'rxjs/operators'

@Injectable()
export class HelloWorldService {

  constructor(private http: Http) { }

  getTitle() {
    return this.http.get(`${environment.serverUrl}/hello-world`).pipe(
      map(response => response.json())
      );
  }

}