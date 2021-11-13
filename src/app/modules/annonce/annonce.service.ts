import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HostService } from 'src/app/shared/services/host.service';
import { HttpClientRequest } from 'src/app/shared/services/http-request.service';
import { urlsConstants } from '../utils/urls-constants';

@Injectable({
    providedIn: 'root'
})
export class BienService {
    host: string;
    private urlGetBiens= urlsConstants.urlGetBien;
    private ulrDeleteBien = urlsConstants.urlDeleteBien;
    constructor(private http: HttpClientRequest, private hostService: HostService) {
      this.host = this.hostService.getAuthHost();
    }
    
    /**
     * get Bien
     */
    getBien(): Observable<any>{
      return this.http.getObject(this.hostService.getAuthHost() + this.urlGetBiens);
    }
    /**
     * delete Bien
     * @param bien
     * @returns
     */
    deleteBien(bien:any):Observable<any>{
      return this.http.deleteObject(this.hostService.getAuthHost() + this.ulrDeleteBien+"/"+bien.id);
    }
}