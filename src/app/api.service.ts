import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';
import { Product } from './product';

@Injectable({
  providedIn: 'root'  
})
export class ApiService {

  private apiUrl = 'http://localhost:3000';

}
