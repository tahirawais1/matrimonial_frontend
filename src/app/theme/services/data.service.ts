import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  listinings;

  constructor(private httpClient: HttpClient) {

  }

  getListing() {
    return this.httpClient.get("api/getAllProfiles");
  }

  getOneList(id) {
    return this.httpClient.get("api/profile/" + id);
  }

  signupAPI(body) {
    return this.httpClient.post("api/signUp", body);
  }

  updateProfile(body) {
    return this.httpClient.post("api/updateProfile" , body);
  }

  searching(body) {
    return this.httpClient.post("api/search", body);
  }

  login(body) {
    return this.httpClient.post("api/auth", body );
  }

  deleteMethod(id) {
    return this.httpClient.delete("api/deletePro/", id);
  }

  imageUpload(body) {
    return this.httpClient.post("api/imagePath", body);
  }


  

}



