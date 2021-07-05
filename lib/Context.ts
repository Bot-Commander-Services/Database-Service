export type dataType = "mongo" | "sql" | "redis" | "json";

export interface dataOpts {
    path: string;
    json: boolean;
    /**
     * *Only needed if you want outside connections*
     */
    database?: dataBuilder[];
}

export interface dataBuilder {
    port: string;
    type: dataType;
    host: string | number;
}