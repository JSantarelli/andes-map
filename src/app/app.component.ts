import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss'],
//   template:`

//   <h3>Property Binding</h3>
//   <img src="{{ angularLogo }}">
//   <img [src]="angularLogo">
//   <img bind-src="angularLogo">

//   <button [disabled]="buttonStatus">Property binding</button>
//   <button [disabled]="estadoBoton == 'enabled'">Property binding</button>

//   <h3>Event Binding</h3>
//   <button (click)="myEvent($event)">Event Binding</button>

//   <h2 [style.color]="styleCondicional ? 'green' : 'pink'">{{ title }}</h2>
//   <h2 [ngStyle]="styleCondicion">{{ title }}</h2>
//   <h2 [style.color]="titleStyle">{{ title }}</h2>

//   <h1 [ngClass]="titleClasses">Aprendiendo ngClass</h1>
//   <h3 [class]="success">Texto Verde binding</h3>
//   <h3 class="success">Texto verde con clase css</h3>
//   <h3 [class]="success" class="italic">Texto verde con ambos metodos</h3>
//   <h3 [class.error]="error">Texto verde con condicion</h3>
//   <h3 [ngClass]="mensajes">Texto con ngClass</h3>
//   `,
// styles: [`

// h1 {

//   text-decoration: underline;
  
// }

// .italic {
//   font-style: italic;
// }

// .red-title {
//   color: crimson;
// } 

// .large-title {
//   font-size: 3rem;
// }


// .success {
//   color: green;
// }

// .error {
//   color: red;
// }

// .warning {
//   color: orange;
// }

// `]
})

// color de los mensajes



export class AppComponent {
  title = 'andes-map';
  titleStyle = 'red';

  // Property binding
  buttonStatus = false;
  estadoBoton = 'enabled';

  // Style binding
  styleCondicional = true;
  styleCondicion = {
    'color' : 'green',
    'text-transform' : 'uppercase',
  }

  // Class binding methods 
  public name = "Codigo";
  public success = "success";
  public error = true;
  public italic = true;
  
  // Reglas
  public mensajes = {
    "success": !this.error,
    "error": this.error,
    "italic": this.italic,
  }

  // Class binding
  titleClass = false;
  titleClasses = {
    'red-title': true,
    'large-title' : true,

  }

  myEvent(event) {
    alert('event')
  }

}
