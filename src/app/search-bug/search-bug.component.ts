import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BugserviceService } from '../bugservice.service';

@Component({
  selector: 'app-search-bug',
  templateUrl: './search-bug.component.html',
  styleUrls: ['./search-bug.component.css']
})
export class SearchBugComponent implements OnInit {

  msg : any ;
  constructor(private service:BugserviceService) { }

  ngOnInit(): void {
  }

  public searchBugNow(addForm: NgForm): void {
    this.service.getBug(addForm.value).subscribe((data)=>{
      console.log(data);
      this.msg=data;
    //this.message=this._bug;
  },
  (error: HttpErrorResponse) => {
    alert(error.message);
  }
);
}


  
}
