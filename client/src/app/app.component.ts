import { Component,ViewContainerRef,ViewChild,ElementRef} from '@angular/core';
import { VideoService } from './services/videos/video.service';
import { Http  } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[VideoService]
})
export class AppComponent {
	@ViewChild('media')media: ElementRef;
	public videoArry = [];
	public currentVideo:string;
	constructor(
		private videoService : VideoService,
		 private _vcr : ViewContainerRef,
		 private elRef: ElementRef
		) { 
	}

	ngOnInit() {
		this.getVideoInfo()
	}

  getVideoInfo(){
     debugger;
		this.videoService.getVideos().subscribe((response)=>{
			this.videoArry=response;
		},error=>{
			console.log(error);
		})
	}
  dateFilter(videoUrl:string){
  	this.currentVideo=videoUrl;
  	const player = this.elRef.nativeElement.querySelector('video');
  	player.load();
  	player.autoplay();
  	this.media.nativeElement.click();
   console.log(videoUrl);
  }

//   getImage(id): Observable<string> {
//     return http.get(url/id);
// }
}
