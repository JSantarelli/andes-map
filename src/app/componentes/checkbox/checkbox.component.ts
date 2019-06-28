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
    this.modulos = organizacionService.getModulos();
  }

  ngOnInit() {
    this.childForm = this.parentF.form;
    this.childForm.addControl('modulo' , new FormControl(''))
    this.childForm.addControl('mpi' , new FormControl(''))
    this.childForm.addControl('rup' , new FormControl(''))
    this.childForm.addControl('citas' , new FormControl(''))
    this.childForm.addControl('top' , new FormControl(''))
    this.childForm.addControl('huds' , new FormControl(''))
    this.childForm.addControl('mas' , new FormControl(''))
    this.childForm.addControl('pres' , new FormControl(''))
    this.childForm.addControl('silab' , new FormControl(''))
    this.childForm.addControl('sir' , new FormControl(''))
    this.childForm.addControl('aps' , new FormControl(''))
  }

}
