import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  Binarydata: any;
  loading: boolean = false;
  file!: File;
  errorMsg: any;
  alert: boolean = false;
  constructor(private http: HttpClient) { }
  data = [{ response: "\ufffdPNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000\ufffd\u0000\u0000\u0000\ufffd\b\u0002\u0000\u0000\u0000\ufffd\ufffd\ufffd\ufffd\u0000\u0000\u0000\u0004gAMA\u0000\u0000\ufffd\ufffd\u000b\ufffda\u0005\u0000\u0000\u0000 cHRM\u0000\u0000z&\u0000\u0000\ufffd\ufffd\u0000\u0000\ufffd\u0000\u0000\u0000\ufffd\ufffd\u0000\u0000u0\u0000\u0000\ufffd`\u0000\u0000:\ufffd\u0000\u0000\u0017p\ufffd\ufffdQ<\u0000\u0000\u0000\u0006bKGD\u0000\ufffd\u0000\ufffd\u0000\ufffd\ufffd\ufffd\ufffd\ufffd\u0000\u0000\u0000\u0001orNT\u0001Ϣw\ufffd\u0000\u0000\ufffd\u0000IDATxڄ\ufffdY\ufffdmY\ufffd\u001e\ufffdŰ\ufffd\ufffdÙ" }]
  ngOnInit(): void {
    // this.http.get('').subscribe((data2)=>{
    //   console.log(data2)
    // })
  }
  onChange(event: any) {

    this.file = event.target.files[0];
    console.log(this.file)

  }
  onUpload() {
    const formData = new FormData();
    formData.append("excel", this.file, this.file.name);
    this.http.post('http://192.168.21.158:4000/uploads', formData).subscribe((data: any) => {
      console.log(data)
      this.Binarydata = data.response.data;
      console.log(this.Binarydata);
      
      
    }, (error: any) => {
      this.errorMsg=error.error.response;
      console.log(this.errorMsg)
      this.alert = !this.alert;
    })
  }

}
