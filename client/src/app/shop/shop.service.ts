import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {IPagination} from "../shared/models/pagination";
import {IBrand} from "../shared/models/brand";
import {IType} from "../shared/models/productType";
import {map, take} from "rxjs/operators";
import {ShopParams} from "../shared/models/shopParams";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl= environment.baseUrl;

  constructor(private http:HttpClient) { }


  getProducts(shopParams:ShopParams){
    let params = new HttpParams();
    if (shopParams.branId !== 0){
      params = params.append('brandId',shopParams.branId.toString());
    }
    if (shopParams.typeId!== 0){
      params = params.append('typeId',shopParams.typeId.toString());
    }
    if (shopParams.search){
      params=params.append('search',shopParams.search);
    }
    params = params.append('sort',shopParams.sort);
    params = params.append('pageIndex',shopParams.pageNumber.toString());
    params = params.append('pageSize',shopParams.pageSize.toString());

    return this.http.get<IPagination>(this.baseUrl+'products',{observe:'response',params})
      .pipe(
        map(response =>{
          return response.body;
        })
      );
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl+'products/brands')
  }

  getTypes(){
    return this.http.get<IType[]>(this.baseUrl+'products/types')
  }
}
