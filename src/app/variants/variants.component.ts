import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
declare var $: any;
@Component({
  selector: "app-variants",
  templateUrl: "./variants.component.html",
  styleUrls: ["./variants.component.css"]
})
export class VariantsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  modal = false;
  chr = [];
  start = [];
  end = [];
  ref = [];
  alt = [];
  func = [];
  gene = [];
  omim = [];
  omim_phenotype = [];
  omim_genename = [];
  genedetail = [];

  ngOnInit(): void {}
  onClose() {
    // $("#myModal").modal("hide");
  }
}
