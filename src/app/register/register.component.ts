import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
    username: any
    password: any
    confirmPassword:any
  
  constructor(private authService:AppService) { }

  ngOnInit(): void {
  }
  register() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    const user={username:this.username,password:this.password}
    this.authService.register(user).subscribe(
      response => {
        alert('Registration successful!');
        this.username=''
        this.password=''
        this.confirmPassword=''
      },
      error => {
        alert('Registration failed!');
      }
    );
  }

}
