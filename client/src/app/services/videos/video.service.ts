import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
// import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(
  	 private http: Http
  	 ) { }

  // Get all video data
  getVideos(){
		return this.http.get("http://localhost:3000/pathJson").pipe(map(data=>
			data.json()
			,(error:any)=>{
				error.json()
			}));
	}

}
