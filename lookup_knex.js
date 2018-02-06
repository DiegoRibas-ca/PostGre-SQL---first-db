const settings = require("./settings"); // settings.json
var knex = require('knex')({
    client: 'pg',
    connection: {
        host: settings.hostname,
        user: settings.user,
        password: settings.password,
        database: settings.database
    }
});


knex.select().from("famous_people").where({ last_name: process.argv[2] })
.asCallback(function (err, rows) {
        if (err) return console.error(err);
            console.log(`- ${rows[0].id}: ${rows[0].last_name}
            ${rows[0].first_name}, born '${rows[0].birthdate}'`);
        });
