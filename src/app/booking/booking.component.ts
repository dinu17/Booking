import { Component, OnInit } from '@angular/core';
import { DISABLED } from '../../../node_modules/@angular/forms/src/model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  roomNo: any;
  adultNo: any;
  childNo: any;
  value3: any;
  roomCount: any;
  adultCount: any;
  childCount: any;

  constructor(

  ) { }

  ngOnInit() {
    this.roomNo = 1;
    this.adultNo = 1;
    this.childNo = 0;

  }

  roomRem() {
    if (this.roomNo == 1) {

    } else {
      this.roomNo = this.roomNo - 1;
    }
  }

  roomAdd() {
    if (this.roomNo == 5) {

    } else {
      this.roomNo = this.roomNo + 1;
      this.adultNo = this.adultNo + 1;
    }

  }

  adultRemove() {
    if (this.adultNo == 1) {

    } else {
      this.adultNo = this.adultNo - 1

    }
    this.addingRooms(0, this.childNo)
    this.removingRoom(0, this.childNo)
  }

  adultAdd() {

    this.adultNo = this.adultNo + 1;
    this.addingRooms(this.adultNo, 0)
    this.removingRoom(this.adultNo, 0)
  }

  childRem() {
    if (this.childNo == 0) {

    } else {
      this.childNo = this.childNo - 1;
      return this.childNo
    }
    this.addingRooms(0, this.childNo)
    this.removingRoom(0, this.childNo)
  }

  childAdd() {

    this.childNo = this.childNo + 1;
    return this.childNo
    this.addingRooms(0, this.childNo)
    this.removingRoom(0, this.childNo)
  }

  // ***********************************************************

  // value1 = adultNo
  // value2 = childNo

  addingRooms(value1, value2) {

    this.value3 = value1 + value2
    if (this.value3 % 4 == 1) {
      this.roomNo = this.roomNo + 1;
    }

  }

  removingRoom(value1, value2) {

    this.value3 = value1 + value2

    if (this.value3 % 4 == 0) {
      this.roomNo = this.roomNo - 1;
    }

    // 5 rooms each 4 == 20 person

    if (this.value3 >= 20) {
      while (this.value3 == 20) {
        value2 = value2 - 1;
      }
    }
    
  }


}

