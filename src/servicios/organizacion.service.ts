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
        nombre: 'Centenario',
        lat: -38.8302238,
        lng: -68.1741028
      },
      {
        id: 580063,
        nombre: 'Plaza Huincul',
        lat: -38.9340204,
        lng: -69.2265045
      },
      {
        id: 580105,
        nombre: 'Tricao Malal',
        lat: -38.130763669743,
        lng: -70.6070114096582
      },
      {
        id: 585028,
        nombre: 'Pilo Lil',
        lat: -38.6166812663412,
        lng: -69.6916428096758
      },
      {
        id: 585063,
        nombre: 'Chorriaca',
        lat: -36.6887545268274,
        lng: -70.8071507874932
      },
      {
        id: 585049,
        nombre: 'Coyuco-Cochico',
        lat: -37.9738679914896,
        lng: -68.9371469809988
      },
      {
        id: 585126,
        nombre: 'Quili Malal',
        lat: -37.2421306229288,
        lng: -69.8210409111221
      },
      {
        id: 580070,
        nombre: 'Plottier',
        lat: -37.8563623456879,
        lng: -71.0450198744787
      },
      {
        id: 580084,
        nombre: 'Villa el Chocón',
        lat: -27.2531814207832,
        lng: -55.3680377708939
      },
      {
        id: 580112,
        nombre: 'Junín de los  Andes',
        lat: -38.7687927342046,
        lng: -70.0160273047475
      },
      {
        id: 580140,
        nombre: 'Andacollo',
        lat: -37.0165803312123,
        lng: -70.9189370546609
      },
      {
        id: 580154,
        nombre: 'Las Ovejas',
        lat: -39.3365722197045,
        lng: -69.7956444882818
      },
      {
        id: 585014,
        nombre: 'Aguada San Roque',
        lat: -39.207608881814,
        lng: -70.0822342331812
      },
      {
        id: 585042,
        nombre: 'Sauzal Bonito',
        lat: -39.6260254161966,
        lng: -70.898029831876
      },
      {
        id: 585077,
        nombre: 'Guañacos',
        lat: -31.5330748483572,
        lng: -68.5342856277406
      },
      {
        id: 585084,
        nombre: 'Manzano Amargo',
        lat: -36.7933760258872,
        lng: -70.5962736544536
      },
      {
        id: 585147,
        nombre: 'Ramón Castro',
        lat: -38.0504241884088,
        lng: -69.5338451224223
      },
      {
        id: 585154,
        nombre: 'Villa del Puente Picún Leufú',
        lat: -37.9190485298909,
        lng: -70.0460883788548
      },
      {
        id: 580007,
        nombre: 'Aluminé',
        lat: -39.9210969926669,
        lng: -71.0997656206867
      },
      {
        id: 580028,
        nombre: 'Las Coloradas',
        lat: -39.5272959346432,
        lng: -69.3041340199497
      },
      {
        id: 580077,
        nombre: 'Senillosa',
        lat: -38.9328385901676,
        lng: -70.1432085906335
      },
      {
        id: 580126,
        nombre: 'Loncopué',
        lat: -37.6497782492439,
        lng: -70.5833484817915
      },
      {
        id: 580168,
        nombre: 'Caviahue-Copahue',
        lat: -40.6716922374749,
        lng: -71.3996881541689
      },
      {
        id: 580189,
        nombre: 'Taquimilán',
        lat: -37.4558329459089,
        lng: -70.6873431812617
      },
      {
        id: 580203,
        nombre: 'Buta Ranquil',
        lat: -37.6310256208455,
        lng: -68.3594661614186
      },
      {
        id: 580217,
        nombre: 'Picún Leufú',
        lat: -39.4816153694996,
        lng: -69.5258646816178
      },
      {
        id: 580245,
        nombre: 'Zapala',
        lat: -38.5447244406764,
        lng: -70.3064166225065
      },
      {
        id: 585070,
        nombre: 'Villa Traful',
        lat: -38.9071357687471,
        lng: -71.1785013312736
      }, 
      {
        id: 585091,
        nombre: 'Varvarco - Invernada Vieja',
        lat: -37.1709436645892,
        lng: -70.4296686921956
      },
      {
        id: 585098,
        nombre: 'Villa del Nahueve',
        lat: -40.0556599804128,
        lng: -70.0814261575928
      },
      {
        id: 585119,
        nombre: 'Paso Aguerre',
        lat: -27.880944092613,
        lng: -61.5412578288586
      },
      {
        id: 589999,
        nombre: 'Villa Lago Meliquina',
        lat: -40.3591609,
        lng: -71.3364084
      },
      {
        id: 580014,
        nombre: 'Añelo',
        lat: -40.3691065,
        lng: -71.3488732
      },
      {
        id: 580021,
        nombre: 'San Patricio del Chañar',
        lat: -27.2933473519193,
        lng: -55.4592623960159
      },
      {
        id: 580035,
        nombre: 'Piedra del Águila',
        lat: -39.25636888483,
        lng: -68.8408718852915
      },
      {
        id: 580091,
        nombre: 'Vista Alegre',
        lat: -38.9486355466446,
        lng: -68.2772667713434
      },
      {
        id: 580098,
        nombre: 'Chos Malal',
        lat: -38.4056776856649,
        lng: -70.0310159232412
      },
      {
        id: 580119,
        nombre: 'San Martín de los Andes',
        lat: -38.5628864544464,
        lng: -69.0137527772465
      },
      {
        id: 580133,
        nombre: 'Villa la Angostura',
        lat: -36.8419567404506,
        lng: -70.9180527399826
      },
      {
        id: 580161,
        nombre: 'Los Miches',
        lat: -39.8409265275249,
        lng: -70.0938182756884
      },
      {
        id: 580175,
        nombre: 'El Cholar',
        lat: -37.2626267236257,
        lng: -70.612978711671
      },
      {
        id: 580182,
        nombre: 'El Huecú',
        lat: -37.1472111349999,
        lng: -70.9641103407799
      },
      {
        id: 580224,
        nombre: 'Bajada del Agrio',
        lat: -37.5910001035078,
        lng: -70.3458343954121
      },
      {
        id: 580196,
        nombre: 'Barrancas',
        lat: -36.8213438,
        lng: -69.9261143
      },
      {
        id: 580231,
        nombre: 'Las Lajas',
        lat: -38.3598393457539,
        lng: -68.805219197613
      },
      {
        id: 580252,
        nombre: 'Villa Pehuenia',
        lat: -38.9122912366411,
        lng: -68.6767926458881
      },
      {
        id: 585035,
        nombre: 'Santo Tomás',
        lat: -39.8222708,
        lng: -70.1054033
      },
      {
        id: 585056,
        nombre: 'Villa Curi Leuvú',
        lat: -37.3551399423083,
        lng: -70.2702475118703
      },
      {
        id: 585105,
        nombre: 'Octavio Pico',
        lat: -37.4279286578832,
        lng: -68.904881950857
      },
      {
        id: 585133,
        nombre: 'Covunco Abajo',
        lat: -38.9693906408624,
        lng: -69.7563648428793
      },
      {
        id: 585140,
        nombre: 'Los Catutos',
        lat: -36.5418089920472,
        lng: -70.2492773646575
      },
      {
        id: 585021,
        nombre: 'Los Chihuidos',
        lat: -37.0638452103236,
        lng: -70.5999829263709
      },
      {
        id: 580049,
        nombre: 'Cutral Có',
        lat: -37.109945873389,
        lng: -56.8696753983418
      },
      {
        id: 580056,
        nombre: 'Neuquén',
        lat: -39.2342734029443,
        lng:-70.9120954468479
      }
    ];

    modulos = [
      { nombre: 'Indice Maestro de Paciente', iniciales: 'mpi' },
      { nombre: 'Reegistro Universal de Prestaciones', iniciales: 'rup' },
      { nombre: 'Centro Inteligente de Turnos y Agendas de Salud', iniciales: 'citas' },
      { nombre: 'Transito Ordenado de Pacientes', iniciales: 'top' },
      { nombre: 'Historia Unica De Salud', iniciales: 'huds' },
      { nombre: 'Mapa Asistencial de Salud', iniciales: 'mas' },
      { nombre: 'Prestamo de Carpetas de Salud', iniciales: 'pres' },
      { nombre: 'Sistema Integral de Laboratorios', iniciales: 'silab' },
      { nombre: 'Sistema Integral de Reportes', iniciales: 'sir' },
      { nombre: 'Aplicacion Para la Salud', iniciales: 'aps' },
    ]

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

    getModulos(){
      return this.modulos;
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
        modulo: organizacion.modulo,
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
        modulo: organizacion.modulo,
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
