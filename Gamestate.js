class gameState {
	constructor () {
		this.inventory=['a backpack']
		this.status=['slaked', ' stomach is full', ' feeling warm']
		this.flags = {}
	}
	addItem(i) {
		this.inventory.push(i);
		console.log(`New inventory: ${this.inventory}`)
	}
	viewStatus(){
		if (this.status.length < 4){
			console.log(`Your current status is: ${this.status}. You are healthy, with no injuries or ailments.`)
		}
		else {
		console.log(`Your current status is: ${this.status}`)
	}
	}
	addInjury(i) {
		this.status.push(i)
	}
	healInjury(){
		if (this.status < 3){
			console.log(`You are currently fine, and require no medical attention.`)
		}
		else {

		}
	}

	viewInventory(){
		console.log(`You currently carry ${this.inventory}`)
	}
	setflag(flagName) {
		flags["tookRifle"] = true

	}
	unsetFlag(flagName){

	}
	isSet(flagName){

	}

}

var gs = new gameState;
gs.addItem(' fishing tackle')
gs.viewInventory()
gs.viewStatus()