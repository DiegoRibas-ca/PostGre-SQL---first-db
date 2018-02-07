module.exports = function (knex) {

    function addRow(callback) {
        return knex.insert({
            first_name: process.argv[3], last_name: process.argv[4], birthdate: process.argv[5]
        })
            .into('famous_people')
            .returning('id')
            .asCallback(callback);
    }
    return { addRow: addRow };
}

