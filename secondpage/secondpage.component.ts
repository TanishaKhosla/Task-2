import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent implements OnInit {
  name1='';
  name2='';
  home='';
  phone='';
  constructor(private connect:ConnectService,private router:Router) { }

  ngOnInit(): void {
    this.name1=this.connect.fn;
    this.name2=this.connect.ln;
    this.home=this.connect.ad;
    this.phone=this.connect.no;
  }
 back()
 {
   this.router.navigate(['firstpage']);
 }
}
