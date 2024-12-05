import { Component } from '@angular/core';
import { Gafete } from '../Interfaces/gafete';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  identificaciones:Array<Gafete>=[];
  ngOnInit(){
    
    let identificaciones=JSON.parse(localStorage.getItem('Identificaciones')!);
    
    if(identificaciones!=null && identificaciones.length>0){
      this.identificaciones=identificaciones;
    }else{
      this.identificaciones=new Array<Gafete>();
    }
        
    console.log(this.identificaciones);
  }
  Seleccionar(index:any){
    console.log(this.identificaciones.indexOf(index).toString());
    localStorage.setItem('IdentificacionSelected', this.identificaciones.indexOf(index).toString());
  }
  Eliminar(index:any){
    this.identificaciones.splice(index,1);
    localStorage.setItem('Identificaciones', JSON.stringify(this.identificaciones));
    this.ngOnInit();
  }
  doRefresh(event: any) {
    setTimeout(() => {

      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }
}
