import { Contacts } from './../../model/model';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  searchContacts:Contacts;
  statusEdit:boolean=false
  status:boolean=false;
  cont:Contacts[]
contacts :any=[];
contact:any= {
  id:0,
  nom:'',
  prenom:'',
  email:'',
  tel:''
}
  constructor(private contactService : ContactsService) { }

  ngOnInit(): void {
    this.contactService.getAll().subscribe(Response =>{
      this.searchContacts=this.contacts=Response;
    })
  }
createContact(){
  this.contactService.create(this.contact).subscribe(Response =>{
    this.contact=Response;
    this.contacts.push(this.contact);
    this.contact={
      id:0,
      nom:'',
      prenom:'',
      email:'',
      tel:''
    }
    this.status=false;
  })
}

editeContact(contact){
this.contact=contact
this.statusEdit=true
}

updateContact(contact){
  this.contactService.update(this.contact)
  .subscribe(Response =>{
    this.contact={
      id:0,
      nom:'',
      prenom:'',
      email:'',
      tel:''
    }
  })
  this.statusEdit=false
}

deleteContact(contact){
  if(confirm('are you sure to delete this contact')){
    this.contactService.delete(contact)    
    .subscribe(Response => {
      let index=this.contacts.indexOf(contact);
      this.contacts.splice(index, 1);
  })
  }

}

search(query:string){
  this.searchContacts = (query) ? this.contacts.filter(contacts => contacts.nom.toLowerCase().includes(query.toLowerCase()) || contacts.prenom.toLowerCase().includes(query.toLowerCase()) || contacts.email.toLowerCase().includes(query.toLowerCase())) : this.contacts;
    }
}
