import { Component, OnInit } from '@angular/core';
import {serviceList} from '../servicelist';
import { SERVICES} from '../list-of-services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  
  services = SERVICES;

  constructor() { }

  ngOnInit() {
  }

}