export async function main(ns) {
	var servers0Port = [
		"sigma-cosmetics",
		"joesguns",
		"nectar-net",
		"hong-fang-tea",
		"harakiri-sushi",
		"foodnstuff"
	];

	var servers1Port = [
		"neo-net",
		"zer0",
		"max-hardware",
		"iron-gym"
	];
	
	var server2Port = [
		"phantasy",
		 "avmnite-02h", 
		 "omega-net", 
		 "johnson-ortho", 
		 "crush-fitness", 
		 "the-hub"
	]; 

	
	exec("exp.js", "home", 290000); 
	ns.sleep(60000);

	// call function 
	gainAccessAndRun(ns, servers0Port, 6, "phantasy");
	ns.sleep(5000);
	gainAccessAndRun(ns, servers0Port, 6, "phantasy");
	ns.sleep(5000);
	gainAccessAndRun(ns, servers0Port, 6, "phantasy");


}


// set up scripts on servers 
function gainAccessAndRun(ns, arr, threads, server){

	for (var i = 0; i < arr.length; i++){
		var serv = arr[i]; 
		ns.brutessh(serv);
		ns.ftpcrack(serv);
		ns.relaySMTP.exe(serv); 
		ns.nuke(serv);
		ns.scp("hack.js", serv); 
		ns.exec("hack.js", serv, threads, server); 
	}
}


// comptek
// netlink
// rothman-uni
// catalyst
// summit-uni
// rho-construction
// millenium-fitness
