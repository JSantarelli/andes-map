import { Component, OnInit } from '@angular/core';
import { OrganizacionService } from 'src/servicios/organizacion.service';
import { FormControl, FormGroupDirective, ControlContainer, FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class CheckboxComponent implements OnInit {
  childForm;
  modulosForm: FormGroup;
  modulos: any[] = [];

  constructor( private organizacionService: OrganizacionService, private parentF: FormGroupDirective, private fb: FormBuilder ) {
    this.modulos = organizacionService.getModulos();
    const FormControls = this.modulos.map(control => new FormControl(false));

    this.modulosForm = this.fb.group({
      modulos: new FormArray(FormControls)
    });
  }

  submit() {

  }

  ngOnInit() {
    this.childForm = this.parentF.form;
    this.childForm.addControl('modulos' , new FormControl(''))
    this.childForm.addControl('mpi' , new FormControl(''))
    this.childForm.addControl('top' , new FormControl(''))
    this.childForm.addControl('citas' , new FormControl(''))
    this.childForm.addControl('rup' , new FormControl(''))
  }
}
