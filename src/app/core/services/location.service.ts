import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BASE_URL } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private httpClient: HttpClient) {}

  // ! Haven't found API
  // should return list of regions 
  public getRegions = () => this.httpClient.get(`${BASE_URL}`);

  // should return list of countries
  public getRegion =(region: string) => this.httpClient.get(`${BASE_URL}/region/${region}`);
  
  // should return specific country data
  public getCountry = (countryName: string) => this.httpClient.get(`${BASE_URL}/name/${countryName}`);
}
