module.exports = {
    serviceName: 'core-pago-efectivo',
    env: process.env.ENV || 'dev',
    db: {
        name: process.env.DB_NAME,
        url: process.env.DB_URL
    },
    rmq: {
        route: process.env.RMQ_ROUTE,
        url: process.env.RMQ_URL,
        workQueue: process.env.RMQ_WORKQUEUE
    }
}