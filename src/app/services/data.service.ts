

import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';


export class DataService {
  constructor(private utl : string , private http : HttpClient) { 
  }

 
  getAll(): Observable<any>{
   return this.http.get<any>(this.utl)
  }
  create(ressource){
    return this.http.post<any>(this.utl, ressource)
  }
  update(ressource){
    return this.http.put<any>(this.utl+'/'+ressource.id, ressource)
  }
  delete(ressource): Observable<any>{
   return  this.http.delete<any>(this.utl+'/'+ressource.id)
   }

   }
  
