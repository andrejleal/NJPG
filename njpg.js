process.stdout.write(".........................................................\n");
process.stdout.write("Starting JRG...\n");
process.stdout.write(".........................................................\n");

var rg = require('./rg');
rg.execute(
	'.properties',
	function(wstream){},
	function(wstream, key, value){
		wstream.write(key+'='+value+'\n');
	},
	function(wstream){}
);