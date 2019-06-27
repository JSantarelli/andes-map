import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './secciones/listado/listado.component';
import { InicioComponent } from './secciones/inicio/inicio.component';
import { EdicionComponent } from './secciones/edicion/edicion.component';
import { ItemComponent } from './componentes/lista/item/item.component';
import { DetalleComponent } from './secciones/detalle/detalle.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'inicio' , component: InicioComponent , 
    children: [
      { path: 'zonaSeleccionada' , component: ItemComponent }
    ] },
  { path: 'edicion' , component: EdicionComponent },
  { path: 'listado' , component: ListadoComponent },
  { path: 'listado/:id' , component: DetalleComponent },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes) , RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
