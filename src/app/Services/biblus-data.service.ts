import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { onlyimg } from '../interfaces/slider1.interface';
import { Observable } from 'rxjs';
import { bestsellerData, bestsellerDataROOT } from '../interfaces/slider2.interface';
import { bloginfo,blogROOT } from '../interfaces/blog.interface';
import { authorROOT } from '../interfaces/authors.interface';
import { kidsROOT } from '../interfaces/kids.interface';



@Injectable({
  providedIn: 'root'
})
export class BiblusDataService {

  

  

  constructor(public _http: HttpClient) { }


  public _Baseurl1 = 'https://apiv1.biblusi.ge/api/slider';

  slide1(): Observable<onlyimg[]> {
    return this._http.get<onlyimg[]>(this._Baseurl1);
  }


  public _baseurl2 = 'https://apiv1.biblusi.ge/api/book?best=1&author=1&rate=1&category=1'
  private _baseurl2vol2 = 'https://apiv1.biblusi.ge/api/book?best=1';
  private baseUrlG = 'https://apiv1.biblusi.ge/api';


  slide2(): Observable<bestsellerDataROOT>{
    return this._http.get<bestsellerDataROOT>(this._baseurl2);

  }

  getBestsellers(page: number): Observable<bestsellerDataROOT> {
    const url = `${this._baseurl2vol2}&page=${page}`;
    return this._http.get<bestsellerDataROOT>(url);
  }

  getBookDetails(bookId: string): Observable<bestsellerDataROOT> {
    const url = `${this.baseUrlG}/book/${bookId}`;
    return this._http.get<bestsellerDataROOT>(url);
  }

  public _baseurl3 = 'https://apiv1.biblusi.ge/api/blog?limit=6'
  public _baseurl3Vol2 = 'https://apiv1.biblusi.ge/api/blog?limit=10000'
  public _baseurlID = 'https://apiv1.biblusi.ge/api'

  blog(): Observable<blogROOT>{
    return this._http.get<blogROOT>(this._baseurl3);

  }
  blog2(): Observable<blogROOT>{
    return this._http.get<blogROOT>(this._baseurl3Vol2)
  }
  blogwithID(blogId :string):Observable<blogROOT>{
    const url = `${this._baseurlID}/blog/${blogId}`
    return this._http.get<blogROOT>(url)
  }

  public _baseurl4 = 'https://apiv1.biblusi.ge/api/author?book=1&random=1'
  public _baseurl4Vol2 = 'https://apiv1.biblusi.ge/api/author?page=1'
  public _baseurlID2 = 'https://apiv1.biblusi.ge/api'

  authors(): Observable<authorROOT>{
    return this._http.get<authorROOT>(this._baseurl4);
  }

  displayallAuthors(page: number):Observable<authorROOT>{
    const url = `${this._baseurl4Vol2}&page=${page}`;
    return this._http.get<authorROOT>(url);
  }

  authorswithID(authorId: string): Observable<authorROOT>{
    const url = `${this._baseurlID2}/author/${authorId}`
    return this._http.get<authorROOT>(url)
  }


  public _baseurl5 = 'https://apiv1.biblusi.ge/api/book?author=1&category_id=300&page=1&per_page=24&order=created_at&sort=desc'
  public _baseurl5vol2 = 'https://apiv1.biblusi.ge/api/book?page=1'
  public _baseurl5ID = 'https://apiv1.biblusi.ge/api'


  displayallkidsbooks(page: number): Observable<kidsROOT>{
    const url = `${this._baseurl5}&page=${page}`;
    return this._http.get<kidsROOT>(url)
  }

  kidsbookswithId(kidsId: string): Observable<kidsROOT>{
    const url = `${this._baseurl5ID}/book/${kidsId}`;
    return this._http.get<kidsROOT>(url);
  }


  public _baseurl6 = 'https://apiv1.biblusi.ge/api/book?author=1&category_id=305&page=1&per_page=24&order=created_at&sort=desc'
  public _baseurl6ID = 'https://apiv1.biblusi.ge/api'

  displayallyouthbooks(page: number): Observable<kidsROOT>{
    const url = `${this._baseurl6}&page=${page}`;
    return this._http.get<kidsROOT>(url)
  }

  youthbookswithId(youthId: string): Observable<kidsROOT>{
    const url = `${this._baseurl6ID}/book/${youthId}`;
    return this._http.get<kidsROOT>(url);
  }

}