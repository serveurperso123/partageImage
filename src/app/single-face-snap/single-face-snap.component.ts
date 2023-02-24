import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snaps-model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})


export class SingleFaceSnapComponent {

  constructor(private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute){}
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  
  ngOnInit(){
  this.buttonText = 'Oh Snap!';
  const snapId = +this.route.snapshot.params['id'];
  this.faceSnap = this.faceSnapService.getFaceSnapById(snapId);
  }
 
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap')
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
      this.buttonText = 'Oh Snap!';
    }
  }
}
