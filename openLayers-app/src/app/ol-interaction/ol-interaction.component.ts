import {Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import GeometryType from "ol/geom/GeometryType";

@Component({
  selector: 'app-ol-interaction',
  templateUrl: './ol-interaction.component.html',
  styleUrls: ['./ol-interaction.component.css']
})
export class OlInteractionComponent implements OnInit,AfterViewInit {
  @Output() sendTypeSelected = new EventEmitter<GeometryType>();
  @ViewChild('GeometryType') typeSelect !: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() : void{
    this.addInteraction();
  }

  addInteraction() : void{
      const geometryType : GeometryType = GeometryType[this.typeSelect.nativeElement.value as keyof typeof GeometryType];
      this.sendTypeSelected.emit(geometryType);
      this.typeSelect.nativeElement.onchange = () =>{
      this.addInteraction();
    };
  }
}
