import { Injectable } from '@angular/core';
import { ConnectionService } from '../../../platform';

@Injectable()
export class RepairService {
   constructor(private connectionService: ConnectionService) {
   }
}
