import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

// Servicio
import { OrganizacionService } from '../../../services/organizacion.service';

// Class Organizacion
import { Organizacion } from '../../../models/organizacion';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

// Componentes
import { SelectComponent } from '../select/select.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  // Binding modulos e insercion en Firebase
  
  organizacionList: Organizacion[];
  select = SelectComponent;

  searchTerm: string;


// Hardcoding
  mostrar = false;

  hide() {
    this.mostrar = !this.mostrar;
  }

  // Objetos
  efectores = [
    { 
      'nombre' : 'Hospital Heller',
      'fecha' : '15/04/2018',
      'tipo' : 'Hospital',
      'modulos' : [ 'rup' , 'citas' , 'mpi' , 'top' ],
      'zona' : 'metropolitana',
    },

    { 
      'nombre' : 'Progreso',
      'fecha' : '07/09/2017',
      'tipo' : 'Centro de Salud',
      'modulos' : [ 'mpi' , 'top' ],
      'zona' : 'tres',
    },

    { 
      'nombre' : 'Sapere',
      'fecha' : '25/01/2018',
      'tipo' : 'Sala de primeros auxilios',
      'modulos' : [ 'rup' , 'mpi' , 'top' ],
      'zona' : 'uno',
    }
  ]

  constructor( private organizacionService: OrganizacionService) { }

  ngOnInit() {

    // this.modulos = ['MPI' , 'RUP' , 'TOP'];

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

