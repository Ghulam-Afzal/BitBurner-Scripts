/** @param {NS} ns **/
export async function main(ns) {
	var target = "n00dles";
	while (true) {
		await ns.grow(target);
	}
}