const mysql = require('mysql');
var  con = mysql.createConnection({
    host: 'y06qcehxdtkegbeb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user:'dhnxmssa63s8n9f5',
    password: 'cmgjp4afcoy5fq1a',
    database: 'xws9km3s5224q37u',
});

con.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('CONECTADO A LA BD EXITOSAMENTE...')
})

module.exports = con;