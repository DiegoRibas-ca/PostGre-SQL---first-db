const settings = require("./settings"); // settings.json
const knexConfig = require('./knexfile');
var knex = require('knex')(knexConfig['development']);
const famousPeopleKnex = require('./famous_peopleKnex')(knex);



if (process.argv[2] === 'add') {
    const addPerson = require('./add_person')(knex);

    addPerson.addRow(function (err, response) {
        if (err) return console.error(err);
        process.exit();

    });

} else {
    
    famousPeopleKnex.findByName(function (err, rows) {
        if (err) return console.error(err);
        console.log(`- ${rows[0].id}: ${rows[0].first_name} ${rows[0].last_name}, born '${rows[0].birthdate}'`);
        process.exit();
    });

}


