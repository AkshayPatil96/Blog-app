import crypto from "crypto";

const activeKey = crypto.randomBytes(32).toString("hex");

const accessKey = crypto.randomBytes(32).toString("hex");

const refreshKey = crypto.randomBytes(32).toString("hex");

console.table({ activeKey, accessKey, refreshKey });
