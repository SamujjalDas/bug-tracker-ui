import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BugserviceService } from '../bugservice.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: any;
  constructor(private router: Router, private service: BugserviceService) { }

  ngOnInit(): void {
  }
  // public loginNow(addForm: NgForm): void{
  //   console.log("logged in");
  //   console.log(addForm.value);
  //   this.router.navigate(['/search']);

  // }

  public loginNow(addForm: NgForm): void {
    this.service.login(addForm.value).subscribe((data) => {
      console.log(data);
      this.msg = data;
      this.router.navigate(['/search']);
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
