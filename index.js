const fs = require('fs');
const pug = require('pug');
a = fs.readFileSync('links.txt').toString().split("\n");
a = [...new Set(a)]; //remove dupes
var debug=false;
var html=pug.compileFile('index.pug',{
 pretty:debug,filename:"index.pug",cache:true,self:true,globals:[a.pop()]
})();
console.log("regenerated on "+new Date())
if(debug){console.log(html)}
fs.writeFile("index.html", html,function (err) {
  if (err) {
    return console.log(err);
  }
});
//console.log("wrote index.html");
