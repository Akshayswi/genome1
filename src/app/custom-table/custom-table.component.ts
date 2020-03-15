import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
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
  Func_refgene = false;
  Gene_refgene = false;
  omimgene = false;
  OMIMphenotype = false;
  OMIMgenename = false;
  GeneDetailrefGene = false;
  ExonicFuncrefGene = false;
  AAChangerefGene = false;
  phastConsElements46way = false;
  genomicSuperDups = false;
  _1000g2015aug_all = false;
  esp6500siv2_all = false;
  ExAC_ALL = false;
  gnomAD_exome_ALL = false;
  gnomAD_genome_ALL = false;
  cg69 = false;
  nci60 = false;
  GIV_CDFD_AAF = false;
  GIV_CDFD_HET = false;
  GIV_CDFD_HOM_VAR = false;
  GIV_Indian_AAF = false;
  GIV_Indian_HET = false;
  GIV_Indian_HOM_VAR = false;
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

  ngOnInit(): void {
    this.spinner.show();
    this.http.get("http://localhost:8000/viewset/column/").subscribe(data => {
      console.log(data);
      var a = JSON.stringify(data);
      var b = JSON.parse(a);
      var show_list = [];
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
        if (i.colpreflabel == "000g2015aug_all") {
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
          this.AAChangerefGene = true;
        }
        if (i.colpreflabel == "ExonicFunc.refGene") {
          this.ExonicFuncrefGene = true;
        }
        if (i.colpreflabel == "Func.refGene") {
          this.Func_refgene = true;
        }
        if (i.colpreflabel == "Gene.refGene") {
          this.Gene_refgene = true;
        }
        if (i.colpreflabel == "GeneDetail.refGene") {
          this.GeneDetailrefGene = true;
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
      console.log("yyy");
    });
    this.http.get("http://localhost:8000/viewset/data/").subscribe(
      data => {
        var a = JSON.stringify(data);
        var c = "";
        var b = JSON.parse(a);
        this.value_list = b;
        console.log(this.value_list);
        this.keys = Object.keys(b[0]);
        console.log(this.keys);
        this.spinner.hide();
      },
      error => {
        this.spinner.hide();
      }
    );
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
}
