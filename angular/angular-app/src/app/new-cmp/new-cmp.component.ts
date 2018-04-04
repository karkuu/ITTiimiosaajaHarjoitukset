import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MyserviceService } from './../myservice.service';



@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  constructor(private myservice: MyserviceService) { }
  testvar = "Test variable.";
  randomNumber;

   // declared array of months.
  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
  selectedMonth = "";
  selectedMonthIndex = "";
  isavailable = false;
  formdata;
  emailid;

  
  myClickFunction(event) {
    if (this.selectedMonth =="")
    {
      alert("Month hasn't been selected!");
    }
    else {
      alert("Selected month is "+this.selectedMonth);
    }
    
    console.log(event);
  }

  changemonths(event) {
    this.isavailable = true;
    this.selectedMonth = event.target.value;
    this.selectedMonthIndex = event.target.selectedIndex;
    console.log(event);
  }  

  onClickSubmit(data)
  {
    this.emailid = data.emailid;
  }


  ngOnInit() {
    this.randomNumber = this.myservice.randomNumberBetween(1,10);
    this.myservice.serviceText += "Child adds to text.";
    console.log(this.myservice.serviceText);

    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
         Validators.required,
         Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("")
   });
  }

}
