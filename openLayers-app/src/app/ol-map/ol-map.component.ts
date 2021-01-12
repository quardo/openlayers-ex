import {Component, OnInit} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import {mapConfig} from '../../environments/environment';
import {OSM, Vector as VectorSource} from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import {defaults as defaultInteractions, DragRotateAndZoom, Draw, Select} from 'ol/interaction';
import {defaults as defaultControls, FullScreen} from 'ol/control';
import {GeoJSON} from "ol/format";
import {GetGeoJsonService} from "../get-geo-json.service";


@Component({
  selector: 'app-ol-map',
  templateUrl: './ol-map.component.html',
  styleUrls: ['./ol-map.component.css']
})
export class OlMapComponent implements OnInit {
   map: Map | undefined;
   raster : TileLayer = new TileLayer();
   source : VectorSource = new VectorSource();
   vector : VectorLayer = new VectorLayer();
   geoJson : GeoJSON = new GeoJSON();


  constructor() { }

  ngOnInit() : void{
    this.initMap();
  }

   initMap() : void{
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
  async saveLayer(){
    let feature = this.vector.getSource().getFeatures();
    let newForm = new GeoJSON();
    let featColl = newForm.writeFeaturesObject(feature);
    let geoJson=(JSON.stringify(featColl));
    await GetGeoJsonService.postGeoJson(geoJson);

  }

  popInteractions() : void{
    this.map?.getInteractions().pop();
  }
  receiveSelectedType($event:any):void{
    const draw = new Draw({type:$event, source:this.source});
    this.popInteractions();
    this.map?.addInteraction(draw);
  }

  receiveGeoJson($event:any): void{
    console.log($event);
    this.geoJson= $event;
    const features= new GeoJSON().readFeatures(this.geoJson, {dataProjection: mapConfig.dataProjection
      });
    this.source?.addFeatures(features);
  }

  deleteFeature() : void{
    this.popInteractions();
    const draw = new Select();
    draw.getFeatures().on('add', (feature) =>{
      this.source.removeFeature(feature.element)
      feature.target.remove(feature.element);
    });
    this.map?.addInteraction(draw);
  }

}
