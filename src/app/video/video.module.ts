import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllVideosComponent} from './all-videos/all-videos.component';
import { ParticularVideoComponent } from './particular-video/particular-video.component';
import {RouterModule}from '@angular/router'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SearchVideoComponent } from './search-video/search-video.component';

@NgModule({
  declarations: [
    AllVideosComponent,
    ParticularVideoComponent,
    SearchVideoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  exports:[ParticularVideoComponent,
  AllVideosComponent,SearchVideoComponent]
})
export class VideoModule { }
