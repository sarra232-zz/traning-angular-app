import { ResultComponent } from './calculator/result/result.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PianoComponent } from './piano/piano.component';
import { HomeComponent } from './home/home.component';
import { ConvertCoinsComponent } from './convert-coins/convert-coins.component';
import { TaskComponent } from './task/task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DicesComponent } from './dices/dices.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shares/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { label: 'Home' } },
  { path: 'piano', component: PianoComponent },
  { path: 'dices', component: DicesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'task', component: TaskComponent },
  { path: 'coins', component: ConvertCoinsComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'result/:value', component: ResultComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
