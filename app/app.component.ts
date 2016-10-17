import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'my-app',
  templateUrl: './app/templates/app.component.html',
  styleUrls: ['./app/styles/app.component.css']
})

export class AppComponent {

  enquiriesList:string;

  constructor(public http: Http) {}

  ngOnInit() {
      this.getEnquiries();
  }

  getEnquiries() {
    let headers = new Headers({ 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjRmMWcyM2ExMmFhIn0.eyJpc3MiOiJodHRwOlwvXC9hcGkudmVnZnJ1LmNvbVwvIiwianRpIjoiNGYxZzIzYTEyYWEiLCJ1aWQiOjEsInVzZXJfaWQiOjEyNzUxLCJpYXQiOjE0NzY2MTg2ODcsImV4cCI6MTQ3NzgyODI4N30.3MCdvVH2RAOEyP3d2l8v5UdN1QZtZaLcSg24i1nfKYM' });
    let options = new RequestOptions({ headers: headers });
    let enquiryData = this.http.get('http://demo.vegfru.com/api/v1/enquiries?limit=10&search=buyer&searchFields=customer_type:=&orderBy=date_time&sortedBy=DESC', options)
    .map(res => res.json())
    .subscribe(
            data => this.enquiriesList = data.data,
            err => console.log(err)
          );

    this.enquiries = [{id:1, name:'Ramesh', email:"rameshm"}];
  }


}
