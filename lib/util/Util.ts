import EventEmitter from "events";
import { dataOpts } from "../Context";

export = {
    ifNumber: function(opts: dataOpts, event: EventEmitter) {
        let values: boolean[] = [];

        if (opts.database === undefined) return event.emit("warn", "database is not defined.");

        for (let n of opts.database) {
            if (Number.isInteger(n.host)) {
                values.push(true);
            } else {
                values.push(false);
            }
        }

        return values;
    }
}