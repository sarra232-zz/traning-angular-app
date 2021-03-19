import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  age = 25;
  weight = 60;
  height = 170;
  sex = 'Male';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeHeight(event: any): void {
    this.height = event.target.value;
  }

  male(): void {
    this.sex = 'Male';
  }

  female(): void {
    this.sex = 'Female';
  }

  calculateBMI(): void {
    const BMI = this.weight / Math.pow(this.height / 100, 2);
    this.router.navigate(['/result', BMI.toFixed(1)]);
  }
}
