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
		if (this.status.length < 4){
			console.log(`You are currently fine, and require no medical attention.`)
		}
		else {
			console.log(`Select an injury to heal: ${this.status}`)
		}
	}
	viewInventory(){
		console.log(`You currently carry ${this.inventory}`)
	}
	setFlag(flagName) {
		this.flags[flagName] = true
	}
	unsetFlag(flagName){
		this.flags[flagName] = false
	}
	isSet(flagName){
	}
	cheatCodeViewFlags(i){
		console.log(`${this.flags}`)
	}
}

class Option {
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
	createEffect(currentGameState) {
		return this.effect(currentGameState)
	}
}

class Page {
	constructor (main, choices, id, statusBar, inventory){
		this.main=main
		this.choices=choices
		this.id=id
		this.statusBar=statusBar
		this.inventory=inventory
	}
	displayPage(){
		return {
			main: this.main,
			choices: this.choices.map((choice) => choice["text"])
		}
	}
	displayHud(){
		return {
			statusBar: this.statusBar
			inventory: this.inventory
		}
	}
}

class PageManager {
	constructor (pages){
		let dict = {}

		for (var i = 0; i < pages.length; i++) {
			const currentPage = pages[i]
			const id = currentPage.id
			dict[id] = currentPage
		}

		this.pages = dict
	}
}

var gameState = new GameState()

//create option

const text = "You take the rifle"
const requirement = (gameState) => {
	return true
}
const effect = (gameState) => {
	return gameState.setFlag("tookRifle")
}

const option = new Option(text, requirement, effect)
option.createEffect(gameState)