import { UtilityService } from './../../utils/utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  constructor(public utility: UtilityService) { }

  ngOnInit(): void {
  }

}
