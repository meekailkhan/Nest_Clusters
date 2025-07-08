import HashRing from 'hashring';
import {SERVICES} from '../services.cofing';

export class ConsistentHasher {
    private ring : HashRing;

    constructor(){
        this.ring = new HashRing(SERVICES);
    }

    getNode(key:string):string{
        return this.ring.get(key)
    }
}
