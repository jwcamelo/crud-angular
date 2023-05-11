import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Person } from './person.model';

@Injectable()
export class PersonService {
  constructor(private http: HttpClient) {}

  getPersons() {
    return this.http
      .get<any>('assets/persons.json')
      .toPromise()
      .then((res) => <Person[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
