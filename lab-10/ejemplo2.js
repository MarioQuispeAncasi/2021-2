/**ejemplo de uso de modulo os */
const os = required("os");

console.log("Sistema operativo :" + os.platform);
console.log("Version os: " + os.version);
console.log("Memoria total:" + os.totalmen + "bytes");
console.log("Memoria libre" + os.freemen + "bytes")