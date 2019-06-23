import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from "../environments/environment";
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './secciones/inicio/inicio.component';
import { ListadoComponent } from './secciones/listado/listado.component';
import { DetalleComponent } from './secciones/detalle/detalle.component';
import { EdicionComponent } from './secciones/edicion/edicion.component';
import { LoginComponent } from './secciones/login/login.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { FrisoComponent } from './componentes/friso/friso.component';
import { ItemComponent } from './componentes/lista/item/item.component';

// Pipe & Servicios
import { OrganizacionPipe } from '../pipes/organizacion.pipe';
import { OrganizacionService } from '../servicios/organizacion.service';
import { SelectComponent } from './componentes/select/select.component';
import { CheckboxComponent } from './componentes/checkbox/checkbox.component'

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListadoComponent,
    DetalleComponent,
    EdicionComponent,
    LoginComponent,
    ListaComponent,
    MapaComponent,
    FrisoComponent,
    ItemComponent,
    OrganizacionPipe,
    SelectComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [
    OrganizacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
