import { Component, OnInit, Input } from '@angular/core';
import {serviceList} from '../servicelist';
import { SERVICES} from '../list-of-services';


@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.scss']
})
export class ServiceTypeComponent implements OnInit {

  @Input() details;

  show = false;
 
  constructor() {  }

  ngOnInit() { 
  }
}
