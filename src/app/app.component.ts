import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
declare var $: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "gene";
  radioValue;
  radioGroup = new FormGroup({ radio: new FormControl() });
  constructor(private router: Router) {}
  ngOnInit() {
    console.log(this.radioValue);
  }
  createCase() {
    this.router.navigateByUrl("/home");
  }
  view1Variants() {
    this.router.navigateByUrl("/variants");
    // $("#myModal").modal('show');
  }
  radioValueChanged() {
    var value = this.radioGroup.value.radio;
    console.log(value);
    if (value == "option1") {
      this.router.navigate(["/main"]);
    } else {
      this.router.navigate(["/home"]);
    }
  }
}
