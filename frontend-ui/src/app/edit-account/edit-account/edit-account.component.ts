import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user-feature/models/user';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

   editUser: User = {
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

}
