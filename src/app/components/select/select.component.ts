import { Component } from '@angular/core';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { Organizacion } from 'src/models/organizacion';

// Servicio
import { OrganizacionService } from '../../../services/organizacion.service';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  organizacionList: Organizacion[];

  modulos = [
    {name: 'Master Pacient Index', abbrev: 'MPI'},
    {name: 'Centro Inteligente de Turnos y Agendas de Salud', abbrev: 'CITAS'},
    {name: 'Registro Universal de Prestaciones', abbrev: 'RUP'},
    {name: 'Transito Ordenado de Pacientes', abbrev: 'TOP'},
    {name: 'Matriculaciones', abbrev: 'MAT'},
  ];
 
  form = new FormGroup({
    modulo: new FormControl(this.modulos[3]),
  });


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
