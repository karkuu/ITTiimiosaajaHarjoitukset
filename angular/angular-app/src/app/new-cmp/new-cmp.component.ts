import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  constructor() { }
  testvar = "Test variable.";

   // declared array of months.
  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
  selectedMonth = "";
  isavailable = false;   //variable is set to true

  
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
    console.log(event);
  }  



  ngOnInit() {
  }

}
