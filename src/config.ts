const {
    SERVICE_NAME = "item-store",
    NATS_URL = "",
    ELASTICSEARCH_URI = "",
    ELASTICSEARCH_INDEX_NAME = ""
} = process.env;

if (!NATS_URL) {
    throw new Error(
        `Please provide a valid NATS_URL so the service can connect to NATS. For example, use nats://nats:4222`
    );
}

if (!ELASTICSEARCH_URI) {
    throw new Error(
        `Please provide a valid ELASTICSEARCH_URI so the service can connect to Elasticsearch. For example, use http://localhost:9200`
    );
}

if (!ELASTICSEARCH_INDEX_NAME) {
    throw new Error(
        `Please provide a valid ELASTICSEARCH_INDEX_NAME so the service can add items to the right index. For example use JWA_ITEM_STORE`
    );
}

export { SERVICE_NAME, ELASTICSEARCH_URI, NATS_URL };
export const INDEXES = {
    INVENTORY: `${ELASTICSEARCH_INDEX_NAME}-inventory`,
    WAREHOUSE: `${ELASTICSEARCH_INDEX_NAME}-warehouse`,
    USER: `${ELASTICSEARCH_INDEX_NAME}-user`,
    ADMIN: `${ELASTICSEARCH_INDEX_NAME}-admin`
};
