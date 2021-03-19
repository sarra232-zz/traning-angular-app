import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert-coins',
  templateUrl: './convert-coins.component.html',
  styleUrls: ['./convert-coins.component.scss']
})
export class ConvertCoinsComponent implements OnInit {

  amount = 0;
  have = 'USDOLAR';
  want = 'EURO';
  total = 0;
  coins: string[] = ['USDOLAR', 'EURO', 'LIBRA'];

  constructor() { }

  ngOnInit() {
  }

  convertCoin() {
    switch (this.have) {
      case 'USDOLAR':
        if (this.want === 'USDOLAR') {
          this.total = this.amount;
        }
        if (this.want === 'EURO') {
          this.total = this.amount * 0.84;
        }
        if (this.want === 'LIBRA') {
          this.total = this.amount * 0.75;
        }
        break;
      case 'EURO':
        if (this.want === 'USDOLAR') {
          this.total = this.amount * 1.20;
        }
        if (this.want === 'EURO') {
          this.total = this.amount;
        }
        if (this.want === 'LIBRA') {
          this.total = this.amount * 0.9;
        }
        break;
      case 'LIBRA':
        if (this.want === 'USDOLAR') {
          this.total = this.amount * 1.33;
        }
        if (this.want === 'EURO') {
          this.total = this.amount * 1.11;
        }
        if (this.want === 'LIBRA') {
          this.total = this.amount;
        }
        break;
    }
  }

}
