import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snaps-model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent {
  constructor(private faceSnapsService: FaceSnapsService){}
  faceSnaps!: FaceSnap[];

   
  ngOnInit(){
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
  }

}
