import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DataService } from './data.service';

@Injectable()
export class ContactsService extends DataService {

constructor( http : HttpClient) { 
  super('https://contacte-api.herokuapp.com/Contact', http);
}
}