import { Component, OnInit } from '@angular/core';
import { CompleterService, CompleterData, CompleterItem } from "ng2-completer";

@Component({
  selector: 'app-type-head-demo',
  templateUrl: './type-head-demo.component.html',
  styleUrls: ['./type-head-demo.component.css']
})
export class TypeHeadDemoComponent {
  tradeInValue = 12000;
  isCalculated = false;
  isPanel = false;
  protected searchStr: string;
  protected captain: string;
  protected dataService: CompleterData;
  protected searchData = [
    { color: '2015 Acura ILX Base 4D Sedan at', value: '$ 14,130' },
    { color: '2015 Acura ILX Dynamic 4D Sedan 6sp', value: '$ 17,030' },
    { color: '2015 Acura ILX IMA 4D Sedan at', value: '$ 20,030' },
    { color: '2015 Acura ILX Premium 4D Sedan at', value: '$ 16,430' },
  ];

  constructor(private completerService: CompleterService) {
    this.dataService = completerService.local(this.searchData, 'color', 'color');
  }

  findValue(selected: CompleterItem) {
    console.log(selected.originalObject.value);
    this.tradeInValue = selected.originalObject.value;
    this.isCalculated = true;
  }


  getVin() {
    this.isPanel = true;
  }

}
