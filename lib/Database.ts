import { dataOpts } from "./Context";
import { EventEmitter } from "events";
import Util from "./util/Util";

export = class Database<K, V> extends EventEmitter {
    /** To help track of what database you will use */
    static database: Map<string, string> = new Map();

    public data: Map<K, V> = new Map();

    constructor(opts: dataOpts) {
        super();

        let data;
        
        let number = Util.ifNumber(opts, this);

        if (number) {
            data = opts.database?.forEach((v) => v.port.toString());
        } else {
            data = opts.database?.forEach((v) => v.port);
        }
    }

    public getData(key: K): V | undefined {
        return this.data.get(key);
    }

    public deleteData(key: K) {
        return this.data.delete(key);
    }

    public getValues(keys: K[]): V[] {
        let values: V[] = [];

        for (let key of keys) {
            this.data.get(key);
        }

        return values;
    }
}