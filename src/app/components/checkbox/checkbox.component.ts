import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  modulos: string[];
  
  constructor() { }

  ngOnInit() {
    this.modulos = ['MPI' , 'RUP' , 'TOP'];
  }

}
