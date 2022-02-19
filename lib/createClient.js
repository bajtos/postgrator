const MssqlClient = require("./MssqlClient");
const MysqlClient = require("./MysqlClient");
const PostgresClient = require("./PostgresClient");

module.exports = function createClient(config) {
  if (config.driver === "mysql") {
    return new MysqlClient(config);
  } else if (config.driver === "pg") {
    return new PostgresClient(config);
  } else if (config.driver === "mssql") {
    return new MssqlClient(config);
  } else {
    throw new Error(
      `db driver '${config.driver}' not supported. Must one of: mysql, mssql, or pg`
    );
  }
};