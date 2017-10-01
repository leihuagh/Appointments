import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.userObj;
  }

  resetPassword() {
    this.authService.resetPassword(this.user.email).then(response => {
      alert(response);
    });
  }

}
