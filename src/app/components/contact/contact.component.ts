import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../../Contact";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  @Input() contact: Contact
  avatar:string = ''

  constructor(private http:HttpClient) {
  }

  ngOnInit() {
    this.http.get<any>('https://randomuser.me/api/?seed='+this.contact.id)
      .subscribe({
        next: data => {
          if(typeof data.results !== 'undefined' &&
          typeof data.results[0].picture.large !== 'undefined')
            this.avatar = data.results[0].picture.large
        },
        error: () =>{
          this.avatar = ''
        }
      })
  }

}
