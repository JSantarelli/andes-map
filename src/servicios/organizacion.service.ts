import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Organizacion } from '../modelos/organizacion';
import { Router } from '@angular/router';

@Injectable()

export class OrganizacionService { private router: Router


  efectores: any[] = [
      {
        id: 580147,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Huinganco',
        lat: -37.1604681,
        lng: -70.6314227,
      },
      {
        id: 580210,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Rincón de los Sauces',
        lat: -37.396749,
        lng: -68.9470692,
      },
      {
        id: 580238,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Mariano Moreno',
        lat: -38.7628129,
        lng: -70.0471431,
      },
      {
        id: 585112,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'El Sauce',
        lat: -38.9377202,
        lng: -68.0837026,
      },
      {
        id: 580042,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Centenario',
        lat: -38.8302238,
        lng: -68.1741028,
      },
      {
        id: 580063,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Plaza Huincul',
        lat: -38.9340204,
        lng: -69.2265045,
      },
      {
        id: 580105,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Tricao Malal',
        lat: -38.130763669743,
        lng: -70.6070114096582,
      },
      {
        id: 585028,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Pilo Lil',
        lat: -38.6166812663412,
        lng: -69.6916428096758,
      },
      {
        id: 585063,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Chorriaca',
        lat: -36.6887545268274,
        lng: -70.8071507874932,
      },
      {
        id: 585049,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Coyuco-Cochico',
        lat: -37.9738679914896,
        lng: -68.9371469809988,
      },
      {
        id: 585126,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Quili Malal',
        lat: -37.2421306229288,
        lng: -69.8210409111221,
      },
      {
        id: 580070,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Plottier',
        lat: -37.8563623456879,
        lng: -71.0450198744787,
      },
      {
        id: 580084,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Villa el Chocón',
        lat: -27.2531814207832,
        lng: -55.3680377708939,
      },
      {
        id: 580112,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Junín de los  Andes',
        lat: -38.7687927342046,
        lng: -70.0160273047475,
      },
      {
        id: 580140,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Andacollo',
        lat: -37.0165803312123,
        lng: -70.9189370546609,
      },
      {
        id: 580154,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Las Ovejas',
        lat: -39.3365722197045,
        lng: -69.7956444882818,
      },
      {
        id: 585014,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Aguada San Roque',
        lat: -39.207608881814,
        lng: -70.0822342331812,
      },
      {
        id: 585042,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Sauzal Bonito',
        lat: -39.6260254161966,
        lng: -70.898029831876,
      },
      {
        id: 585077,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Guañacos',
        lat: -31.5330748483572,
        lng: -68.5342856277406,
      },
      {
        id: 585084,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Manzano Amargo',
        lat: -36.7933760258872,
        lng: -70.5962736544536,
      },
      {
        id: 585147,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Ramón Castro',
        lat: -38.0504241884088,
        lng: -69.5338451224223,
      },
      {
        id: 585154,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Villa del Puente Picún Leufú',
        lat: -37.9190485298909,
        lng: -70.0460883788548,
      },
      {
        id: 580007,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Aluminé',
        lat: -39.9210969926669,
        lng: -71.0997656206867,
      },
      {
        id: 580028,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Las Coloradas',
        lat: -39.5272959346432,
        lng: -69.3041340199497,
      },
      {
        id: 580077,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Senillosa',
        lat: -38.9328385901676,
        lng: -70.1432085906335,
      },
      {
        id: 580126,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Loncopué',
        lat: -37.6497782492439,
        lng: -70.5833484817915,
      },
      {
        id: 580168,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Caviahue-Copahue',
        lat: -40.6716922374749,
        lng: -71.3996881541689,
      },
      {
        id: 580189,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Taquimilán',
        lat: -37.4558329459089,
        lng: -70.6873431812617,
      },
      {
        id: 580203,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Buta Ranquil',
        lat: -37.6310256208455,
        lng: -68.3594661614186,
      },
      {
        id: 580217,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Picún Leufú',
        lat: -39.4816153694996,
        lng: -69.5258646816178,
      },
      {
        id: 580245,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Zapala',
        lat: -38.5447244406764,
        lng: -70.3064166225065,
      },
      {
        id: 585070,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Villa Traful',
        lat: -38.9071357687471,
        lng: -71.1785013312736,
      }, 
      {
        id: 585091,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Varvarco - Invernada Vieja',
        lat: -37.1709436645892,
        lng: -70.4296686921956,
      },
      {
        id: 585098,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Villa del Nahueve',
        lat: -40.0556599804128,
        lng: -70.0814261575928,
      },
      {
        id: 585119,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Paso Aguerre',
        lat: -27.880944092613,
        lng: -61.5412578288586,
      },
      {
        id: 589999,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Villa Lago Meliquina',
        lat: -40.3591609,
        lng: -71.3364084,
      },
      {
        id: 580014,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Añelo',
        lat: -40.3691065,
        lng: -71.3488732,
      },
      {
        id: 580021,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'San Patricio del Chañar',
        lat: -27.2933473519193,
        lng: -55.4592623960159,
      },
      {
        id: 580035,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Piedra del Águila',
        lat: -39.25636888483,
        lng: -68.8408718852915,
      },
      {
        id: 580091,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Vista Alegre',
        lat: -38.9486355466446,
        lng: -68.2772667713434,
      },
      {
        id: 580098,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Chos Malal',
        lat: -38.4056776856649,
        lng: -70.0310159232412,
      },
      {
        id: 580119,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'San Martín de los Andes',
        lat: -38.5628864544464,
        lng: -69.0137527772465,
      },
      {
        id: 580133,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Villa la Angostura',
        lat: -36.8419567404506,
        lng: -70.9180527399826,
      },
      {
        id: 580161,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Los Miches',
        lat: -39.8409265275249,
        lng: -70.0938182756884,
      },
      {
        id: 580175,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'El Cholar',
        lat: -37.2626267236257,
        lng: -70.612978711671,
      },
      {
        id: 580182,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'El Huecú',
        lat: -37.1472111349999,
        lng: -70.9641103407799,
      },
      {
        id: 580224,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Bajada del Agrio',
        lat: -37.5910001035078,
        lng: -70.3458343954121,
      },
      {
        id: 580196,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Barrancas',
        lat: -36.8213438,
        lng: -69.9261143,
      },
      {
        id: 580231,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Las Lajas',
        lat: -38.3598393457539,
        lng: -68.805219197613,
      },
      {
        id: 580252,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Villa Pehuenia',
        lat: -38.9122912366411,
        lng: -68.6767926458881,
      },
      {
        id: 585035,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Santo Tomás',
        lat: -39.8222708,
        lng: -70.1054033,
      },
      {
        id: 585056,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Villa Curi Leuvú',
        lat: -37.3551399423083,
        lng: -70.2702475118703,
      },
      {
        id: 585105,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Octavio Pico',
        lat: -37.4279286578832,
        lng: -68.904881950857,
      },
      {
        id: 585133,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Covunco Abajo',
        lat: -38.9693906408624,
        lng: -69.7563648428793,
      },
      {
        id: 585140,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Los Catutos',
        lat: -36.5418089920472,
        lng: -70.2492773646575,
      },
      {
        id: 585021,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Los Chihuidos',
        lat: -37.0638452103236,
        lng: -70.5999829263709,
      },
      {
        id: 580049,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Cutral Có',
        lat: -37.109945873389,
        lng: -56.8696753983418,
      },
      {
        id: 580056,
        nombre: '',
        tipo: 'Centro de Salud',
        municipio: 'Neuquén',
        lat: -39.2342734029443,
        lng:-70.9120954468479,
      }
    ];

