import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friso',
  templateUrl: './friso.component.html',
  styleUrls: ['./friso.component.scss']
})
export class FrisoComponent implements OnInit {

  sidebar = true;

  mostrarSidebar() {
    this.sidebar = !this.sidebar;
    console.log(this.sidebar)
    }


  constructor() { }

  ngOnInit() {
  }

}
