import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World!!';
  randomNumber;
  httpdata = [];
  serviceText = this.myservice.serviceText;

  constructor(private myservice: MyserviceService,private http: Http) {}
  ngOnInit() {
     this.randomNumber = this.myservice.randomNumberBetween(1,10);
     this.myservice.serviceText += "Parent adds to text. ";
     this.serviceText = this.myservice.serviceText;

     this.http.get("http://avoindata.prh.fi/bis/v1/2392044-0").
     map(
      (response) => response.json()
     ).
    subscribe(
      (data) => {this.displaydata(data);}
    )
  }

  displaydata(data)
  {
    this.httpdata[0] = data.results[0].name;
    this.httpdata[1] = data.results[0].businessId;
  }

}
