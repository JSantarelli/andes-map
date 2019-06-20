import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Servicio
import { OrganizacionService } from '../../../servicios/organizacion.service';

// Modelo
import { Organizacion } from '../../../modelos/organizacion';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  // Binding modulos e insercion en Firebase
  
  organizacionList: Organizacion[];

  searchTerm: string;

  
// Hardcoding
  mostrar = false;

  hide() {
    this.mostrar = false;
  }

  show() {
    this.mostrar = true;
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
    this.mostrar = true;

  }

  onDelete($key: string){
    var answer = confirm ('Desea eliminar este efector');
    console.log(answer);
    if (answer) {
      this.organizacionService.deleteOrganizacion($key);
    }
  }
  

}
