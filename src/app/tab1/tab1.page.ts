import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild('swiper', {static: false}) swiper: ElementRef | undefined;

  logged = false;
  firstLogin = true;
  alertOpened = false;
  buttons = ['Ok']


  constructor() {
    // check if exists first login in local storage
    if (localStorage.getItem('firstLogin') === null) {
      localStorage.setItem('firstLogin', 'true');
    }
    else if (localStorage.getItem('firstLogin') === 'false') {
      this.firstLogin = false;
    }
  }

  ngOnInit(): void {
    if (this.firstLogin) {
      this.alertOpened = true;
    }
  }


  login() {
    this.logged = true;
  }

  logout() {
    this.logged = false;
  }

  present() {

  }

  setOpen(value: boolean) {
    this.alertOpened = value;
      localStorage.setItem('firstLogin', 'false');
  }

}
