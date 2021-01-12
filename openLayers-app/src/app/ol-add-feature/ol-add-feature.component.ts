import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GeoJSON} from "ol/format";
import {GetGeoJsonService} from "../get-geo-json.service";

@Component({
  selector: 'app-ol-add-feature',
  templateUrl: './ol-add-feature.component.html',
  styleUrls: ['./ol-add-feature.component.css']
})
export class OlAddFeatureComponent implements OnInit {
  @Output() loadGeoJson = new EventEmitter<GeoJSON>();
  @Output() delFeature = new EventEmitter();
  @Output() saveLayer = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  deleteFeature() : void {
    this.delFeature.emit();
  }
  layerSaver() : void {
    this.saveLayer.emit();
  }

  async geoJsonLoader(): Promise<void>{
    const geoJson = await GetGeoJsonService.getGeoJson();
    if(geoJson!=null){
      this.loadGeoJson.emit(geoJson);
    }
  }


}
