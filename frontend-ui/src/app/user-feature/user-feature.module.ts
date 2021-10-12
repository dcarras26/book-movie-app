import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponentComponent } from './components/user-component/user-component.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';



@NgModule({
  declarations: [
    UserComponentComponent,
    CreateUserComponent,
    EditBookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserFeatureModule { }
