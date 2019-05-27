import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.css']
})
export class PlayVideoComponent implements OnInit {
  @Input() videoData: string;
  constructor() { }

  ngOnInit() {
  	
  }

}
