import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModel: UserModel;
  myform;
  constructor() {
    this.userModel = <UserModel>{};
   }

  ngOnInit() {
  }

  registerUser(f) {
  
   /* this.userModel.name = f.userName.value;
    this.userModel.age = f.userAge.value;
    this.userModel.gender = f.userGender.value;
    this.userModel.cellphone = f.userCellphone.value;*/

    console.log(this.userModel);
  }


}
