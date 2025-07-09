import {SERVICES} from '../services.cofing';
const HashRing = require('hashring');

export class ConsistentHasher {
    private ring : InstanceType<typeof HashRing>;

    constructor(){
        this.ring = new HashRing(SERVICES);
    }

    getNode(key:string):string{
        return this.ring.get(key)
    }
}
