import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class ListService {

 constructor(private httpClient: HttpClient){ }

   getList(): Observable<any[]>{ //TODO need to build item modal object
   console.log('get list called');
    return this.httpClient.get<any[]>(`/items`);
   }
}
