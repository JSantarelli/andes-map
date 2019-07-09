import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganizacionService } from '../../../servicios/organizacion.service';
import { Organizacion } from '../../../modelos/organizacion';

 
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  
  // Hardcoding
  mostrar = false;

  modulos = [ 'mpi' , 'citas' , 'rup' , 'top' ];

  hide() {
    this.mostrar = false;
  }

  show() {
    this.mostrar = true;
  }

  // Binding modulos e insercion en Firebase
  
  organizacionList: Organizacion[];
  searchTerm: string;

  constructor( 
    private organizacionService: OrganizacionService, 
    private router: Router,
    ) 
    { }

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
    this.router.navigate(['/edicion'])
  }

  verDetalle(organizacion: Organizacion) {
    this.organizacionService.selectedOrganizacion = Object.assign({},organizacion);
    this.router.navigate(['listado/:id' , { id: this.organizacionService.selectedOrganizacion.$key }]);
  }

  onDelete($key: string){
    var answer = confirm ('Desea eliminar este efector');
    console.log(answer);
    if (answer) {
      this.organizacionService.deleteOrganizacion($key);
    }
  }
  
}
