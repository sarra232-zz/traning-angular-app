import { TableComponent } from './dashboard/table/table.component';
import { ListComponent } from './dashboard/list/list.component';
import { FooterComponent } from './shares/footer/footer.component';
import { NavbarComponent } from './shares/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PianoComponent } from './piano/piano.component';
import { DicesComponent } from './dices/dices.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { ConvertCoinsComponent } from './convert-coins/convert-coins.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
@NgModule({
  declarations: [		
    AppComponent, NavbarComponent, FooterComponent, PianoComponent,
      DicesComponent, DashboardComponent, ListComponent, TableComponent,
      TaskComponent,
      ConvertCoinsComponent,
      HomeComponent,
      CalculatorComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

