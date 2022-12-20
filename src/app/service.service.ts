import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
   baseUrl=""
  constructor(private http:HttpClient) { 
    
  }
  upload(file:any){
    const formData = new FormData();
    formData.append("file",file, file.name)
  return this.http.post(this.baseUrl,formData)
  }
}
