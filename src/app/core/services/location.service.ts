import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BASE_URL } from '../constants/api';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private httpClient: HttpClient) {}

  // ! Haven't found API
  // should return list of regions 
  // public getRegions = () => this.httpClient.get(`${BASE_URL}`);

  // should return list of countries
  public getRegion = (region: string): Observable<Country[]> => (
    this.httpClient.get(`${BASE_URL}/region/${region}`) as Observable<Country[]>
  );
  
  // should return specific country data
  public getCountry = (countryName: string): Observable<Country> => (
    this.httpClient.get(`${BASE_URL}/alpha/${countryName}`) as Observable<Country>
  );
}
