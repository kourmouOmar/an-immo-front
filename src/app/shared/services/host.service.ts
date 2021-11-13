import {Injectable} from '@angular/core';
import { environment } from '../../envirenements/envirenement';

@Injectable()
export class HostService {
  sigaiHost: string;
  constructor() {
    this.sigaiHost = environment.imoHost;
  }

  getAuthHost() {
    return this.sigaiHost;
  }

 
}