    modulos: any[] = [
      { nombre: 'Indice Maestro de Paciente', iniciales: 'mpi', icono: 'credencial-paciente' , color: 'colorMpi' },
      { nombre: 'Reegistro Universal de Prestaciones', iniciales: 'rup', icono: 'documento-cursor' , color: 'colorRup'},
      { nombre: 'Centro Inteligente de Turnos y Agendas de Salud', iniciales: 'citas', icono: 'turno-tilde' , color: 'colorCitas' },
      { nombre: 'Transito Ordenado de Pacientes', iniciales: 'top', icono: 'paciente-flecha' , color: 'colorTop'},
      { nombre: 'Historia Unica De Salud', iniciales: 'huds', icono: 'historial' , color: 'colorHuds' },
      { nombre: 'Mapa Asistencial de Salud', iniciales: 'inter', icono: 'cama-paciente' , color: 'colorInter' },
      { nombre: 'Prestamo de Carpetas de Salud', iniciales: 'carpet', icono: 'documento-paciente' , color: 'colorCarpet' },
      { nombre: 'Sistema Integral de Laboratorios', iniciales: 'lab', icono: 'recipiente' , color: 'colorLab' },
      { nombre: 'Sistema Integral de Reportes', iniciales: 'repo', icono: 'documento-tilde' , color: 'colorRepo' },
      { nombre: 'Aplicacion Para la Salud', iniciales: 'app', icono: 'celular' , color: 'colorApp' },
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

    getEfectores(){
      return this.efectores;
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
        efector: organizacion.efector,
        fecha: organizacion.fecha,
        capacitados: organizacion.capacitados,
        nota: organizacion.nota,
        mpi: organizacion.mpi,
        rup: organizacion.rup,
        citas: organizacion.citas,
        top: organizacion.top,
        huds: organizacion.huds,
        inter: organizacion.inter,
        carpet: organizacion.carpet,
        lab: organizacion.lab,
        repo: organizacion.repo,
        app: organizacion.app
      });
    }

  updateOrganizacion(organizacion: Organizacion) 
  {
    this.organizacionList.update(
      organizacion.$key, {
        efector: organizacion.efector,
        fecha: organizacion.fecha,
        capacitados: organizacion.capacitados,
        nota: organizacion.nota,
        mpi: organizacion.mpi,
        rup: organizacion.rup,
        citas: organizacion.citas,
        top: organizacion.top,
        huds: organizacion.huds,
        inter: organizacion.inter,
        carpet: organizacion.carpet,
        lab: organizacion.lab,
        repo: organizacion.repo,
        app: organizacion.app
      });
  }
  

  deleteOrganizacion($key: string)
  {
    this.organizacionList.remove($key)
  }

}