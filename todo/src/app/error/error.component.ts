import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errormsg: string  = 'Error happened in the application';
  constructor() { }

  ngOnInit(): void {
  }

}
