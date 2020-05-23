import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryData } from 'src/models/data/category.data';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryList: CategoryData[];

  constructor(private http: HttpClient) { }

  getCategories(): Promise<CategoryData[]> {
    return this.http.get<CategoryData[]>('api/category/getCategories')
    .pipe(tap(response => this.categoryList = response))
    .toPromise();
  }

  get categories() {
    return this.categoryList;
  }
}
