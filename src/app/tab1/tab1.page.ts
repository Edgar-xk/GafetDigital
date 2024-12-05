import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  formData = {
    name: '',
    id: '',
    accountType: '',
    esContrasena: false,
  };
  contrasena="";
  id="";
  status: string = 'active'; // Valor por defecto del estado
  onSubmit() {

    this.formData.esContrasena? this.formData.id=this.contrasena : this.id; 
    
    if (this.formData.name && this.formData.id && this.formData.accountType) {
      let identificaciones:Array<any>=JSON.parse(localStorage.getItem('Identificaciones')!);
      if(identificaciones!=null && identificaciones.length>0){
        identificaciones.push(this.formData);
        localStorage.setItem('Identificaciones', JSON.stringify(identificaciones));
       
      }else{
        let identificaciones:Array<any>=[this.formData];
        localStorage.setItem('Identificaciones', JSON.stringify(identificaciones));
      }
      this.formData={
        name: '',
        id: '',
        accountType: '',
        esContrasena: false,
      };
    } else {
      console.log('Por favor, complete todos los campos.');
    }
  }

}
