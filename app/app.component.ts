import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
//import { Enquiry } from './models/enquiry';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//import { InfiniteScroll } from 'angular2-infinite-scroll';

@Component({
  selector: 'chat-container',
  //directives: [ InfiniteScroll ],
  templateUrl: './app/templates/app.component.html',
  styleUrls: ['./app/styles/app.component.css']
})

export class AppComponent {

  public enquiriesList: string;
  public pageNumber: number;
  public actveEnquiry;

  constructor(public http: Http) {
    this.pageNumber = 50;
  }

  ngOnInit() {
      this.getEnquiries();
  }

  getEnquiries() {
    let headers = new Headers({ 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjRmMWcyM2ExMmFhIn0.eyJpc3MiOiJodHRwOlwvXC9hcGkudmVnZnJ1LmNvbVwvIiwianRpIjoiNGYxZzIzYTEyYWEiLCJ1aWQiOjEsInVzZXJfaWQiOjEyNzUxLCJpYXQiOjE0NzY2MTg2ODcsImV4cCI6MTQ3NzgyODI4N30.3MCdvVH2RAOEyP3d2l8v5UdN1QZtZaLcSg24i1nfKYM' });
    let options = new RequestOptions({ headers: headers });
    let enquiryData = this.http.get('http://demo.vegfru.com/api/v1/enquiries?offset=1&limit=50&orderBy=date_time&sortedBy=DESC', options)
    .map(res => res.json())
    .subscribe(
            data => this.enquiriesList = data.data,
            err => console.log(err)
          );

  }

  selectEnquiry(enquiry) {
    this.actveEnquiry = enquiry;
  }

  onScrollDown() {
    let headers = new Headers({ 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjRmMWcyM2ExMmFhIn0.eyJpc3MiOiJodHRwOlwvXC9hcGkudmVnZnJ1LmNvbVwvIiwianRpIjoiNGYxZzIzYTEyYWEiLCJ1aWQiOjEsInVzZXJfaWQiOjEyNzUxLCJpYXQiOjE0NzY2MTg2ODcsImV4cCI6MTQ3NzgyODI4N30.3MCdvVH2RAOEyP3d2l8v5UdN1QZtZaLcSg24i1nfKYM' });
    let options = new RequestOptions({ headers: headers });
    let enquiryData = this.http.get('http://demo.vegfru.com/api/v1/enquiries?offset='+this.pageNumber+'&limit=20&orderBy=date_time&sortedBy=DESC', options)
      .map(res => res.json())
      .subscribe(
            data => this.enquiriesList.push(...data.data),
            err => console.log(err)
      );
    this.pageNumber = this.pageNumber + 20;
  }

}
