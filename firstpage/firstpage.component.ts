import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  fname="";
  lname="";
  address="";
  number="";
  constructor(private connect:ConnectService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.connect.fn=this.fname;
    this.connect.ln=this.lname;
    this.connect.ad=this.address;
    this.connect.no=this.number;
    this.router.navigate(['secondpage']);
  }
}
