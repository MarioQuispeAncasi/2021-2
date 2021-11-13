/******************************************
 *  P R A C T I C A    C A L I F I C A D A
 *  Nota #4
 * 
 * Nombre :  Mario Daniel Quispe Ancasi
 * Codigo :  20181529
 ******************************************/
const db = require("./models");

//db.sequelize.sync();

db.sequelize.sync({force:true})
.then(()=>{
    console.log("Database .... Drop & re-sync !!");
});