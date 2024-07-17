import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
  getCustomers(){
    return this.http.get(`${environment.apiUrlforGet}`);
  }
  register(user:any){
    return this.http.post(`${environment.apiUrlRegister}`, user);
  } 
  login(user:any){
    return this.http.post(`${environment.apiUrlLogin}`, user);
  } 
  addCustomer(customer:any){
    return this.http.post(`${environment.apiUrlAddCustomer}`, customer);
  }
  deleteCustomer(id:any){
    return this.http.delete(`${environment.apiUrlDeleteCustomer}/${id}`)
  }
  updateCustomer(customer:any){
    return this.http.put(`${environment.apiUrlUpdateCustomer}`, customer);
  }
}
