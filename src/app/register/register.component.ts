import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth: AuthService,
              private _router: Router) { }
  registerUserData = {};

  ngOnInit() {}

  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res);
        this._router.navigate(['/events']);
        localStorage.setItem('token', res.token);
      },
      err => console.log(err)
    );
  }


}
