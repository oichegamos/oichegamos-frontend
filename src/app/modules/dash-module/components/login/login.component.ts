import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IToken } from 'src/app/shared/interfaces/token.interface';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public wrongEmailOrPassword: boolean = false;
  public email: string = '';
  public password: string = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.authenticationService.userIsLogged()) {
      this.router.navigate(['/dash']);
    }
  }

  login(): void {
    this.authenticationService.signIn(this.email, this.password)
      .subscribe({
        next: (response: IToken) => {
          this.authenticationService.setToken(response.token);
          location.reload();
        },
        error: (err) => {
          this.wrongEmailOrPassword = true;
        }
      });
  }

}
