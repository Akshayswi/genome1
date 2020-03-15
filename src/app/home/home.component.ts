import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  fileToUpload: File = null;
  showUpload = false;
  sampleId: String;
  age: number;
  sex: String;
  age_unit: String;
  clinical_features: String;
  consanguinity: String;
  family_affected: String;
  family_details: String;
  dataset_type: String;
  dataset_path: String;
  sample_selected: number;
  view = true;
  detail_list = [];
  sample_list = [];
  dropdownOptions = [];
  config = {
    displayKey: "description", //if objects array passed which key to be displayed defaults to description
    search: true, //true/false for the search functionlity defaults to false,
    height: "auto", //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: "Sample Id", // text to be displayed when no item is selected defaults to Select,
    customComparator: () => {}, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    limitTo: this.dropdownOptions.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: "more", // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: "No results found!", // text to be displayed when no items are found while searching
    searchPlaceholder: "Search", // label thats displayed in search input,
    searchOnKey: "name", // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
    clearOnSelection: false // clears search criteria when an option is selected if set to true, default is false
  };
  detailFormGroup = new FormGroup({
    sampleId: new FormControl(""),
    age: new FormControl(),
    sex: new FormControl(""),
    clinicalFeatures: new FormControl(""),
    consanguinity: new FormControl(""),
    familyAffected: new FormControl(""),
    detailsofFamily: new FormControl(""),
    datasetType: new FormControl(""),
    datasetPath: new FormControl("")
  });
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get("http://localhost:8000/viewset/sample/").subscribe(data => {
      console.log(data);
      var a = JSON.stringify(data);
      var b = JSON.parse(a);
      this.detail_list = b;
      for (let i of b) {
        this.sample_list.push(i.sampleID);
      }
      console.log(this.sample_list);
      this.dropdownOptions = this.sample_list;
    });
  }
  onView() {
    this.view = !this.view;
    console.log(this.view);
  }
  onCreate() {
    this.view = !this.view;
    console.log(this.view);
  }
  onSubmit() {
    this.showUpload = true;
    this.sampleId = this.detailFormGroup.value.sampleId;
    this.age = this.detailFormGroup.value.age;
    this.sex = this.detailFormGroup.value.sex;
    this.clinical_features = this.detailFormGroup.value.clinicalFeatures;
    this.consanguinity = this.detailFormGroup.value.consanguinity;
    this.family_affected = this.detailFormGroup.value.familyAffected;
    this.family_details = this.detailFormGroup.value.detailsofFamily;
    this.dataset_type = this.detailFormGroup.value.datasetType;
    this.dataset_path = this.detailFormGroup.value.datasetPath;
    console.log(this.sampleId);
    // const httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}

    if (this.view == true) {
      this.http
        .post("http://localhost:8000/viewset/selected/", {
          sample_selected: this.sample_selected
        })
        .subscribe(data => {
          console.log(data);
        });
      this.router.navigateByUrl("/variants");
    }
  }

  postRequest() {}
  selectionChanged(a) {
    console.log(a.value);
    for (let i of this.detail_list) {
      if (i.sampleID === a.value) {
        console.log(i);
        this.sample_selected = +i.sampleID;
        this.age = +i.hasAge;
        this.age_unit = i.ageUnit + "s";
        if (i.hasSex == "F") {
          this.sex = "Female";
        } else {
          this.sex = "Male";
        }
        this.clinical_features = i.hasClinicalFeatures;
        if (i.hasConsanguinity == "Y") {
          this.consanguinity = "Yes";
        } else {
          this.consanguinity = "No";
        }
        this.dataset_type = i.sampleType;
        this.dataset_path = i.dataset;
        if (i.hasAffectedFamily == "N") {
          this.family_affected = "No";
          this.family_details = "-";
        } else {
          this.family_affected = "Yes";
          this.family_details = i.hasAffectedFamilyMembers;
        }
      }
    }
  }
}
