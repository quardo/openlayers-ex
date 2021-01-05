import { Component, OnInit } from '@angular/core';
import {Control, defaults as defaultControls} from 'ol/control';

@Component({
  selector: 'app-custom-controls',
  templateUrl: './custom-controls.component.html',
  styleUrls: ['./custom-controls.component.css']
})

export class CustomControlsComponent implements OnInit {

  constructor() { }

  // onClick = () => { console.log('bla');};
  //
  // Bla = (opt_options: any) =>{
  //   var options = opt_options ||{};
  //   var button = document.createElement('button');
  //   button.innerHTML='N';
  //   button.addEventListener('click', this.onClick)
  // }

  ngOnInit(): void {
  }

}
