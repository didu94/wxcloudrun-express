const { MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_ADDRESS = '' } = process.env;

const [host, port] = MYSQL_ADDRESS.split(':');

module.exports = {
  HOST: host,
  PORT: port,
  USER: MYSQL_USERNAME,
  PASSWORD: MYSQL_PASSWORD,
  DB: 'nodejs_demo',
};
