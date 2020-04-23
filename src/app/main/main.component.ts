import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ApiService } from "../api.service";

declare var $: any;
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  api_called = false;
  result_list = [];
  key_list = [];
  value_list = [];
  genesymbols = [];
  zygositylist = [];
  constructor(private apiService: ApiService) {}
  detailsForm = new FormGroup({
    gender: new FormControl(),
    age_unit: new FormControl(),
    condition1: new FormControl(),
    age1: new FormControl(0),
    condition_radio: new FormControl(),
    condition2: new FormControl(),
    age2: new FormControl(0),
    clinical_features: new FormControl(""),
    consanguinity: new FormControl(),
    zygosity: new FormControl(""),
    gene: new FormControl(""),
    variantclass: new FormControl(),
    novelty: new FormControl(),
  });
  ngOnInit(): void {
    this.apiService.get("viewset/genesymbols/").subscribe((data) => {
      var a = JSON.stringify(data);
      var b = JSON.parse(a);
      this.genesymbols = b;
      console.log(data);
    });
    this.apiService.get("viewset/zygosity/").subscribe((data) => {
      var a = JSON.stringify(data);
      var b = JSON.parse(a);
      this.zygositylist = b;
      console.log(b);
    });
  }
  onSubmit() {
    var age1 = 0;
    var age2 = 0;
    var gender = this.detailsForm.value.gender;
    var age_unit = this.detailsForm.value.age_unit;
    var condition1 = this.detailsForm.value.condition1;
    age1 = this.detailsForm.value.age1;
    var condition_radio = this.detailsForm.value.condition_radio;
    var condition2 = this.detailsForm.value.condition2;
    age2 = this.detailsForm.value.age2;
    var clinical_features = this.detailsForm.value.clinical_features;
    var consanguinity = this.detailsForm.value.consanguinity;
    var zygosity = this.detailsForm.value.zygosity;
    var gene = this.detailsForm.value.gene;
    var variantclass = this.detailsForm.value.variantclass;
    var novelty = this.detailsForm.value.novelty;

    if (gender == "Male") {
      gender = "M";
    } else if (gender == "Female") {
      gender = "F";
    } else if (gender == "Others") {
      gender = "Other";
    } else {
      gender = "";
    }

    if (age_unit == "months") {
      age_unit = "Month";
    } else if (age_unit == "years") {
      age_unit = "Year";
    } else if (age_unit == "days") {
      age_unit = "Day";
    } else {
      age_unit = "";
    }

    if (condition1 == "equals") {
      condition1 = "=";
    } else if (condition1 == "greater than") {
      condition1 = ">";
    } else if (condition1 == "greater than equal") {
      condition1 = ">=";
    } else if (condition1 == "less than") {
      condition1 = "<";
    } else if (condition1 == "less than equal") {
      condition1 = "<=";
    } else {
      condition1 = "";
    }

    if (condition_radio == "And") {
      condition_radio = "and";
    } else if (condition_radio == "Or") {
      condition_radio = "or";
    } else {
      condition_radio = "";
    }

    if (condition2 == "equals") {
      condition2 = "=";
    } else if (condition2 == "greater than") {
      condition2 = ">";
    } else if (condition2 == "greater than equal") {
      condition2 = ">=";
    } else if (condition2 == "less than") {
      condition2 = "<";
    } else if (condition2 == "less than equal") {
      condition2 = "<=";
    } else {
      condition2 = "";
    }

    if (consanguinity == "Yes") {
      consanguinity = "Y";
    } else if (consanguinity == "No") {
      consanguinity = "N";
    } else {
      consanguinity = "";
    }

    if (variantclass == "Pathogenic") {
      variantclass = "Pathogenic";
    } else if (variantclass == "Benign") {
      variantclass = "Benign";
    } else if (variantclass == "Likely Benign") {
      variantclass = "Likely Benign";
    } else if (variantclass == "Likely Pathogenic") {
      variantclass = "Likely Pathogenic";
    } else if (variantclass == "Uncertain significance") {
      variantclass = "Uncertain significance";
    } else if (variantclass == "Unknown") {
      variantclass = "NA";
    } else {
      variantclass = "";
    }

    if (novelty == "novel") {
      novelty = "Yes";
    } else if (novelty == "not novel") {
      novelty = "No";
    } else {
      novelty = "";
    }

    var body = {
      gender: gender,
      age_unit: age_unit,
      condition1: condition1,
      age1: age1,
      condition_radio: condition_radio,
      condition2: condition2,
      age2: age2,
      clinical_features: clinical_features,
      consanguinity: consanguinity,
      zygosity: zygosity,
      gene: gene,
      variantclass: variantclass,
      novelty: novelty,
    };

    this.apiService.post("viewset/search/", body).subscribe((data) => {
      this.api_called = true;
      var a = JSON.stringify(data);
      var b = JSON.parse(a);
      this.result_list = b;
      this.key_list = [];
      this.value_list = [];
      this.key_list = [
        "SampleId",
        "SampleType",
        "Age",
        "Sex",
        "Clinical Features",
        "Consanguinity",
        "Affected Family Members",
        "Clinvar Details",
        "Zygosity",
        "Gene",
        "Identified Variant",
        "Variant Classification",
      ];

      for (let item of this.result_list) {
        for (let item1 of this.genesymbols) {
          if (item["hasgene"] == item1["hasgene"]) {
            item["hasgene"] = {
              uri: item1["hasgene"],
              gene: item1["callret-1"],
            };
          }
        }
        for (let item2 of this.zygositylist) {
          if (item["haszygosity"] == item2["zyg"]) {
            item["haszygosity"] = {
              uri: item2["zyg"],
              zygosity: item2["callret-1"],
            };
          }
        }
      }

      console.log(this.key_list);
      console.log(this.value_list);
      console.log(data);
    });
    console.log(
      gender,
      " gender ",
      age_unit,
      " age unit ",
      condition1,
      " condition1 ",
      age1,
      " age1 ",
      condition_radio,
      " condition radio ",
      age2,
      " age 2 ",
      clinical_features,
      " clinical features ",
      consanguinity,
      " consanguinity ",
      zygosity,
      " zygosity ",
      gene,
      " gene ",
      variantclass,
      " variantclass ",
      novelty,
      "novelty"
    );
  }
  over(a) {
    var id = "#hello" + a;
    $(id).popover("show");
  }
  out(a) {
    var id = "#hello" + a;
    $(id).popover("hide");
  }
}
