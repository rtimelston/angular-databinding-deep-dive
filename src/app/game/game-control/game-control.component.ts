import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() incrementer = new EventEmitter<{count: number}>();
  increment: number = 0;
  interval;

  constructor() { }

  ngOnInit(): void {
  }

  onGameStart(): void {
    console.log("Game starting");
    this.interval = setInterval(() => {
      this.incrementer.emit({count: this.increment++}, )
    }, 1000)
  }

  onGameStop(): void {
    clearInterval(this.interval);
  }

}
