/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  name: string = '';

  usuario = {
    email: '',
    pass:''
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any){
    console.log('submit');
    if(form.valid){
      alert('Formulario subido');
    }
  }

}
