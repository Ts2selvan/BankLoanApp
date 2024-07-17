import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    username: any
    password:any
  
  constructor(private authService:AppService,private router:Router) { }

  ngOnInit(): void {
  }
  login() {
    const credentials={username:this.username,password:this.password}
    this.authService.login(credentials).subscribe(
      response => {
        // alert('Login successful!');
        this.router.navigate(['/customer-details']); 
      },
      error => {
        alert('Login failed!');
      }
    );
  }

}
