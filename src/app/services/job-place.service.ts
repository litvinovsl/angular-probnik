import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobPlaceService {

  constructor() { }

  getJobPlace() {
    return of([
      {
        name: 'MTS FE',
        id: 1
      },
      {
        name: 'MTS BE',
        id: 2
      },
      {
        name: 'MTS Testing',
        id: 3
      },
      {
        name: 'MTS Administration',
        id: 4
      },
      {
        name: 'MTS HR department',
        id: 5
      },
      {
        name: 'MTS Recruiter',
        id: 6
      },
      {
        name: 'MTS Buisiness analitic',
        id: 7
      },
      {
        name: 'MTS Content Manager',
        id: 8
      },
      {
        name: 'MTS Technical Support',
        id: 9
      },
      {
        name: 'MTS Security Departament',
        id: 10
      }
    ])
  }
}