import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  bmi: number;
  interpretation: string;
  result: string;
  constructor(private route: ActivatedRoute) {
    this.result = '';
    this.interpretation= '';
    this.bmi = +route.snapshot.paramMap.get('value')!;
   }

  ngOnInit() {
    this.getResult();
  }

  getResult(): void {
    if( this.bmi >= 25 ){
      this.interpretation = 'Tienes que mejorar tu salud, estas en sobre peso';
      this.result = 'Obeso';
    } else if (this.bmi >= 18.5) {
      this.interpretation = 'Eres una saludable persona';
      this.result = 'Normal';
    } else {
      this.interpretation = 'Debes mejorar tu alimentación, estas debajo del peso adecuado';
      this.result = 'Bajo peso';
    }
  }

}
