import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  data: any;
  constructor() { }

  setUserData(data) {
    this.data = data;
  }

  getUserData() {
    return this.data;
  }
}
