const sql = require('mssql/msnodesqlv8');

const config = {
    /* user: 'PCT',
    password: '1234',
    server: 'CONGTUAN\\CONGTUAN',
    driver: 'msnodesqlv8',
    database: 'DoAn02',
    port: 1433, */
    options: {
        trustedConnection: true
    },
    
    server: "localhost",
    user: "sa",
    password: "1234",
    database: "DoAn02",
    DRIVER: "msnodesqlv8"
    
}

async function connect(){
    try {
        await sql.connect(config, function (err) {
            console.log('Kết nối thành công');
        });
        
    } catch (err) {
        console.log('Kết nối không thành công');
    }
}

module.exports = config;

