import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Organizacion } from '../models/organizacion';


@Injectable()

export class OrganizacionService {

  organizacionList: AngularFireList<any>;
  selectedOrganizacion: Organizacion = new Organizacion();

  constructor(private firebase: AngularFireDatabase) { }

  getOrganizaciones()
  {
    return this.organizacionList = this.firebase.list('organizaciones');
  }

  insertOrganizacion(organizacion: Organizacion)
  {
    this.organizacionList.push( {
      nombre: organizacion.nombre,
      ubicacion: organizacion.ubicacion,
      capacitados: organizacion.capacitados,
      mpi: organizacion.mpi,
      citas: organizacion.citas,
      rup: organizacion.rup,
      top: organizacion.top
    });
  }

updateOrganizacion(organizacion: Organizacion) 
{
  this.organizacionList.update(
    organizacion.$key, {
      nombre: organizacion.nombre,
      ubicacion: organizacion.ubicacion,
      capacitados: organizacion.capacitados,
      mpi: organizacion.mpi,
      citas: organizacion.citas,
      rup: organizacion.rup,
      top: organizacion.top
        });
}

deleteOrganizacion($key: string)
{
  this.organizacionList.remove($key)
}

}
