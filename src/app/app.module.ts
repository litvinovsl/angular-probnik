import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { FormComponent } from './components/form/form/form.component'
import { FormTextComponent } from './components/form/form-text/form-text.component'
import { FormStarComponent } from './components/form/form-star/form-star.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    AppComponent,
    FormComponent,
    FormTextComponent,
    ProductComponent,
    FormStarComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
    ReactiveFormsModule,
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
