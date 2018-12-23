import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from "../environments/environment";

// Mapa
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

// Componentes
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { ListHeaderComponent } from './components/list/list-header/list-header.component';
import { ListEditarComponent } from './components/list/list-editar/list-editar.component';

import { SelectComponent } from './components/select/select.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

// Pipe y servicios
import { OrganizacionService } from 'src/services/organizacion.service';
import { OrganizacionPipe } from './organizacion.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ListComponent,
    ListItemComponent,
    ListHeaderComponent,
    ListEditarComponent,
    SelectComponent,
    OrganizacionPipe,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyC6SaAn0y1YOH4dnXtJIvwlK0D9SnSudPw'}), 
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
    
  providers: [
    GoogleMapsAPIWrapper,
    OrganizacionService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
