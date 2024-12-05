import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  id: string = '';
  nombre: string = '';
  tipoCuenta: string = '';
  data:string = '';
  esContrasena=false;
  constructor() {}

ngOnInit(){
    
    let identificaciones=JSON.parse(localStorage.getItem('Identificaciones')!);
    let index=localStorage.getItem('IdentificacionSelected');
    if(identificaciones!=null && identificaciones.length>0 ){
      console.log(index);
      console.log(identificaciones);
      if(index!=null){
        let index1=Number.parseInt(index);
        this.id=identificaciones[index1].id;
        this.nombre=identificaciones[index1].name;
        this.tipoCuenta=identificaciones[index1].accountType;
       this.data=identificaciones[index1].id;
       this.esContrasena=identificaciones[index1].esContrasena;
      }else{
        this.id=identificaciones[0].id;
        this.nombre=identificaciones[0].name;
        this.tipoCuenta=identificaciones[0].accountType;
       this.data=identificaciones[0].id;
       this.esContrasena=identificaciones[0].esContrasena;
      }
        
        
    }else{
     
    }
        
    
  }
  doRefresh(event: any) {
    setTimeout(() => {

      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }
}
