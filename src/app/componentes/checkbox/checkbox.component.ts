import { Component, OnInit } from '@angular/core';
import { OrganizacionService } from 'src/servicios/organizacion.service';
import { FormControl, FormGroupDirective, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class CheckboxComponent implements OnInit {
  childForm;
  modulos: any[] = [];

  constructor( private organizacionService: OrganizacionService, private parentF: FormGroupDirective ) {  
  }

  ngOnInit() {
    this.childForm = this.parentF.form;
    this.childForm.addControl('modulo' , new FormControl(''))
  }

}
