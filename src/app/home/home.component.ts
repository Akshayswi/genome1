import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fileToUpload: File = null;
  showUpload=false
  sampleId:String;
  age:number;
  sex:String;
  clinical_features:String;
  consanguinity:String;
  family_affected:String;
  family_details:String;
  dataset_type:String;
  dataset_path:String;
  detailFormGroup=new FormGroup({sampleId:new FormControl(''),age:new FormControl(),sex:new FormControl(''),clinicalFeatures:new FormControl(''),
                                consanguinity:new FormControl(''),familyAffected:new FormControl(''),detailsofFamily:new FormControl(''),datasetType:new FormControl(''),datasetPath:new FormControl('')})
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  onSubmit(){
    this.showUpload=true
    this.sampleId=this.detailFormGroup.value.sampleId
    this.age=this.detailFormGroup.value.age
    this.sex=this.detailFormGroup.value.sex
    this.clinical_features=this.detailFormGroup.value.clinicalFeatures
    this.consanguinity=this.detailFormGroup.value.consanguinity
    this.family_affected=this.detailFormGroup.value.familyAffected
    this.family_details=this.detailFormGroup.value.detailsofFamily
    this.dataset_type=this.detailFormGroup.value.datasetType
    this.dataset_path=this.detailFormGroup.value.datasetPath
    console.log(this.detailFormGroup.value.sampleId)
    // const httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
    this.http.post("http://localhost:8000/details/",{
      sample_id:this.sampleId,age:this.age,sex:this.sex,clinical_features:this.clinical_features,consanguinity:this.consanguinity,family_affected:this.family_affected,details_family_affected:this.family_details,
      dataset_type:this.dataset_type,dataset_path:this.dataset_path
                      }).subscribe(data=>{
                                                      console.log(data)
                                                     })
  }
  
  postRequest(){

  }


}
