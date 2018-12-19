import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/app-config';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {
  baseUrl = '';
  constructor(private http: HttpClient, private appconf: AppConfig) {
    this.baseUrl = this.appconf.load().API_ENDPOINT + 'api/customer/';
  }
  GetAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl);
  }
  GetCustomerById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseUrl}${customerId}`);
  }
  CreateCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}`, customer);
  }
  UpdateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.baseUrl}`, customer);
  }
  DeleteCustomer(customerId: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}${customerId}`);
  }
}
