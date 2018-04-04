import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-target',
  templateUrl: './link-target.component.html',
  styleUrls: ['./link-target.component.css']
})
export class LinkTargetComponent implements OnInit {
  newcomponent = "This is a target for a link.";
  constructor() { }

  ngOnInit() {
  }

}
