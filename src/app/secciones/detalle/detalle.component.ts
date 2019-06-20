import { Component, OnInit } from '@angular/core';
import { OrganizacionService } from 'src/servicios/organizacion.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  organizaciones:any[] = [];

  constructor(private organizacionService:OrganizacionService) { 
    this.organizaciones = organizacionService.getDetalle();
  }
  

  ngOnInit() {
  }

}
