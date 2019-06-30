import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

// Servicio
import { OrganizacionService } from '../../../servicios/organizacion.service';

// Modelo
import { Organizacion } from '../../../modelos/organizacion';
import { ListadoComponent } from '../listado/listado.component';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.scss']
})
export class EdicionComponent implements OnInit {


  // Binding modulos e insercion en Firebase
  organizacionList: Organizacion[];
  editar = ListadoComponent;
  organizacionSeleccionada = null;
  organizacionForm = new FormGroup({
    '$key': new FormControl(),
    'nombre': new FormControl(),
    'capacitados': new FormControl(),
    'tipo': new FormControl(),
    'modulos': new FormControl(),
    'mpi': new FormControl(),
    'rup': new FormControl(),
    'top': new FormControl(),
    'citas': new FormControl(),
    'lat': new FormControl(),
    'lng': new FormControl()
  })
  searchTerm: string;

  constructor(private organizacionService: OrganizacionService) { }

  
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
