import { Injectable } from '@angular/core';
import {JsonObject} from "@angular/compiler-cli/ngcc/src/packages/entry_point";
import axios from "axios";
import {mapApiUrl} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GetGeoJsonService {
  constructor() { }


  static getGeoJson = async () => {
    try{
      const response = await axios.get(mapApiUrl.getGeoJson+'geojson1');
      return response.data;
    }
    catch(err){
      console.log("An error occured. Check either the backend API is UP !");
      return null;
    }
  }
  static postGeoJson = async (geoJson : string) =>{
    try{
      await axios({
        method: 'post',
        url: mapApiUrl.getGeoJson+'geojson1',
        headers: { 'accept': 'application/json' },
        data: {geoJson}
      });
    }
    catch(err){
      console.log("An error occured. Check either the backend API is UP !");
    }

    }

}
