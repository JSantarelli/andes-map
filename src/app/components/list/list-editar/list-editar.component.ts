import { Component, OnInit } from '@angular/core';

import { NgForm, FormGroup, FormControl } from '@angular/forms';

// Servicio
import { OrganizacionService } from '../../../../services/organizacion.service';

// Class Organizacion
import { Organizacion } from '../../../../models/organizacion';

// Componentes
import { SelectComponent } from '../../select/select.component';


@Component({
  selector: 'app-list-editar',
  templateUrl: './list-editar.component.html',
  styleUrls: ['./list-editar.component.scss']
})


export class ListEditarComponent implements OnInit {
  
  // Select
  selectUbicacion = "";

  CambiarUbicacion(e) {
    this.selectUbicacion = e;
    console.log(e);
  }

  form = new FormGroup({
    ubicacion: new FormControl(this.organizacionService.selectedOrganizacion.ubicacion),
  });

  
  // Binding modulos e insercion en Firebase
  organizacionList: Organizacion[];
  select = SelectComponent;
  editar = ListEditarComponent;

  searchTerm: string;

// Hardcoding
  mostrar = false;

  hide() {
    this.mostrar = !this.mostrar;
  }

  constructor( private organizacionService: OrganizacionService) { }

  
  ngOnInit() {

    this.organizacionService.getOrganizaciones();
    this.resetForm();

    this.organizacionService.getOrganizaciones()
    .snapshotChanges()
    .subscribe(Item => {
      this.organizacionList = [];
      Item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.organizacionList.push(x as Organizacion);
      })
    }) 
  }
  
  onSubmit(organizacionForm: NgForm) {
    if(organizacionForm.value.$key == null)
      this.organizacionService.insertOrganizacion(organizacionForm.value)
    else
    this.organizacionService.updateOrganizacion(organizacionForm.value);
   
    this.resetForm(organizacionForm);
  }

  resetForm(organizacionForm?: NgForm) {
    if(organizacionForm != null)
      organizacionForm.reset();
      this.organizacionService.selectedOrganizacion = new Organizacion();
  }

  onEdit(organizacion: Organizacion){
    this.organizacionService.selectedOrganizacion = Object.assign({},organizacion);
  }

  onDelete($key: string){
    var answer = confirm ('Desea eliminar este efector');
    console.log(answer);
    if (answer) {
      this.organizacionService.deleteOrganizacion($key);
    }
  }
}
