export interface RedisAppender {
        type: '@log4js-node/redis';
        // (defaults to 127.0.0.1) - the location of the redis server
        host?: string;
        // (defaults to 6379) - the port the redis server is listening on
        port?: number;
        // password to use when authenticating connection to redis
        pass?: string;
        // the redis channel that log events will be published to
        channel: string;
        // (defaults to messagePassThroughLayout) - the layout to use for log events.
        layout?: Layout;
}

export type Appender = Appender | RedisAppender;
