var fs = require('fs');
var csv = require('fast-csv');

var stream = fs.createReadStream("testCSVAppData.csv");

var returnArr = [];

var csvStream = csv()
    .on("data", function(data){
         returnArr.push(data);
    })
    .on("end", function(){
         console.log(returnArr[0]);
    });

stream.pipe(csvStream);
