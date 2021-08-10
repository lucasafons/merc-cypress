/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

// const mysql = require('mysql')
// function queryTestDb(query, config) {
//   // creates a new mysql connection using credentials from cypress.json env's
//   const connection = mysql.createConnection(config.env.db)
//   // start connection to db
//   connection.connect()
//   // exec query + disconnect to db as a Promise
//   return new Promise((resolve, reject) => {
//    connection.query(query, (error, results) => {
//       if (error) reject(error)
//       else {
//         connection.end()
//         // console.log(results)
//         return resolve(results)
//       }
//     })
//   })
// }
// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
//     // Usage: cy.task('queryDb', query)
//     on('task', {
//       queryDB: query => {
//         return queryTestDb(query, config)
//       },
//     })
// }

const mysql = require('mysql')
// the connection strings for different databases could
// come from a config file, or from environment variables
const connections = {
  local: {
    host: "localhost",
    user: "root",
    password: "root",
    database: "fm_br"
  },
}

// querying the database from Node
function queryDB(connectionInfo, query) {
  const connection = mysql.createConnection(connectionInfo)

  connection.connect()

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        return reject(error)
      }

      connection.end()

      return resolve(results)
    })
  })
}
module.exports = (on, config) => {
  on('task', {
    // destructure the argument into the individual fields
    async queryDatabase(query) {
      const connectionInfo = connections.local

      if (!connectionInfo) {
        throw new Error(`Do not have DB connection under name local`)
      }

      return await queryDB(connectionInfo, query)
    },
  })
}