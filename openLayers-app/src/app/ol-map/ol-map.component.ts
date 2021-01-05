import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import {OSM, Vector as VectorSource} from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import {defaults as defaultInteractions, DragRotateAndZoom, Draw} from 'ol/interaction';
import {defaults as defaultControls, FullScreen} from 'ol/control';
import GeometryType from "ol/geom/GeometryType";

@Component({
  selector: 'app-ol-map',
  templateUrl: './ol-map.component.html',
  styleUrls: ['./ol-map.component.css']
})
export class OlMapComponent implements OnInit {
   map: Map | undefined;
   raster : TileLayer|undefined;
   source : VectorSource | undefined;
   vector : VectorLayer| undefined;

  constructor() { }

  ngOnInit(){
    this.initMap();
    // this.addInteraction();
  }

  initMap(){
      this.raster = new TileLayer({
        source: new OSM(),
      });

      this.source = new VectorSource({wrapX: false});

      this.vector = new VectorLayer({
        source: this.source,
      });
      this.map = new Map({
        controls: defaultControls().extend([new FullScreen()]),
        interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
        layers: [this.raster, this.vector],
        target: 'map',
        view: new View({
          center: [3891641, 3800000],
          zoom: 6,
        }),
      });

  }

  receiveSelectedType($event:any){
    let draw = new Draw({type:$event, source:this.source});
    this.map?.getInteractions().pop();
    this.map?.addInteraction(draw);
  }

}
