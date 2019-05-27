import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { PlayVideoComponent } from './play-video/play-video.component';

@NgModule({
	declarations: [
	AppComponent,
	PlayVideoComponent
	],
	imports: [
	BrowserModule,
	HttpModule,
	VgCoreModule,
	VgControlsModule,
	VgOverlayPlayModule,
	VgBufferingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
