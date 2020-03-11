import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-variants',
  templateUrl: './variants.component.html',
  styleUrls: ['./variants.component.css']
})
export class VariantsComponent implements OnInit {

  constructor() { }
  modal=false
  ngOnInit(): void {
    
    
  }
  onClose(){
    $("#myModal").modal('hide');
  }

}
