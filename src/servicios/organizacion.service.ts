import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Organizacion } from '../modelos/organizacion';
import { Router } from '@angular/router';

@Injectable()

export class OrganizacionService { private router: Router


  ubicaciones: any[] = [
      {
        id: 580147,
        nombre: 'Huinganco',
        lat: -37.1604681,
        lng: -70.6314227
      },
      {
        id: 580210,
        nombre: 'Rincón de los Sauces',
        lat: -37.396749,
        lng: -68.9470692
      },
      {
        id: 580238,
        nombre: 'Mariano Moreno',
        lat: -38.7628129,
        lng: -70.0471431
      },
      {
        id: 585112,
        nombre: 'El Sauce',
        lat: -38.9377202,
        lng: -68.0837026
      },
      {
        id: 580042,
        nombre: 'Centenario'
      },
      {
        id: 580063,
        nombre: 'Plaza Huincul'
      },
      {
        id: 580105,
        nombre: 'Tricao Malal'
      },
      {
        id: 585028,
        nombre: 'Pilo Lil'
      },
      {
        id: 585063,
        nombre: 'Chorriaca'
      },
      {
        id: 585049,
        nombre: 'Coyuco-Cochico'
      },
      {
        id: 585126,
        nombre: 'Quili Malal'
      },
      {
        id: 580070,
        nombre: 'Plottier'
      },
      {
        id: 580084,
        nombre: 'Villa el Chocón'
      },
      {
        id: 580112,
        nombre: 'Junín de los  Andes'
      },
      {
        id: 580140,
        nombre: 'Andacollo'
      },
      {
        id: 580154,
        nombre: 'Las Ovejas'
      },
      {
        id: 585014,
        nombre: 'Aguada San Roque'
      },
      {
        id: 585042,
        nombre: 'Sauzal Bonito'
      },
      {
        id: 585077,
        nombre: 'Guañacos'
      },
      {
        id: 585084,
        nombre: 'Manzano Amargo'
      },
      {
        id: 585147,
        nombre: 'Ramón Castro'
      },
      {
        id: 585154,
        nombre: 'Villa del  Puente Picún Leufú'
      },
      {
        id: 580007,
        nombre: 'Aluminé'
      },
      {
        id: 580028,
        nombre: 'Las Coloradas'
      },
      {
        id: 580077,
        nombre: 'Senillosa'
      },
      {
        id: 580126,
        nombre: 'Loncopué'
      },
      {
        id: 580168,
        nombre: 'Caviahue-Copahue'
      },
      {
        id: 580189,
        nombre: 'Taquimilán'
      },
      {
        id: 580203,
        nombre: 'Buta Ranquil'
      },
      {
        id: 580217,
        nombre: 'Picún Leufú'
      },
      {
        id: 580245,
        nombre: 'Zapala'
      },
      {
        id: 585070,
        nombre: 'Villa Traful'
      },
      {
        id: 585091,
        nombre: 'Varvarco - Invernada Vieja'
      },
      {
        id: 585098,
        nombre: 'Villa del  Nahueve'
      },
      {
        id: 585119,
        nombre: 'Paso Aguerre'
      },
      {
        id: 589999,
        nombre: 'Villa Lago Meliquina'
      },
      {
        id: 580014,
        nombre: 'Añelo'
      },
      {
        id: 580021,
        nombre: 'San Patricio del  Chañar'
      },
      {
        id: 580035,
        nombre: 'Piedra del  Águila'
      },
      {
        id: 580091,
        nombre: 'Vista Alegre'
      },
      {
        id: 580098,
        nombre: 'Chos Malal'
      },
      {
        id: 580119,
        nombre: 'San Martín de los  Andes'
      },
      {
        id: 580133,
        nombre: 'Villa la Angostura'
      },
      {
        id: 580161,
        nombre: 'Los Miches'
      },
      {
        id: 580175,
        nombre: 'El Cholar'
      },
      {
        id: 580182,
        nombre: 'El Huecú'
      },
      {
        id: 580224,
        nombre: 'Bajada del  Agrio'
      },
      {
        id: 580196,
        nombre: 'Barrancas'
      },
      {
        id: 580231,
        nombre: 'Las Lajas'
      },
      {
        id: 580252,
        nombre: 'Villa Pehuenia'
      },
      {
        id: 585035,
        nombre: 'Santo Tomás'
      },
      {
        id: 585056,
        nombre: 'Villa Curi Leuvú'
      },
      {
        id: 585105,
        nombre: 'Octavio Pico'
      },
      {
        id: 585133,
        nombre: 'Covunco Abajo'
      },
      {
        id: 585140,
        nombre: 'Los Catutos'
      },
      {
        id: 585021,
        nombre: 'Los Chihuidos'
      },
      {
        id: 580049,
        nombre: 'Cutral Có'
      },
      {
        id: 580056,
        nombre: 'Neuquén'
      }
    ];

  organizacionList: AngularFireList<any>;
  selectedOrganizacion: Organizacion = new Organizacion();
  organizaciones: any[] = [
    {
      nombre: 'Heller',
    }
  
  ];

  constructor(private firebase: AngularFireDatabase) { 
    console.log('el servicio funciona correctamente')
  }

    getUbicaciones(){
      return this.ubicaciones;
    }

    getDetalle() {
      return this.organizaciones;
    }

    getOrganizaciones()
    {
      return this.organizacionList = this.firebase.list('organizaciones');
    }

    insertOrganizacion(organizacion: Organizacion)
    {
      this.organizacionList.push( {
        nombre: organizacion.nombre,
        ubicacion: organizacion.ubicacion,
        lat: organizacion.lat,
        lng: organizacion.lng,
        tipo: organizacion.tipo,
        capacitados: organizacion.capacitados,
        mpi: organizacion.mpi,
        rup: organizacion.rup,
        citas: organizacion.citas,
        top: organizacion.top
      });
    }

  updateOrganizacion(organizacion: Organizacion) 
  {
    this.organizacionList.update(
      organizacion.$key, {
        nombre: organizacion.nombre,
        ubicacion: organizacion.ubicacion,
        lat: organizacion.lat,
        lng: organizacion.lng,
        tipo: organizacion.tipo,
        capacitados: organizacion.capacitados,
        mpi: organizacion.mpi,
        rup: organizacion.rup,
        citas: organizacion.citas,
        top: organizacion.top
      });
  }
  

  deleteOrganizacion($key: string)
  {
    this.organizacionList.remove($key)
  }

}
