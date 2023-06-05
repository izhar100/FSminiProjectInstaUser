const fs=require("fs")
const path = require('path');
const logFilePath = path.join(__dirname, '../log.txt');
const logger=(req,res,next)=>{
   const msg=`URL: ${req.url}, Method: ${req.method}, Timestamp: ${Date()}\n`;
   fs.appendFileSync(logFilePath,msg,"utf-8")
   next();
}

module.exports={
    logger
}