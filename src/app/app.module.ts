import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactsService } from './services/contacts.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    NavbarComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
