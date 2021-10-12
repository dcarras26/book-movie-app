import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  constructor(private route: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe(data =>{
      console.log(this.user);
      this.goToUsers();
    },
    error => console.log(error));
  }

  goToUsers(){
    this.route.navigate(['users']);
  }

  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }

}
