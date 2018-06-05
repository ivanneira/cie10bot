
var knex = require('knex')({
    client: 'mssql',
    connection: {
        host : '10.64.65.200',
        port: 5000,
        user : 'sa',
        password : 'Alamitos+2016',
        database : 'MSP-Ares'
    },
    debug: false,
    pool: { min: 0, max: 40 }
});


var api = new TelegramBot({
    token: '591308854:AAHl4-D18uRfMuRtgD1A5iZlUrM8ztigtZ8',
    http_proxy: {
        host: '10.2.0.1',
        port: 6588
    },
    updates: {
        enabled: true,
        get_interval: 200
    }
});



api.on('message',function(message){


    knex
        .column('id10','dec10')
        .select()
        .from('db29179_cie10')
        .where('id10', 'like', '%'+ message.text +'%')
        .orWhere('dec10','like', '%'+ message.text +'%')
        .then(function(rows){

            console.log(rows)

        })
        .catch(function(error){
            console.log(error);
        });


});



