import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss']
})
export class PianoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  applySound(num: number): void {
    const audio = new Audio();
    audio.src = '../assets/songs/note' + num + '.wav';
    audio.load();
    audio.play();
  }
}
