import { storage } from 'firebase';

export class Organizacion {
    $key: string;
    nombre: string;
    tipo: string;
    modulos = [ 
        'MPI',
        'CITAS',
        'RUP',
        'TOP',
    ];
    ubicacion: string;
    zona: string;
    capacitados: number;
    mpi: boolean;
    citas: boolean;
    rup: boolean;
    top: boolean;
}
