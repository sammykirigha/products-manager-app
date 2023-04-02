import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { convertToSpaces } from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [AppComponent, ProductComponent, convertToSpaces],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
