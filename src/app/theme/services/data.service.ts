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
    return this.httpClient.get("https://boiling-woodland-13435.herokuapp.com/api/getAllProfiles");
  }

  getOneList(id) {
    return this.httpClient.get("https://boiling-woodland-13435.herokuapp.com/api/profile/" + id);
  }

  signupAPI(body) {
    return this.httpClient.post("https://boiling-woodland-13435.herokuapp.com/api/signUp", body);
  }

  updateProfile(body) {
    return this.httpClient.post("https://boiling-woodland-13435.herokuapp.com/api/updateProfile" , body);
  }

  searching(body) {
    return this.httpClient.post("https://boiling-woodland-13435.herokuapp.com/api/search", body);
  }

  login(body) {
    return this.httpClient.post("https://boiling-woodland-13435.herokuapp.com/api/auth", body );
  }

  deleteMethod(id) {
    return this.httpClient.delete("https://boiling-woodland-13435.herokuapp.com/api/delete", id);
  }

  imageUpload(body) {
    return this.httpClient.post("https://boiling-woodland-13435.herokuapp.com/api/imagePath", body);
  }


  

}



