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
  checkboxForm;
  modulosForm: FormGroup;
  modulos: any[] = [];

  constructor( private organizacionService: OrganizacionService, private parentF: FormGroupDirective, private fb: FormBuilder ) {
    this.modulos = organizacionService.getModulos();
    const FormControls = this.modulos.map(control => new FormControl(false));

    this.modulosForm = this.fb.group({
      modulos: new FormArray(FormControls)
    });

    console.log(this.modulosForm)
  }

  submit() {

  }

  ngOnInit() {
    this.checkboxForm = this.parentF.form;
    this.checkboxForm.addControl('modulos' , new FormControl(''))
    this.checkboxForm.addControl('mpi' , new FormControl(''))
    this.checkboxForm.addControl('rup' , new FormControl(''))
    this.checkboxForm.addControl('citas' , new FormControl(''))
    this.checkboxForm.addControl('top' , new FormControl(''))
    this.checkboxForm.addControl('huds' , new FormControl(''))
    this.checkboxForm.addControl('inter' , new FormControl(''))
    this.checkboxForm.addControl('carpet' , new FormControl(''))
    this.checkboxForm.addControl('lab' , new FormControl(''))
    this.checkboxForm.addControl('repo' , new FormControl(''))
    this.checkboxForm.addControl('app' , new FormControl(''))
  }
}
