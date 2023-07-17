import { RestService } from './rest.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public allVuelos : any;
  public data : any;
  public salida: string = ""
  public llegada: string = ""
  miFormulario = new FormGroup({
  salida: new FormControl('', Validators.required),
  destino: new FormControl('', Validators.required)
  })
  
  constructor(private RestService:RestService) {
  
  }
   

  //data = Object.values(this.jsonRespuesta)
  ngOnInit() 
  {
    debugger;
  
    console.log("En este instante el componente ha cargado");
   

    this.RestService.get("http://localhost:4100/api/flights/GetAllWithAPi")
    .subscribe(respuesta=>{
     this.allVuelos = respuesta;

    })
  }

  buscarVuelo()
  {
    debugger;
  
    console.log("En este instante el componente ha cargado");
    console.log(this.llegada);

    this.RestService.get("http://localhost:4100/api/flights/GetByData?Origin="+this.salida.toUpperCase() +"&Destination="+this.llegada.toUpperCase())
    .subscribe(respuesta=>{
 
     this.data = respuesta

    })
  }
  
}




