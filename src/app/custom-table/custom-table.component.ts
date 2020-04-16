import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-custom-table",
  templateUrl: "./custom-table.component.html",
  styleUrls: ["./custom-table.component.css"]
})
export class CustomTableComponent implements OnInit {
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}
  searchtext = "";
  keys: Object;
  p: number = 1;
  value_list = [];
  Chr = false;
  Start = false;
  End = false;
  Ref = false;
  Alt = false;
  Func_refGene = false;
  Gene_refGene = false;
  omimgene = false;
  OMIMphenotype = false;
  OMIMgenename = false;
  GeneDetail_refGene = false;
  ExonicFunc_refGene = false;
  AAChange_refGene = false;
  phastConsElements46way = false;
  genomicSuperDups = false;
  _1000g2015aug_all = false;
  esp6500siv2_all = false;
  ExAC_ALL = false;
  gnomAD_exome_ALL = false;
  gnomAD_genome_ALL = false;
  cg69 = false;
  cosmic70 = false;
  nci60 = false;
  GIV_CDFD_AAF = false;
  GIV_CDFD_HET = false;
  GIV_CDFD_HOM_VAR = false;
  GIV_Indian_AAF = false;
  GIV_Indian_HET = false;
  GIV_Indian_HOM_VAR = false;
  ICGC_Id = false;
  ICGC_Occurrence = false;
  snp138NonFlagged = false;
  avsnp138 = false;
  CLNALLELEID = false;
  CLNDN = false;
  CLNDISDB = false;
  CLNREVSTAT = false;
  CLNSIG = false;
  SIFT_score = false;
  SIFT_pred = false;
  Polyphen2_HDIV_score = false;
  Polyphen2_HDIV_pred = false;
  Polyphen2_HVAR_score = false;
  Polyphen2_HVAR_pred = false;
  MutationTaster_score = false;
  MutationTaster_pred = false;
  CADD = false;
  CADD_Phred = false;
  CADD13_RawScore = false;
  CADD13_PHRED = false;
  MCAP13 = false;
  Interpro_domain = false;
  InterVar_automated = false;
  PVS1 = false;
  PS1 = false;
  PS2 = false;
  PS3 = false;
  PS4 = false;
  PM1 = false;
  PM2 = false;
  PM3 = false;
  PM4 = false;
  PM5 = false;
  PM6 = false;
  PP1 = false;
  PP2 = false;
  PP3 = false;
  PP4 = false;
  PP5 = false;
  BA1 = false;
  BS1 = false;
  BS2 = false;
  BS3 = false;
  BS4 = false;
  BP1 = false;
  BP2 = false;
  BP3 = false;
  BP4 = false;
  BP5 = false;
  BP6 = false;
  BP7 = false;
  Zygosity = false;
  Total_DP = false;
  Chrom = false;
  Start_1 = false;
  Ref_1 = false;
  Alt_1 = false;
  Qual_score = false;
  Filter = false;
  Otherinfo = false;
  GT_AD_AF_DP_F1R2_F2R1_GQ_PL_GP_PRI_SB_MB = false;
  avsnp150 = false;
  Allele_Details = false;
  Chromosome_Details = false;
  Chromosome_Details_Orig = false;
  Clinvar_Details = false;
  Gene_Variant_Details = false;
  Frequency_of_Variants = false;
  Intervar_Details = false;
  Omim_Details = false;
  Other_Info = false;
  Prediction_Softwares = false;
  Protein_Domain = false;
  Reference_Databases = false;

  Allele_Details_Count = 0;
  Chromosome_Details_Count = 0;
  Chromosome_Details_Orig_Count = 0;
  Clinvar_Details_Count = 0;
  Gene_Variant_Details_Count = 0;
  Frequency_of_Variants_Count = 0;
  Intervar_Details_Count = 0;
  Omim_Details_Count = 0;
  Other_Info_Count = 0;
  Prediction_Softwares_Count = 0;
  Protein_Domain_Count = 0;
  Reference_Databases_Count = 0;
  filters_array = [];
  filter_heading = [
    "Description",
    "Column",
    "Condition",
    "Value type",
    "Value",
    "Default"
  ];
  genome1 = true;
  genome2 = true;
  _1000g1 = true;
  _1000g2 = true;
  esp1 = true;
  esp2 = true;
  exac1 = true;
  exac2 = true;
  exome1 = true;
  exome2 = true;
  addForm = false;
  dropdownOptions = [];
  addtoDefaultForm = new FormGroup({
    description: new FormControl(),
    column: new FormControl(),
    type: new FormControl(""),
    condition: new FormControl("="),
    value: new FormControl("")
  });
  new_filtered_array = [];
  dummy_list = [];
  unique_value = [];
  condition_list = [];
  searchText;
  ngOnInit(): void {
    this.spinner.show();
    this.http.get("http://localhost:8000/viewset/column/").subscribe(data => {
      console.log(data);
      var a = JSON.stringify(data);
      var b = JSON.parse(a);
      var show_list = b;
      for (let i of b) {
        if (i.colpreflabel == "Alt") {
          this.Alt = true;
        }
        if (i.colpreflabel == "Ref") {
          this.Ref = true;
        }
        if (i.colpreflabel == "Chr") {
          this.Chr = true;
        }
        if (i.colpreflabel == "Start") {
          this.Start = true;
        }
        if (i.colpreflabel == "End") {
          this.End = true;
        }
        if (i.colpreflabel == "Alt_1") {
          this.Alt_1 = true;
        }
        if (i.colpreflabel == "Chrom") {
          this.Chrom = true;
        }
        if (i.colpreflabel == "Ref_1") {
          this.Ref_1 = true;
        }
        if (i.colpreflabel == "Start_1") {
          this.Start_1 = true;
        }
        if (i.colpreflabel == "CLNALLELEID") {
          this.CLNALLELEID = true;
        }
        if (i.colpreflabel == "CLNDISDB") {
          this.CLNDISDB = true;
        }
        if (i.colpreflabel == "CLNDN") {
          this.CLNDN = true;
        }
        if (i.colpreflabel == "CLNREVSTAT") {
          this.CLNREVSTAT = true;
        }
        if (i.colpreflabel == "CLNSIG") {
          this.CLNSIG = true;
        }
        if (i.colpreflabel == "_1000g2015aug_all") {
          this._1000g2015aug_all = true;
        }
        if (i.colpreflabel == "ExAC_ALL") {
          this.ExAC_ALL = true;
        }
        if (i.colpreflabel == "GIV_CDFD_AAF") {
          this.GIV_CDFD_AAF = true;
        }
        if (i.colpreflabel == "GIV_CDFD_HET") {
          this.GIV_CDFD_HET = true;
        }
        if (i.colpreflabel == "GIV_CDFD_HOM-VAR") {
          this.GIV_CDFD_HOM_VAR = true;
        }
        if (i.colpreflabel == "GIV_Indian_AAF") {
          this.GIV_Indian_AAF = true;
        }
        if (i.colpreflabel == "GIV_Indian_HET") {
          this.GIV_Indian_HET = true;
        }
        if (i.colpreflabel == "GIV_Indian_HOM-VAR") {
          this.GIV_Indian_HOM_VAR = true;
        }
        if (i.colpreflabel == "ICGC_Id") {
          this.ICGC_Id = false;
        }
        if (i.colpreflabel == "ICGC_Occurrence") {
          this.ICGC_Occurrence = false;
        }
        if (i.colpreflabel == "cosmic70") {
          this.cosmic70 = false;
        }
        if (i.colpreflabel == "cg69") {
          this.cg69 = true;
        }
        if (i.colpreflabel == "esp6500siv2_all") {
          this.esp6500siv2_all = true;
        }
        if (i.colpreflabel == "gnomAD_exome_ALL") {
          this.gnomAD_exome_ALL = true;
        }
        if (i.colpreflabel == "gnomAD_genome_ALL") {
          this.gnomAD_genome_ALL = true;
        }
        if (i.colpreflabel == "nci60") {
          this.nci60 = true;
        }
        if (i.colpreflabel == "AAChange.refGene") {
          this.AAChange_refGene = true;
        }
        if (i.colpreflabel == "ExonicFunc.refGene") {
          this.ExonicFunc_refGene = true;
        }
        if (i.colpreflabel == "Func.refGene") {
          this.Func_refGene = true;
        }
        if (i.colpreflabel == "Gene.refGene") {
          this.Gene_refGene = true;
        }
        if (i.colpreflabel == "GeneDetail.refGene") {
          this.GeneDetail_refGene = true;
        }
        if (i.colpreflabel == "Total_DP") {
          this.Total_DP = true;
        }
        if (i.colpreflabel == "Zygosity") {
          this.Zygosity = true;
        }
        if (i.colpreflabel == "genomicSuperDups") {
          this.genomicSuperDups = true;
        }
        if (i.colpreflabel == "phastConsElements46way") {
          this.phastConsElements46way = true;
        }
        if (i.colpreflabel == "BA1") {
          this.BA1 = true;
        }
        if (i.colpreflabel == "BP1") {
          this.BP1 = true;
        }
        if (i.colpreflabel == "BP2") {
          this.BP2 = true;
        }
        if (i.colpreflabel == "BP3") {
          this.BP3 = true;
        }
        if (i.colpreflabel == "BP4") {
          this.BP4 = true;
        }
        if (i.colpreflabel == "BP4") {
          this.BP4 = true;
        }
        if (i.colpreflabel == "BP5") {
          this.BP5 = true;
        }
        if (i.colpreflabel == "BP6") {
          this.BP6 = true;
        }
        if (i.colpreflabel == "BP7") {
          this.BP7 = true;
        }
        if (i.colpreflabel == "BS1") {
          this.BS1 = true;
        }
        if (i.colpreflabel == "BS2") {
          this.BS2 = true;
        }
        if (i.colpreflabel == "BS3") {
          this.BS3 = true;
        }
        if (i.colpreflabel == "BS4") {
          this.BS4 = true;
        }
        if (i.colpreflabel == "BP4") {
          this.BP4 = true;
        }
        if (i.colpreflabel == "InterVar_automated") {
          this.InterVar_automated = true;
        }
        if (i.colpreflabel == "PM1") {
          this.PM1 = true;
        }
        if (i.colpreflabel == "PM2") {
          this.PM2 = true;
        }
        if (i.colpreflabel == "PM3") {
          this.PM3 = true;
        }
        if (i.colpreflabel == "PM3") {
          this.PM3 = true;
        }
        if (i.colpreflabel == "PM4") {
          this.PM4 = true;
        }
        if (i.colpreflabel == "PM5") {
          this.PM5 = true;
        }
        if (i.colpreflabel == "PM6") {
          this.PM6 = true;
        }
        if (i.colpreflabel == "PP1") {
          this.PP1 = true;
        }
        if (i.colpreflabel == "PP2") {
          this.PP2 = true;
        }
        if (i.colpreflabel == "PP3") {
          this.PP3 = true;
        }
        if (i.colpreflabel == "PP4") {
          this.PP4 = true;
        }
        if (i.colpreflabel == "PP5") {
          this.PP5 = true;
        }
        if (i.colpreflabel == "PS1") {
          this.PS1 = true;
        }
        if (i.colpreflabel == "PS2") {
          this.PS2 = true;
        }
        if (i.colpreflabel == "PS3") {
          this.PS3 = true;
        }
        if (i.colpreflabel == "PS4") {
          this.PS4 = true;
        }
        if (i.colpreflabel == "PVS1") {
          this.PVS1 = true;
        }
        if (i.colpreflabel == "OMIM_gene") {
          this.omimgene = true;
        }
        if (i.colpreflabel == "OMIM_genename") {
          this.OMIMgenename = true;
        }
        if (i.colpreflabel == "OMIM_phenotype") {
          this.OMIMphenotype = true;
        }
        if (i.colpreflabel == "Filter") {
          this.Filter = true;
        }
        if (i.colpreflabel == "GT:AD:AF:DP:F1R2:F2R1:GQ:PL:GP:PRI:SB:MB") {
          this.GT_AD_AF_DP_F1R2_F2R1_GQ_PL_GP_PRI_SB_MB = true;
        }
        if (i.colpreflabel == "Otherinfo") {
          this.Otherinfo = true;
        }
        if (i.colpreflabel == "Qual_score") {
          this.Qual_score = true;
        }
        if (i.colpreflabel == "CADD") {
          this.CADD = true;
        }
        if (i.colpreflabel == "CADD13_PHRED") {
          this.CADD13_PHRED = true;
        }
        if (i.colpreflabel == "CADD13_RawScore") {
          this.CADD13_RawScore = true;
        }
        if (i.colpreflabel == "CADD_Phred") {
          this.CADD_Phred = true;
        }
        if (i.colpreflabel == "MCAP13") {
          this.MCAP13 = true;
        }
        if (i.colpreflabel == "MutationTaster_pred") {
          this.MutationTaster_pred = true;
        }
        if (i.colpreflabel == "MutationTaster_score") {
          this.MutationTaster_score = true;
        }
        if (i.colpreflabel == "Polyphen2_HDIV_pred") {
          this.Polyphen2_HDIV_pred = true;
        }
        if (i.colpreflabel == "Polyphen2_HDIV_score") {
          this.Polyphen2_HDIV_score = true;
        }
        if (i.colpreflabel == "Polyphen2_HVAR_pred") {
          this.Polyphen2_HVAR_pred = true;
        }
        if (i.colpreflabel == "Polyphen2_HVAR_score") {
          this.Polyphen2_HVAR_score = true;
        }
        if (i.colpreflabel == "SIFT_pred") {
          this.SIFT_pred = true;
        }
        if (i.colpreflabel == "SIFT_score") {
          this.SIFT_score = true;
        }
        if (i.colpreflabel == "Interpro_domain") {
          this.Interpro_domain = true;
        }
        if (i.colpreflabel == "avsnp138") {
          this.avsnp138 = true;
        }
        if (i.colpreflabel == "avsnp150") {
          this.avsnp150 = true;
        }
        if (i.colpreflabel == "snp138NonFlagged") {
          this.snp138NonFlagged = true;
        }

        if (i.cat == "Allele Details") {
          this.Allele_Details = true;
          this.Allele_Details_Count = this.Allele_Details_Count + 1;
        }
        if (i.cat == "Chromosome Details") {
          this.Chromosome_Details = true;
          this.Chromosome_Details_Count = this.Chromosome_Details_Count + 1;
        }
        if (i.cat == "Clinvar Details") {
          this.Clinvar_Details = true;
          this.Clinvar_Details_Count = this.Clinvar_Details_Count + 1;
        }
        if (i.cat == "Frequency of Variants") {
          this.Frequency_of_Variants = true;
          this.Frequency_of_Variants_Count =
            this.Frequency_of_Variants_Count + 1;
        }

        if (i.cat == "Gene Variant Details") {
          this.Gene_Variant_Details = true;
          this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count + 1;
        }
        if (i.cat == "Intervar Details") {
          this.Intervar_Details = true;
          this.Intervar_Details_Count = this.Intervar_Details_Count + 1;
        }
        if (i.cat == "OMIM Details") {
          this.Omim_Details = true;
          this.Omim_Details_Count = this.Omim_Details_Count + 1;
        }
        if (i.cat == "Other Info") {
          this.Other_Info = true;
          this.Other_Info_Count = this.Other_Info_Count + 1;
        }
        if (i.cat == "Prediction Softwares") {
          this.Prediction_Softwares = true;
          this.Prediction_Softwares_Count = this.Prediction_Softwares_Count + 1;
        }
        if (i.cat == "Protein Domain") {
          this.Protein_Domain = true;
          this.Protein_Domain_Count = this.Protein_Domain_Count + 1;
        }
        if (i.cat == "Reference Databases") {
          this.Reference_Databases = true;
          this.Reference_Databases_Count = this.Reference_Databases_Count + 1;
        }
      }
      //   console.log("yyy");
    });
    this.http.get("http://localhost:8000/viewset/data/").subscribe(
      data => {
        var a = JSON.stringify(data);
        var c = "";
        var b = JSON.parse(a);
        this.value_list = b;
        this.dummy_list = this.value_list;
        // console.log(this.value_list);
        this.keys = Object.keys(b[0]);
        // console.log(this.keys);
        this.spinner.hide();
        for (let i of this.value_list) {
          i["checked"] = false;
        }
        for (let i of this.value_list) {
          this.dropdownOptions = Object.keys(i);
          break;
        }
        for (let i = 0; i < this.dropdownOptions.length; i++) {
          if (this.dropdownOptions[i] == "_1000g2015aug_all") {
            this.dropdownOptions[i] = "1000g2015aug_all";
          } else if (this.dropdownOptions[i] == "Func_refGene") {
            this.dropdownOptions[i] = "Func.refGene";
          } else if (this.dropdownOptions[i] == "Gene_refGene") {
            this.dropdownOptions[i] = "Gene.refGene";
          } else if (this.dropdownOptions[i] == "AAChange.refGene") {
            this.dropdownOptions[i] = "AAChange.refGene";
          } else if (this.dropdownOptions[i] == "ExonicFunc_refGene") {
            this.dropdownOptions[i] = "ExonicFunc_refGene";
          } else if (this.dropdownOptions[i] == "GeneDetail_refGene") {
            this.dropdownOptions[i] = "GeneDetail.refGene";
          } else if (
            this.dropdownOptions[i] ==
            "GT_AD_AF_DP_F1R2_F2R1_GQ_PL_GP_PRI_SB_MB"
          ) {
            this.dropdownOptions[i] =
              "GT:AD:AF:DP:F1R2:F2R1:GQ:PL:GP:PRI:SB:MB";
          }
        }
      },
      error => {
        this.spinner.hide();
      }
    );
    this.http.get("http://localhost:8000/viewset/filters/").subscribe(data => {
      //   console.log(data);
      var a = JSON.stringify(data);
      var b = JSON.parse(a);
      for (let item of b) {
        if (item.condition == "eq") {
          item["condition"] = "=";
        } else if (item.condition == "lte") {
          item["condition"] = "<=";
        } else if (item.condition == "gte") {
          item["condition"] = ">=";
        }
      }
      for (let item of b) {
        this.filters_array.push(item);
      }
      for (let i of this.filters_array) {
        i["checked"] = true;
      }
    });
    // console.log(this.filters_array, "filter");
  }
  showPopup() {}
  AlleleFieldChange(values: any) {
    var value = values.currentTarget.checked;
    this.Allele_Details = value;
    if (this.Alt == false && this.Ref == false) {
      this.Alt = true;
    }
  }
  allele_sub_class = false;
  showalleleSubClass() {
    this.allele_sub_class = !this.allele_sub_class;
  }
  AltFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Allele_Details_Count = this.Allele_Details_Count - 1;
    }
    if (value == true) {
      this.Allele_Details_Count = this.Allele_Details_Count + 1;
    }
    this.Alt = value;
    if (this.Alt == false && this.Ref == false) {
      this.Allele_Details = false;
    }
  }
  RefFieldChange(values: any) {
    var value = values.currentTarget.checked;

    if (value == false) {
      this.Allele_Details_Count = this.Allele_Details_Count - 1;
    }
    if (value == true) {
      this.Allele_Details_Count = this.Allele_Details_Count + 1;
    }
    if (this.Allele_Details_Count == 0) {
      this.Allele_Details = false;
    }
    this.Ref = value;
    if (this.Alt == false && this.Ref == false) {
      this.Allele_Details = false;
    }
  }
  ChromosomeFieldChange(values: any) {
    var value = values.currentTarget.checked;
    this.Chromosome_Details = value;
    if (this.Chr == false && this.End == false && this.Start == false) {
      this.Chr = true;
    }
  }
  chromosome_sub_class = false;
  showchromosomeSubClass() {
    this.chromosome_sub_class = !this.chromosome_sub_class;
  }
  ChrFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Chromosome_Details_Count = this.Chromosome_Details_Count - 1;
    }
    if (value == true) {
      this.Chromosome_Details_Count = this.Chromosome_Details_Count + 1;
    }
    this.Chr = value;
    if (this.Chr == false && this.End == false && this.Start == false) {
      this.Chromosome_Details = false;
    }
  }
  EndFieldChange(values: any) {
    var value = values.currentTarget.checked;

    if (value == false) {
      this.Chromosome_Details_Count = this.Chromosome_Details_Count - 1;
    }
    if (value == true) {
      this.Chromosome_Details_Count = this.Chromosome_Details_Count + 1;
    }
    if (this.Chromosome_Details_Count == 0) {
      this.Chromosome_Details = false;
    }
    this.End = value;
    if (this.Chr == false && this.End == false && this.Start == false) {
      this.Chromosome_Details = false;
    }
  }
  StartFieldChange(values: any) {
    var value = values.currentTarget.checked;

    if (value == false) {
      this.Chromosome_Details_Count = this.Chromosome_Details_Count - 1;
    }
    if (value == true) {
      this.Chromosome_Details_Count = this.Chromosome_Details_Count + 1;
    }
    if (this.Chromosome_Details_Count == 0) {
      this.Chromosome_Details = false;
    }
    this.Start = value;
    if (this.Chr == false && this.End == false && this.Start == false) {
      this.Chromosome_Details = false;
    }
  }
  Chromosome_origFieldChange(values: any) {
    var value = values.currentTarget.checked;
    this.Chromosome_Details_Orig = value;
    if (value == true) {
      this.Chromosome_Details_Orig_Count =
        this.Chromosome_Details_Orig_Count + 1;
      this.Alt_1 = true;
    }
  }
  chromosome_orig_sub_class = false;
  showchromosome_origSubClass() {
    this.chromosome_orig_sub_class = !this.chromosome_orig_sub_class;
  }
  Alt_1FieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Chromosome_Details_Orig_Count =
        this.Chromosome_Details_Orig_Count - 1;
    }
    if (value == true) {
      this.Chromosome_Details_Orig_Count =
        this.Chromosome_Details_Orig_Count + 1;
    }
    this.Alt_1 = value;
  }
  ChromFieldChange(values: any) {
    var value = values.currentTarget.checked;

    var value = values.currentTarget.checked;
    if (value == false) {
      this.Chromosome_Details_Orig_Count =
        this.Chromosome_Details_Orig_Count - 1;
    }
    if (value == true) {
      this.Chromosome_Details_Orig_Count =
        this.Chromosome_Details_Orig_Count + 1;
    }
    this.Chrom = value;
  }
  Start_1FieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Chromosome_Details_Orig_Count =
        this.Chromosome_Details_Orig_Count - 1;
    }
    if (value == true) {
      this.Chromosome_Details_Orig_Count =
        this.Chromosome_Details_Orig_Count + 1;
    }
    this.Start_1 = value;
  }
  Ref_1FieldChange(values: any) {
    var value = values.currentTarget.checked;

    var value = values.currentTarget.checked;
    if (value == false) {
      this.Chromosome_Details_Orig_Count =
        this.Chromosome_Details_Orig_Count - 1;
    }
    if (value == true) {
      this.Chromosome_Details_Orig_Count =
        this.Chromosome_Details_Orig_Count + 1;
    }
    this.Ref_1 = value;
  }
  ClinvarFieldChange(values: any) {
    var value = values.currentTarget.checked;
    this.Clinvar_Details = value;
    if (
      this.CLNALLELEID == false &&
      this.CLNDISDB == false &&
      this.CLNDN == false &&
      this.CLNREVSTAT == false &&
      this.CLNSIG == false
    ) {
      this.CLNALLELEID = true;
      this.Clinvar_Details_Count++;
    }
  }
  clinvar_sub_class = false;
  showclinvarSubClass() {
    this.clinvar_sub_class = !this.clinvar_sub_class;
  }
  ClnalleleidFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Clinvar_Details_Count = this.Clinvar_Details_Count - 1;
    }
    if (value == true) {
      this.Clinvar_Details_Count = this.Clinvar_Details_Count + 1;
    }
    this.CLNALLELEID = value;
    if (
      this.CLNALLELEID == false &&
      this.CLNDISDB == false &&
      this.CLNDN == false &&
      this.CLNREVSTAT == false &&
      this.CLNSIG == false
    ) {
      this.Clinvar_Details = false;
    }
  }
  ClndisdbFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Clinvar_Details_Count = this.Clinvar_Details_Count - 1;
    }
    if (value == true) {
      this.Clinvar_Details_Count = this.Clinvar_Details_Count + 1;
    }
    this.CLNDISDB = value;
    if (
      this.CLNALLELEID == false &&
      this.CLNDISDB == false &&
      this.CLNDN == false &&
      this.CLNREVSTAT == false &&
      this.CLNSIG == false
    ) {
      this.Clinvar_Details = false;
    }
  }
  ClndnFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Clinvar_Details_Count = this.Clinvar_Details_Count - 1;
    }
    if (value == true) {
      this.Clinvar_Details_Count = this.Clinvar_Details_Count + 1;
    }
    this.CLNDN = value;
    if (
      this.CLNALLELEID == false &&
      this.CLNDISDB == false &&
      this.CLNDN == false &&
      this.CLNREVSTAT == false &&
      this.CLNSIG == false
    ) {
      this.Clinvar_Details = false;
    }
  }
  ClnrevstatFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Clinvar_Details_Count = this.Clinvar_Details_Count - 1;
    }
    if (value == true) {
      this.Clinvar_Details_Count = this.Clinvar_Details_Count + 1;
    }
    this.CLNREVSTAT = value;
    if (
      this.CLNALLELEID == false &&
      this.CLNDISDB == false &&
      this.CLNDN == false &&
      this.CLNREVSTAT == false &&
      this.CLNSIG == false
    ) {
      this.Clinvar_Details = false;
    }
  }
  ClnsigFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Clinvar_Details_Count = this.Clinvar_Details_Count - 1;
    }
    if (value == true) {
      this.Clinvar_Details_Count = this.Clinvar_Details_Count + 1;
    }
    this.CLNSIG = value;
    if (
      this.CLNALLELEID == false &&
      this.CLNDISDB == false &&
      this.CLNDN == false &&
      this.CLNREVSTAT == false &&
      this.CLNSIG == false
    ) {
      this.Clinvar_Details = false;
    }
  }
  FrequencyFieldChange(values: any) {
    var value = values.currentTarget.checked;
    this.Frequency_of_Variants = value;
    if (
      this._1000g2015aug_all == false &&
      this.ExAC_ALL == false &&
      this.GIV_CDFD_AAF == false &&
      this.GIV_CDFD_HET == false &&
      this.GIV_CDFD_HOM_VAR == false &&
      this.GIV_Indian_AAF == false &&
      this.GIV_Indian_HET == false &&
      this.GIV_Indian_HOM_VAR == false &&
      this.ICGC_Id == false &&
      this.ICGC_Occurrence == false &&
      this.cg69 == false &&
      this.cosmic70 == false &&
      this.esp6500siv2_all == false &&
      this.gnomAD_exome_ALL == false &&
      this.gnomAD_genome_ALL == false &&
      this.nci60 == false
    ) {
      this._1000g2015aug_all = true;
      this.Frequency_of_Variants_Count++;
    }
  }
  frequency_sub_class = false;
  showfrequencySubClass() {
    this.frequency_sub_class = !this.frequency_sub_class;
  }
  _1000g2015aug_allFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count - 1;
    }
    if (value == true) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count + 1;
    }
    this._1000g2015aug_all = value;
    if (
      this._1000g2015aug_all == false &&
      this.ExAC_ALL == false &&
      this.GIV_CDFD_AAF == false &&
      this.GIV_CDFD_HET == false &&
      this.GIV_CDFD_HOM_VAR == false &&
      this.GIV_Indian_AAF == false &&
      this.GIV_Indian_HET == false &&
      this.GIV_Indian_HOM_VAR == false &&
      this.ICGC_Id == false &&
      this.ICGC_Occurrence == false &&
      this.cg69 == false &&
      this.cosmic70 == false &&
      this.esp6500siv2_all == false &&
      this.gnomAD_exome_ALL == false &&
      this.gnomAD_genome_ALL == false &&
      this.nci60 == false
    ) {
      this.Frequency_of_Variants = false;
    }
  }
  ExAC_ALLFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count - 1;
    }
    if (value == true) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count + 1;
    }
    this.ExAC_ALL = value;
    if (
      this._1000g2015aug_all == false &&
      this.ExAC_ALL == false &&
      this.GIV_CDFD_AAF == false &&
      this.GIV_CDFD_HET == false &&
      this.GIV_CDFD_HOM_VAR == false &&
      this.GIV_Indian_AAF == false &&
      this.GIV_Indian_HET == false &&
      this.GIV_Indian_HOM_VAR == false &&
      this.ICGC_Id == false &&
      this.ICGC_Occurrence == false &&
      this.cg69 == false &&
      this.cosmic70 == false &&
      this.esp6500siv2_all == false &&
      this.gnomAD_exome_ALL == false &&
      this.gnomAD_genome_ALL == false &&
      this.nci60 == false
    ) {
      this.Frequency_of_Variants = false;
    }
  }
  GIV_CDFD_AAFFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count - 1;
    }
    if (value == true) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count + 1;
    }
    this.GIV_CDFD_AAF = value;
    if (
      this._1000g2015aug_all == false &&
      this.ExAC_ALL == false &&
      this.GIV_CDFD_AAF == false &&
      this.GIV_CDFD_HET == false &&
      this.GIV_CDFD_HOM_VAR == false &&
      this.GIV_Indian_AAF == false &&
      this.GIV_Indian_HET == false &&
      this.GIV_Indian_HOM_VAR == false &&
      this.ICGC_Id == false &&
      this.ICGC_Occurrence == false &&
      this.cg69 == false &&
      this.cosmic70 == false &&
      this.esp6500siv2_all == false &&
      this.gnomAD_exome_ALL == false &&
      this.gnomAD_genome_ALL == false &&
      this.nci60 == false
    ) {
      this.Frequency_of_Variants = false;
    }
  }
  GIV_CDFD_HETFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count - 1;
    }
    if (value == true) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count + 1;
    }
    this.GIV_CDFD_HET = value;
    if (
      this._1000g2015aug_all == false &&
      this.ExAC_ALL == false &&
      this.GIV_CDFD_AAF == false &&
      this.GIV_CDFD_HET == false &&
      this.GIV_CDFD_HOM_VAR == false &&
      this.GIV_Indian_AAF == false &&
      this.GIV_Indian_HET == false &&
      this.GIV_Indian_HOM_VAR == false &&
      this.ICGC_Id == false &&
      this.ICGC_Occurrence == false &&
      this.cg69 == false &&
      this.cosmic70 == false &&
      this.esp6500siv2_all == false &&
      this.gnomAD_exome_ALL == false &&
      this.gnomAD_genome_ALL == false &&
      this.nci60 == false
    ) {
      this.Frequency_of_Variants = false;
    }
  }
  GIV_CDFD_HOM_VARFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count - 1;
    }
    if (value == true) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count + 1;
    }
    this.GIV_CDFD_HOM_VAR = value;
    if (
      this._1000g2015aug_all == false &&
      this.ExAC_ALL == false &&
      this.GIV_CDFD_AAF == false &&
      this.GIV_CDFD_HET == false &&
      this.GIV_CDFD_HOM_VAR == false &&
      this.GIV_Indian_AAF == false &&
      this.GIV_Indian_HET == false &&
      this.GIV_Indian_HOM_VAR == false &&
      this.ICGC_Id == false &&
      this.ICGC_Occurrence == false &&
      this.cg69 == false &&
      this.cosmic70 == false &&
      this.esp6500siv2_all == false &&
      this.gnomAD_exome_ALL == false &&
      this.gnomAD_genome_ALL == false &&
      this.nci60 == false
    ) {
      this.Frequency_of_Variants = false;
    }
  }
  GIV_Indian_AAFFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count - 1;
    }
    if (value == true) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count + 1;
    }
    this.GIV_Indian_AAF = value;
    if (
      this._1000g2015aug_all == false &&
      this.ExAC_ALL == false &&
      this.GIV_CDFD_AAF == false &&
      this.GIV_CDFD_HET == false &&
      this.GIV_CDFD_HOM_VAR == false &&
      this.GIV_Indian_AAF == false &&
      this.GIV_Indian_HET == false &&
      this.GIV_Indian_HOM_VAR == false &&
      this.ICGC_Id == false &&
      this.ICGC_Occurrence == false &&
      this.cg69 == false &&
      this.cosmic70 == false &&
      this.esp6500siv2_all == false &&
      this.gnomAD_exome_ALL == false &&
      this.gnomAD_genome_ALL == false &&
      this.nci60 == false
    ) {
      this.Frequency_of_Variants = false;
    }
  }
  GIV_Indian_HETFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count - 1;
    }
    if (value == true) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count + 1;
    }
    this.GIV_Indian_HET = value;
    if (
      this._1000g2015aug_all == false &&
      this.ExAC_ALL == false &&
      this.GIV_CDFD_AAF == false &&
      this.GIV_CDFD_HET == false &&
      this.GIV_CDFD_HOM_VAR == false &&
      this.GIV_Indian_AAF == false &&
      this.GIV_Indian_HET == false &&
      this.GIV_Indian_HOM_VAR == false &&
      this.ICGC_Id == false &&
      this.ICGC_Occurrence == false &&
      this.cg69 == false &&
      this.cosmic70 == false &&
      this.esp6500siv2_all == false &&
      this.gnomAD_exome_ALL == false &&
      this.gnomAD_genome_ALL == false &&
      this.nci60 == false
    ) {
      this.Frequency_of_Variants = false;
    }
  }
  GIV_Indian_HOM_VARFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count - 1;
    }
    if (value == true) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count + 1;
    }
    this.GIV_Indian_HOM_VAR = value;
    if (
      this._1000g2015aug_all == false &&
      this.ExAC_ALL == false &&
      this.GIV_CDFD_AAF == false &&
      this.GIV_CDFD_HET == false &&
      this.GIV_CDFD_HOM_VAR == false &&
      this.GIV_Indian_AAF == false &&
      this.GIV_Indian_HET == false &&
      this.GIV_Indian_HOM_VAR == false &&
      this.ICGC_Id == false &&
      this.ICGC_Occurrence == false &&
      this.cg69 == false &&
      this.cosmic70 == false &&
      this.esp6500siv2_all == false &&
      this.gnomAD_exome_ALL == false &&
      this.gnomAD_genome_ALL == false &&
      this.nci60 == false
    ) {
      this.Frequency_of_Variants = false;
    }
  }
  ICGC_IdFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count - 1;
    }
    if (value == true) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count + 1;
    }
    this.ICGC_Id = value;
    if (
      this._1000g2015aug_all == false &&
      this.ExAC_ALL == false &&
      this.GIV_CDFD_AAF == false &&
      this.GIV_CDFD_HET == false &&
      this.GIV_CDFD_HOM_VAR == false &&
      this.GIV_Indian_AAF == false &&
      this.GIV_Indian_HET == false &&
      this.GIV_Indian_HOM_VAR == false &&
      this.ICGC_Id == false &&
      this.ICGC_Occurrence == false &&
      this.cg69 == false &&
      this.cosmic70 == false &&
      this.esp6500siv2_all == false &&
      this.gnomAD_exome_ALL == false &&
      this.gnomAD_genome_ALL == false &&
      this.nci60 == false
    ) {
      this.Frequency_of_Variants = false;
    }
  }
  ICGC_OccurrenceFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count - 1;
    }
    if (value == true) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count + 1;
    }
    this.ICGC_Occurrence = value;
    if (
      this._1000g2015aug_all == false &&
      this.ExAC_ALL == false &&
      this.GIV_CDFD_AAF == false &&
      this.GIV_CDFD_HET == false &&
      this.GIV_CDFD_HOM_VAR == false &&
      this.GIV_Indian_AAF == false &&
      this.GIV_Indian_HET == false &&
      this.GIV_Indian_HOM_VAR == false &&
      this.ICGC_Id == false &&
      this.ICGC_Occurrence == false &&
      this.cg69 == false &&
      this.cosmic70 == false &&
      this.esp6500siv2_all == false &&
      this.gnomAD_exome_ALL == false &&
      this.gnomAD_genome_ALL == false &&
      this.nci60 == false
    ) {
      this.Frequency_of_Variants = false;
    }
  }
  cg69FieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count - 1;
    }
    if (value == true) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count + 1;
    }
    this.cg69 = value;
    if (
      this._1000g2015aug_all == false &&
      this.ExAC_ALL == false &&
      this.GIV_CDFD_AAF == false &&
      this.GIV_CDFD_HET == false &&
      this.GIV_CDFD_HOM_VAR == false &&
      this.GIV_Indian_AAF == false &&
      this.GIV_Indian_HET == false &&
      this.GIV_Indian_HOM_VAR == false &&
      this.ICGC_Id == false &&
      this.ICGC_Occurrence == false &&
      this.cg69 == false &&
      this.cosmic70 == false &&
      this.esp6500siv2_all == false &&
      this.gnomAD_exome_ALL == false &&
      this.gnomAD_genome_ALL == false &&
      this.nci60 == false
    ) {
      this.Frequency_of_Variants = false;
    }
  }
  cosmic70FieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count - 1;
    }
    if (value == true) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count + 1;
    }
    this.cosmic70 = value;
    if (
      this._1000g2015aug_all == false &&
      this.ExAC_ALL == false &&
      this.GIV_CDFD_AAF == false &&
      this.GIV_CDFD_HET == false &&
      this.GIV_CDFD_HOM_VAR == false &&
      this.GIV_Indian_AAF == false &&
      this.GIV_Indian_HET == false &&
      this.GIV_Indian_HOM_VAR == false &&
      this.ICGC_Id == false &&
      this.ICGC_Occurrence == false &&
      this.cg69 == false &&
      this.cosmic70 == false &&
      this.esp6500siv2_all == false &&
      this.gnomAD_exome_ALL == false &&
      this.gnomAD_genome_ALL == false &&
      this.nci60 == false
    ) {
      this.Frequency_of_Variants = false;
    }
  }
  esp6500siv2_allFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count - 1;
    }
    if (value == true) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count + 1;
    }
    this.esp6500siv2_all = value;
    if (
      this._1000g2015aug_all == false &&
      this.ExAC_ALL == false &&
      this.GIV_CDFD_AAF == false &&
      this.GIV_CDFD_HET == false &&
      this.GIV_CDFD_HOM_VAR == false &&
      this.GIV_Indian_AAF == false &&
      this.GIV_Indian_HET == false &&
      this.GIV_Indian_HOM_VAR == false &&
      this.ICGC_Id == false &&
      this.ICGC_Occurrence == false &&
      this.cg69 == false &&
      this.cosmic70 == false &&
      this.esp6500siv2_all == false &&
      this.gnomAD_exome_ALL == false &&
      this.gnomAD_genome_ALL == false &&
      this.nci60 == false
    ) {
      this.Frequency_of_Variants = false;
    }
  }
  gnomAD_exome_ALLFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count - 1;
    }
    if (value == true) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count + 1;
    }
    this.gnomAD_exome_ALL = value;
    if (
      this._1000g2015aug_all == false &&
      this.ExAC_ALL == false &&
      this.GIV_CDFD_AAF == false &&
      this.GIV_CDFD_HET == false &&
      this.GIV_CDFD_HOM_VAR == false &&
      this.GIV_Indian_AAF == false &&
      this.GIV_Indian_HET == false &&
      this.GIV_Indian_HOM_VAR == false &&
      this.ICGC_Id == false &&
      this.ICGC_Occurrence == false &&
      this.cg69 == false &&
      this.cosmic70 == false &&
      this.esp6500siv2_all == false &&
      this.gnomAD_exome_ALL == false &&
      this.gnomAD_genome_ALL == false &&
      this.nci60 == false
    ) {
      this.Frequency_of_Variants = false;
    }
  }
  gnomAD_genome_ALLFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count - 1;
    }
    if (value == true) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count + 1;
    }
    this.gnomAD_genome_ALL = value;
    if (
      this._1000g2015aug_all == false &&
      this.ExAC_ALL == false &&
      this.GIV_CDFD_AAF == false &&
      this.GIV_CDFD_HET == false &&
      this.GIV_CDFD_HOM_VAR == false &&
      this.GIV_Indian_AAF == false &&
      this.GIV_Indian_HET == false &&
      this.GIV_Indian_HOM_VAR == false &&
      this.ICGC_Id == false &&
      this.ICGC_Occurrence == false &&
      this.cg69 == false &&
      this.cosmic70 == false &&
      this.esp6500siv2_all == false &&
      this.gnomAD_exome_ALL == false &&
      this.gnomAD_genome_ALL == false &&
      this.nci60 == false
    ) {
      this.Frequency_of_Variants = false;
    }
  }
  nci60FieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count - 1;
    }
    if (value == true) {
      this.Frequency_of_Variants_Count = this.Frequency_of_Variants_Count + 1;
    }
    this.nci60 = value;
    if (
      this._1000g2015aug_all == false &&
      this.ExAC_ALL == false &&
      this.GIV_CDFD_AAF == false &&
      this.GIV_CDFD_HET == false &&
      this.GIV_CDFD_HOM_VAR == false &&
      this.GIV_Indian_AAF == false &&
      this.GIV_Indian_HET == false &&
      this.GIV_Indian_HOM_VAR == false &&
      this.ICGC_Id == false &&
      this.ICGC_Occurrence == false &&
      this.cg69 == false &&
      this.cosmic70 == false &&
      this.esp6500siv2_all == false &&
      this.gnomAD_exome_ALL == false &&
      this.gnomAD_genome_ALL == false &&
      this.nci60 == false
    ) {
      this.Frequency_of_Variants = false;
    }
  }
  GeneVariantFieldChange(values: any) {
    var value = values.currentTarget.checked;
    this.Gene_Variant_Details = value;
    if (
      this.AAChange_refGene == false &&
      this.ExonicFunc_refGene == false &&
      this.Func_refGene == false &&
      this.Gene_refGene == false &&
      this.GeneDetail_refGene == false &&
      this.Total_DP == false &&
      this.Zygosity == false &&
      this.genomicSuperDups == false &&
      this.phastConsElements46way == false
    ) {
      this.AAChange_refGene = true;
      this.Gene_Variant_Details_Count++;
    }
  }
  gene_variant_sub_class = false;
  showgenevariantSubClass() {
    this.gene_variant_sub_class = !this.gene_variant_sub_class;
  }
  AAchangeFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count - 1;
    }
    if (value == true) {
      this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count + 1;
    }
    this.AAChange_refGene = value;
    if (
      this.AAChange_refGene == false &&
      this.ExonicFunc_refGene == false &&
      this.Func_refGene == false &&
      this.Gene_refGene == false &&
      this.GeneDetail_refGene == false &&
      this.Total_DP == false &&
      this.Zygosity == false &&
      this.genomicSuperDups == false &&
      this.phastConsElements46way == false
    ) {
      this.Gene_Variant_Details = false;
    }
  }
  ExonicFuncFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count - 1;
    }
    if (value == true) {
      this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count + 1;
    }
    this.ExonicFunc_refGene = value;
    if (
      this.AAChange_refGene == false &&
      this.ExonicFunc_refGene == false &&
      this.Func_refGene == false &&
      this.Gene_refGene == false &&
      this.GeneDetail_refGene == false &&
      this.Total_DP == false &&
      this.Zygosity == false &&
      this.genomicSuperDups == false &&
      this.phastConsElements46way == false
    ) {
      this.Gene_Variant_Details = false;
    }
  }
  Func_refFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count - 1;
    }
    if (value == true) {
      this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count + 1;
    }
    this.Func_refGene = value;
    if (
      this.AAChange_refGene == false &&
      this.ExonicFunc_refGene == false &&
      this.Func_refGene == false &&
      this.Gene_refGene == false &&
      this.GeneDetail_refGene == false &&
      this.Total_DP == false &&
      this.Zygosity == false &&
      this.genomicSuperDups == false &&
      this.phastConsElements46way == false
    ) {
      this.Gene_Variant_Details = false;
    }
  }
  Gene_refFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count - 1;
    }
    if (value == true) {
      this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count + 1;
    }
    this.Gene_refGene = value;
    if (
      this.AAChange_refGene == false &&
      this.ExonicFunc_refGene == false &&
      this.Func_refGene == false &&
      this.Gene_refGene == false &&
      this.GeneDetail_refGene == false &&
      this.Total_DP == false &&
      this.Zygosity == false &&
      this.genomicSuperDups == false &&
      this.phastConsElements46way == false
    ) {
      this.Gene_Variant_Details = false;
    }
  }
  GeneDetailFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count - 1;
    }
    if (value == true) {
      this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count + 1;
    }
    this.GeneDetail_refGene = value;
    if (
      this.AAChange_refGene == false &&
      this.ExonicFunc_refGene == false &&
      this.Func_refGene == false &&
      this.Gene_refGene == false &&
      this.GeneDetail_refGene == false &&
      this.Total_DP == false &&
      this.Zygosity == false &&
      this.genomicSuperDups == false &&
      this.phastConsElements46way == false
    ) {
      this.Gene_Variant_Details = false;
    }
  }
  Total_DPFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count - 1;
    }
    if (value == true) {
      this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count + 1;
    }
    this.Total_DP = value;
    if (
      this.AAChange_refGene == false &&
      this.ExonicFunc_refGene == false &&
      this.Func_refGene == false &&
      this.Gene_refGene == false &&
      this.GeneDetail_refGene == false &&
      this.Total_DP == false &&
      this.Zygosity == false &&
      this.genomicSuperDups == false &&
      this.phastConsElements46way == false
    ) {
      this.Gene_Variant_Details = false;
    }
  }
  ZygosityFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count - 1;
    }
    if (value == true) {
      this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count + 1;
    }
    this.Zygosity = value;
    if (
      this.AAChange_refGene == false &&
      this.ExonicFunc_refGene == false &&
      this.Func_refGene == false &&
      this.Gene_refGene == false &&
      this.GeneDetail_refGene == false &&
      this.Total_DP == false &&
      this.Zygosity == false &&
      this.genomicSuperDups == false &&
      this.phastConsElements46way == false
    ) {
      this.Gene_Variant_Details = false;
    }
  }
  genomicSuperDupsFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count - 1;
    }
    if (value == true) {
      this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count + 1;
    }
    this.genomicSuperDups = value;
    if (
      this.AAChange_refGene == false &&
      this.ExonicFunc_refGene == false &&
      this.Func_refGene == false &&
      this.Gene_refGene == false &&
      this.GeneDetail_refGene == false &&
      this.Total_DP == false &&
      this.Zygosity == false &&
      this.genomicSuperDups == false &&
      this.phastConsElements46way == false
    ) {
      this.Gene_Variant_Details = false;
    }
  }
  phastConsElements46wayFieldChange(values: any) {
    var value = values.currentTarget.checked;
    if (value == false) {
      this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count - 1;
    }
    if (value == true) {
      this.Gene_Variant_Details_Count = this.Gene_Variant_Details_Count + 1;
    }
    this.phastConsElements46way = value;
    if (
      this.AAChange_refGene == false &&
      this.ExonicFunc_refGene == false &&
      this.Func_refGene == false &&
      this.Gene_refGene == false &&
      this.GeneDetail_refGene == false &&
      this.Total_DP == false &&
      this.Zygosity == false &&
      this.genomicSuperDups == false &&
      this.phastConsElements46way == false
    ) {
      this.Gene_Variant_Details = false;
    }
  }
  applyFilter() {}
  defaultFilter() {
    var default_list = [];
    for (let j of this.value_list) {
      if (
        (j.gnomAD_genome_ALL == "NA" || j.gnomAD_genome_ALL <= 0.01) &&
        (j.gnomAD_exome_ALL == "NA" || j.gnomAD_exome_ALL <= 0.01) &&
        (j._1000g2015aug_all == "NA" || j._1000g2015aug_all <= 0.01) &&
        (j.esp6500siv2_all == "NA" || j.esp6500siv2_all <= 0.01) &&
        (j.ExAC_ALL == "NA" || j.ExAC_ALL <= 0.01)
      ) {
        default_list.push(j);
      }
    }
    this.value_list = default_list;
  }
  valueChange(a) {
    a.checked = !a.checked;
    console.log(a.checked);
    // console.log(a.column);
    var col = a.column;
    // console.log(a.column);
    // console.log(a.value);
    if (a.checked == true) {
      for (let j of this.value_list) {
        var val = a.value;
        if (a.column == "1000g2015aug_all") {
          col = "_1000g2015aug_all";
          val = "_1000g2015aug_all";
        }
        if (j[col] == val || j[col] <= val) {
          //   console.log(j, "jjjj");
        }
      }
    }
  }
  editForm() {
    this.addForm = true;
  }
  config = {
    displayKey: "description", //if objects array passed which key to be displayed defaults to description
    search: true, //true/false for the search functionlity defaults to false,
    height: "auto", //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: "Column", // text to be displayed when no item is selected defaults to Select,
    customComparator: () => {}, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    limitTo: this.dropdownOptions.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: "more", // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: "No results found!", // text to be displayed when no items are found while searching
    searchPlaceholder: "Search", // label thats displayed in search input,
    searchOnKey: "name", // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
    clearOnSelection: false // clears search criteria when an option is selected if set to true, default is false
  };
  config1 = {
    displayKey: "description", //if objects array passed which key to be displayed defaults to description
    search: true, //true/false for the search functionlity defaults to false,
    height: "auto", //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: "Select value from dropdown", // text to be displayed when no item is selected defaults to Select,
    customComparator: () => {}, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    limitTo: this.unique_value.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: "more", // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: "No results found!", // text to be displayed when no items are found while searching
    searchPlaceholder: "Search", // label thats displayed in search input,
    searchOnKey: "name", // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
    clearOnSelection: false // clears search criteria when an option is selected if set to true, default is false
  };

  addtoDefault() {
    var description = this.addtoDefaultForm.value.description;
    var column = this.addtoDefaultForm.value.column;
    var type = this.addtoDefaultForm.value.type;
    var condition = this.addtoDefaultForm.value.condition;
    var value = this.addtoDefaultForm.value.value;
    if (column == "1000g2015aug_all") {
      column = "_1000g2015aug_all";
    } else if (column == "AAChange.refGene") {
      column = "AAChange_refGene";
    } else if (column == "ExonicFunc.refGene") {
      column = "ExonicFunc_refGene";
    } else if (column == "Func.refGene") {
      column = "Func_refGene";
    } else if (column == "Gene_refGene") {
      column = "Gene_refGene";
    } else if (column == "GeneDetail.refGene") {
      column = "GeneDetail_refGene";
    } else if (column == "GT:AD:AF:DP:F1R2:F2R1:GQ:PL:GP:PRI:SB:MB") {
      column = "GT_AD_AF_DP_F1R2_F2R1_GQ_PL_GP_PRI_SB_MB";
    }
    var obj = {
      desc: description,
      column: column,
      condition: condition,
      valueType: type,
      value: value,
      checked: true
    };
    this.filters_array.push(obj);
    console.log(this.filters_array);
    this.addForm = false;
  }
  repeat_array = [];
  addNewFilter() {
    // console.log(this.filters_array);
    // var array1=[]
    // for(let i in )

    var filter_order_array = [];
    console.log(this.filters_array);
    for (let i = 0; i < this.filters_array.length; i++) {
      var value = [];
      var obj = [];
      var type = [];
      var condition = [];
      var count = 0;
      console.log(this.filters_array[i].checked);
      if (this.filters_array[i].checked == true) {
        if (i == 0) {
          this.repeat_array.push(this.filters_array[i].column);
          count = 0;
        }
        if (i != 0) {
          for (let k of this.repeat_array) {
            if (this.filters_array[i].column == k) {
              count = 1;
            }
          }
        }
        if (count == 0) {
          value.push(this.filters_array[i].value);
          type.push(this.filters_array[i].valueType);
          condition.push(this.filters_array[i].condition);
          obj.push({
            value: this.filters_array[i].value,
            type: this.filters_array[i].valueType,
            condition: this.filters_array[i].condition
          });
          for (let j = i + 1; j < this.filters_array.length; j++) {
            if (this.filters_array[i].column == this.filters_array[j].column) {
              this.repeat_array.push(this.filters_array[j].column);
              value.push(this.filters_array[j].value);
              type.push(this.filters_array[i].valueType);
              condition.push(this.filters_array[i].condition);
              obj.push({
                value: this.filters_array[j].value,
                type: this.filters_array[j].valueType,
                condition: this.filters_array[j].condition
              });
            }
          }
          filter_order_array.push({
            name: this.filters_array[i].column,
            obj: obj
          });
        }
      }
    }

    console.log(filter_order_array);
    var count = 0;
    console.log(this.value_list);
    for (let j of filter_order_array) {
      var obj_array = [];
      //   if (count == 0) {
      //     this.value_list = this.value_list;
      //     console.log(this.value_list);
      //   } else {
      //     this.value_list = this.new_filtered_array;
      //     console.log(this.value_list);
      //   }
      //   console.log(j);
      var name = j.name;
      if (j.name == "1000g2015aug_all") {
        name = "_1000g2015aug_all";
      }
      //   console.log(name);
      //   console.log(j);
      obj_array = j.obj;
      //   console.log(obj_array);
      var length = filter_order_array.length;
      //   if (count == 0) {
      for (let u = 0; u < length; u++) {
        // console.log("yoy");
        this.new_filtered_array = [];
        for (let k of obj_array) {
          for (let r of this.value_list) {
            // console.log(r);

            if (k.type == "String") {
              if (k.condition == "=") {
                if (r[name] == k.value) {
                  //   console.log(r);
                  //   console.log(r[name]);
                  this.new_filtered_array.push(r);
                  // break;
                }
              }
              if (k.condition == "cont") {
                console.log("you");
                var name1 = r[name];
                console.log(name1);
                var selectedname = k.value;
                console.log(selectedname);
                for (let i = 0; i < name1.length - 1; i++) {
                  var word = name1[i];
                  for (let j = i + 1; j < name1.length; j++) {
                    word = word + name1[j];
                    // console.log(word);
                    if (word == selectedname) {
                      console.log(selectedname);
                      this.new_filtered_array.push(r);
                      break;
                    }
                  }
                }
              }
            }
            if (k.type == "Number") {
              if (k.condition == "<=") {
                if (r[name] <= +k.value) {
                  this.new_filtered_array.push(r);
                  // break;
                }
              }
              if (k.condition == ">=") {
                if (r[name] >= +k.vale) {
                  this.new_filtered_array.push(r);
                }
              }
              if (k.condition == "=") {
                if (r[name] == +k.value) {
                  this.new_filtered_array.push(r);
                }
              }
            }
          }
        }
        this.value_list = this.new_filtered_array;
      }
    }
    // this.value_list = this.new_filtered_array;
    console.log(this.new_filtered_array);
    var uniqueArray = [];
    // for (let i = 0; i < this.new_filtered_array.length; i++) {
    //   if (uniqueArray.indexOf(this.new_filtered_array[i]) === -1) {
    //     uniqueArray.push(this.new_filtered_array[i]);
    //   }
    // }
    // console.log(uniqueArray);
    this.value_list = this.new_filtered_array;
  }
  inputChange(event, item) {
    item.value = event.target.value;
    for (let i of this.filters_array) {
      if (i == item) {
        item.value = i.value;
      }
    }
    console.log(this.filters_array);
  }
  selectionChanged(event) {
    this.unique_value = [];
    var col_selected = event.value;
    if (col_selected == "1000g2015aug_all") {
      col_selected = "_1000g2015aug_all";
    } else if (col_selected == "AAChange.refGene") {
      col_selected = "AAChange_refGene";
    } else if (col_selected == "ExonicFunc.refGene") {
      col_selected = "ExonicFunc_refGene";
    } else if (col_selected == "Func.refGene") {
      col_selected = "Func_refGene";
    } else if (col_selected == "Gene_refGene") {
      col_selected = "Gene_refGene";
    } else if (col_selected == "GeneDetail.refGene") {
      col_selected = "GeneDetail_refGene";
    } else if (col_selected == "GT:AD:AF:DP:F1R2:F2R1:GQ:PL:GP:PRI:SB:MB") {
      col_selected = "GT_AD_AF_DP_F1R2_F2R1_GQ_PL_GP_PRI_SB_MB";
    }
    var whole_value = [];
    for (let i of this.dummy_list) {
      whole_value.push(String(i[col_selected]));
    }
    var uniqueArray = [];
    for (let i = 0; i < whole_value.length; i++) {
      if (uniqueArray.indexOf(whole_value[i]) === -1) {
        uniqueArray.push(whole_value[i]);
      }
    }
    for (let j = 0; j < 101; j++) {
      this.unique_value.push(uniqueArray[j]);
      if (j > uniqueArray.length) {
        break;
      }
    }
  }
  valueChanged(event) {
    console.log(event);
  }
  conditionChange(event) {
    console.log(event.target.value);
    if (event.target.value == "Number") {
      this.condition_list = ["=", "<=", ">="];
    } else {
      this.condition_list = ["=", "cont"];
    }
  }
  selectionChange(a) {
    console.log(a);
  }
}
