const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
});

client.connect((err) => {
    if (err) {
        return console.log('Something went wrong:', err)
    }
    console.log('Searching...');



    const findByName = function (client, name, callback) {
        const query = "SELECT * from famous_people WHERE last_name = $1;";
        client.query(query, [name], callback);
    }

    findByName(client, process.argv[2], (err, result) => {
        if (err) {
            return console.log('Something went wrong:', err)
        }
        
        const rows = result.rows;
        console.log(`- ${rows[0].id}: ${rows[0].last_name} ${rows[0].first_name}, born '${rows[0].birthdate}'`);
        client.end();
    });

});
