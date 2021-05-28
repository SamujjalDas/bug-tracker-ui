import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bug } from '../bug';
import { BugserviceService } from '../bugservice.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.css']
})
export class CreateBugComponent implements OnInit {

  public _bug:Bug[];
  //bug : Bug = new Bug();
  message : any;



  constructor(private service:BugserviceService) { }

  ngOnInit(): void {
  }

  public createBugNow(addForm: NgForm): void {
    this.service.createBug(addForm.value).subscribe((data)=>{
      console.log(data);
      this.message=data;
    //this.message=this._bug;
  },
  (error: HttpErrorResponse) => {
    alert(error.message);
  }
);
}
}
