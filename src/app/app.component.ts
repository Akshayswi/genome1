import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { HomeComponent } from './home/home.component';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gene';
  constructor(private router:Router){}
  createCase(){
    this.router.navigateByUrl('/home')
  }
  viewVariants(){
    this.router.navigateByUrl('/variants')
    $("#myModal").modal('show');
  }
}
