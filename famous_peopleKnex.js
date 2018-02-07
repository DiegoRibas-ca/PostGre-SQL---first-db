module.exports = function (knex) {
    
    function findByName(callback) {
        knex.select().from("famous_people").where({ last_name: process.argv[2] })
        .asCallback(callback); 

    }
    return {findByName: findByName};
}