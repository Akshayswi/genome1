import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fileToUpload: File = null;
  constructor() { }

  ngOnInit(): void {
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

}
