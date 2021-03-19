import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.scss']
})
export class DicesComponent implements OnInit {

  leftDice = '../../assets/img/dice2.png';
  rightDice = '../../assets/img/dice1.png';
  numberDice1 = 2;
  numberDice2 = 1;
  constructor() { }

  ngOnInit() {
  }

  ramdomsDices(): void {
    this.numberDice1 = Math.round(Math.random() * 5) + 1;
    this.numberDice2 = Math.round(Math.random() * 5) + 1;
    this.leftDice = '../../assets/img/dice' + this.numberDice1 + '.png';
    this.rightDice = '../../assets/img/dice' + this.numberDice2 + '.png';
  }

}
