import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import GeometryType from "ol/geom/GeometryType";

@Component({
  selector: 'app-ol-interaction',
  templateUrl: './ol-interaction.component.html',
  styleUrls: ['./ol-interaction.component.css']
})
export class OlInteractionComponent implements OnInit {
  @Output() sendTypeSelected = new EventEmitter<GeometryType>();
  constructor() { }

  ngOnInit(): void {
    this.addInteraction();
  }

  addInteraction(){
    let typeSelect = (<HTMLOptionElement>document.getElementById('type'));
    if(typeSelect.value!='None'){
      let geometryType : GeometryType = GeometryType[typeSelect.value as keyof typeof GeometryType];
      this.sendTypeSelected.emit(geometryType);
    }

    typeSelect.onchange = () =>{
      this.addInteraction();
    };
  }
}
