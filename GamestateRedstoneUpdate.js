class GameState {
	constructor () {
		this.inventory=['a backpack']
		this.status=['slaked', ' stomach is full', ' feeling warm']
		this.flags = {}
	}
	addItem(i) {
		this.inventory.push(i);
		console.log(`New inventory: ${this.inventory}`)
	}
	addInjury(i) {
		this.status.push(i)
	}
	healInjury(){
		if (this.status.length < 4){
			console.log(`You are currently fine, and require no medical attention.`)
		}
		else {
			console.log(`Select an injury to heal: ${this.status}`)
		}
	}
	setFlag(flagName) {
		this.flags[flagName] = true
	}
	unsetFlag(flagName){
		this.flags[flagName] = false
	}
	isSet(flagName){
		return this.flags[flagName]
	}
	cheatCodeViewFlags(i){
		console.log(`${this.flags}`)
	}
}

class Decision {
	constructor (text, requirement, effect) {
		this.text=text
		this.requirement=requirement
		this.effect=effect
	}
	displayText() {
		return this.text
	}
	checkRequirement(currentGameState) {
		return this.requirement(currentGameState)
	}
	setRequirement(mapRequirement) {
		if (mapRequirement.flags) {
			this.requirement=function(currentGameState) {
				let bools = mapRequirement.flags.isSet.map(flagName =>
					{
						currentGameState.isSet(flagName)
					})
				if (bools.includes(false)) {
					return false
				}
				else {
					return true
				}
			}
		} else {
			this.requirement=function(currentGameState) {
				return true
			}
		}
	}
	createEffect(currentGameState) {
		return this.effect(currentGameState)
	}
	setEffect(mapEffect) {// takes map JSON data and sets this.effect to the required function	
		//map effect has three keys at most: flags, inventory, status. Run through
		this.effect=function(currentGameState) {
			mapEffect.flags.set.forEach(flags =>
			{
				console.log(flags)
				currentGameState.setFlag(flags)
			})
		}
	}
}


class Page {
	constructor (main, decisions, id, statusBar, inventory){
		this.main=main
		this.decisions=decisions
		this.id=id
		this.statusBar=statusBar
		this.inventory=inventory
	}
}

class PageManager {
	constructor (pages){
		// let dict = {}

		// for (var i = 0; i < pages.length; i++) {
		// 	const currentPage = pages[i]
		// 	const id = currentPage.id
		// 	dict[id] = currentPage
		// }

		// this.pages = dict
		this.pages = pages
		this.currentPage = 0
	}
	chooseOption(optionNumber) {
		
	}
}

module.exports = {GameState, Decision, Page}