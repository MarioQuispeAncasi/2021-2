const db = require("./models");

//db.sequelize.sync();

db.sequelize.sync({force: true}).then(()=>{
    console.log("Database .... DROP & re-sync!!");
})