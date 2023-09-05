import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id!: string;
  name!: string;
  year!: number;

  constructor() { }

  ngOnInit(): void {
    this.id = "B6304249";
    this.name = "Thanakrit Namnual";
    this.year = 2002;
  }

  getName() {
    return this.name;
  }
  
}
