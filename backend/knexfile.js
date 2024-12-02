module.exports = {
  client: "pg",
  connection: {
    host:  "db", 
    user:  "postgres", 
    password:  "password", 
    database: "realestate" 
  },
  migrations: {
    directory: "./migrations", // Directory for migration files
    extension: "js",           // Default extension for migration files
  },
};
