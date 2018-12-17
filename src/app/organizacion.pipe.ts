import { Pipe, PipeTransform } from '@angular/core';
import { Organizacion } from 'src/models/organizacion';

@Pipe({
  name: 'organizacion'
})
export class OrganizacionPipe implements PipeTransform {

  transform(organizacionList: Organizacion[], searchTerm: string) {
    if (!organizacionList || !searchTerm) {
        return organizacionList;
    }

    return organizacionList.filter(Organizacion => Organizacion.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

  }

}
