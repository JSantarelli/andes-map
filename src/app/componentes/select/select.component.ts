import { Component, OnInit } from '@angular/core';
import { OrganizacionService } from '../../../servicios/organizacion.service';
import { FormGroupDirective, ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class SelectComponent implements OnInit {
  childForm;
  efectores: any[] = [];
  

  constructor(private organizacionService : OrganizacionService, private parentF: FormGroupDirective) {
    this.efectores = organizacionService.getEfectores();
   }

  ngOnInit() {
    this.childForm = this.parentF.form;
    this.childForm.addControl('efector' , new FormControl(''))
    this.childForm.addControl('nombre' , new FormControl(''))
    this.childForm.addControl('tipo' , new FormControl(''))
    this.childForm.addControl('municipio' , new FormControl(''))
    this.childForm.addControl('lat' , new FormControl(''))
    this.childForm.addControl('lng' , new FormControl(''))
  }
}
