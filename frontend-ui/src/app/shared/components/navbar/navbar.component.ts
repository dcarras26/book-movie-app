import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { User } from 'src/app/user-feature/models/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  loggedInUser: User = {
    userId: 8,
    email: "dcruz@test.gmail",
    firstName: "Dennis",
    lastName: "Cruz",
    password: btoa("Pass123!"),
    userName: "dcruz",
    isAdmin: "true"
  }
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('menu') navbarMenuTrigger: MatMenuTrigger;
  @ViewChild('accountMenu') accountMenuTrigger: MatMenuTrigger;


  openMenu() {
    this.navbarMenuTrigger.openMenu();
  }

  closeMenu() {
    this.navbarMenuTrigger.closeMenu();
  }

  openAccountMenu() {
    this.accountMenuTrigger.openMenu();
  }

  closeAccountMenu() {
    this.accountMenuTrigger.closeMenu();
  }


}
