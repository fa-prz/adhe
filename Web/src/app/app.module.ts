import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { ToastService } from './services/toast.service';

import { AppComponent } from './app.component';
import { routing } from './app-routing.module';
import { ApiService } from './services/api.service';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    routing,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    ApiService,
    ToastService
  ],
  bootstrap: [AppComponent]
})
// @NgModule({
//   declarations: [
//     AppComponent,
//     DashboardComponent,
//     LoginComponent,
//   ],
//   imports: [
//     HttpModule,
//     HttpClientModule,
//     FormsModule,
//     CommonModule,
//     BrowserAnimationsModule,
//     BrowserModule,
//     ReactiveFormsModule,
//     ToastrModule.forRoot()
//   ],
//   providers: [
//     ToastService
//   ],
//   bootstrap: [AppComponent]
// })
export class AppModule { }
