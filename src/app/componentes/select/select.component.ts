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
  ubicaciones: any[] = [];
  dato: number;
  

  constructor(private organizacionService : OrganizacionService, private parentF: FormGroupDirective) {
    this.ubicaciones = organizacionService.getUbicaciones();
   }

  ngOnInit() {
    this.childForm = this.parentF.form;
    this.childForm.addControl('ubicacion' , new FormControl(''))
    this.childForm.addControl('lat' , new FormControl(''))
    this.childForm.addControl('lng' , new FormControl(''))
  }
}
