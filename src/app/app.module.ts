import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from './register/register.component';
import { MatRadioModule } from '@angular/material/radio';
import { ToastrModule } from 'ngx-toastr';

import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatFormFieldModule,
    // MatCardModule,
    ReactiveFormsModule,
    // MatRadioModule,
    // MatInputModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
