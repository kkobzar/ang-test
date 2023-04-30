import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contact} from "./Contact";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  get apiData() {
    return this._apiData;
  }

  set apiData(value) {
    this._apiData = value;
  }
  title = 'test-task';
  error: boolean = false;
  errorMessage: string = 'Something gone wrong';
  private _apiData: Contact[];
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get<any>('https://api.crm.xonis.net/api/json/example/task/contactCards?token=f0aef93c624599e8886290dcd85d640bdeb608cf-f8d7a20dd83e63817b3fddc1aac022dd-1682681241')
      .subscribe({
        next: data => {
          if(data.message === "Success"){
            this.apiData = data.contacts
          }else {
            this.error = true
          }
          // console.log(data)
        },
        error: e => {
          this.error = true;
          console.error('Ooops...')
          console.error(e)
        }
      })
  }
}
