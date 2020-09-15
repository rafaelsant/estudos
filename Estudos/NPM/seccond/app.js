const fs = require('fs');

const pathsToCheck = ['./','./09 – She Looks Like Fun.mp3'];

for (let i = 0; i < pathsToCheck.length; i++) {
  fs.stat(pathsToCheck[i], function(err, stats) {
    console.log(stats);
  });
}