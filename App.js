import React, { useState } from 'react';
import Gamestate from './GamestateRedstoneUpdate.js';
import './stylesheet.css'

let nextMap = {
  map1: "map2",
  map2: "map3"
}

let storage = {
  map1: {
  main: ["You wake up in your bed, the early morning sunlight peeking through the blinds of the rental cabin. It has been a few weeks since you got here at Mystery Lake, out in the middle of Great Bear Island, Canada, leaving the mainland for a few weeks of ice fishing and a little bit of rabbit hunting. The Park Ranger warned you that he was leaving for the winter, and that remaining in the cabins after that was at your own risk, and he would not be responsible should anything happen to you. What does that guy know? This isn't your first rodeo or anything.", 
  "There weren't any blizzards in the weather forecast, even if that was two days ago. The radio in the cabin hasn't been working for the past two days, nor has any other electric item, but the snow probably brought down a power line somewhere along the way, and someone is probably going out to repair it right now. Besides, the cabins are all heated by wood-burning stoves, and there is plenty of firewood in the woodpile.",
  "In addition to the fish you came here to catch, there is plenty of food in long-term storage, even if it is mostly saltine crackers and army surplus MREs (Meals Ready to Eat). Distilled water is also in the cupboard, but snow can be melted and boiled in a pinch.",
  "The air is cold, and the sheets are still warm, but you know it would be warmer if you got up and started a fire in the wood-fire stove in the corner..."],
  choices: [{buttonText: "Light a fire:",
  quote: "You stretch your arms and slowly sit up, putting your feet into your slippers before daring to venture out onto the cold floor. Leaving the warmth of your sheets, the cold air begins to tighten its grip around you. Taking a log of cedar, you place the firewood into the pot belly stove, add some kindling, and swipe a strike-anywhere match on the side of the of stove, starting a fire. The warmth from the burning kindling wafts up, and begins to painfully warm up your chilly nose. As the fire continues to grow from a matchstick to burning kindling, from burning kindling to small flames along the main firelog, and from the small flames into a full blaze, the cold chill wrapping around you begins to disappear. This is the way a good day starts."},
  {buttonText: "Stay in bed:", quote: "You stay in bed, pulling the covers up and enjoying the warmth of the bedsheets. Though the sun has just risen over the horizon, the air in the cabin is still chilly, and you still feel the pull of your eyelids to sleep some more. The fish and rabbits can wait... You wake up again, checking your wrist watch: it has only been half an hour, but you feel rested and ready to take on the day!"}],
  status: ["Thirst: Parched", "Hunger: Hungry for Breakfast", "Health: Perfectly Fine", "Temperature: Warm"],
  inventory: ["Currently unequipped"]
},
  map2: {
    main: ["Feeling refreshed, you get yourself dressed in your winter clothes: thick wool socks, thermal underwear, warm snow boots, snow pants, a longsleeve shirt and a hoodie, wool mittens, and finally your ski coat. Pouring yourself a bowl of cold cereal, you begin to think about your agenda for the day: check on the rabbit snares you placed yesterday, the hike to get to them should take all morning, munch on some granola for lunch, and then to do some ice fishing in the afternoon.", "You pick up your fishing rod by the cabin door, some spare hooks in case a fish gets away, and your tacklebox. You put on your backpack, already filled with some granola bars and a full water canteen, your hunting knife, a hatchet, a first aid kit, and couple of small fire logs and kindling. You also pick up your hunting revolver, perfect for picking off small game like rabbits. You load the break-action chamber with six bullets, and grab an extra dozen rounds. You slip the shoulder holster on, and place your revolver underneath your left armpit. Ready to head out to the fishing hut, you spot an old bolt-action hunting rifle leaning on the wall by the coat rack, standing guard over the door.", "It isn't your rifle, someone must have left it here by accident over the winter. You don't need something with the firepower to bring down a deer in order to hunt rabbits, and carrying a rifle around would only weigh you down. You're already taking the hatchet in order to harvest more firewood so you don't have to carry a whole lot around."],
  status: ["Thirst: Slaked", "Hunger: Sated", "Health: Perfectly Fine", "Warmth: Warm"],
  inventory: ["Granola bars", "Water Canteen: Full", "Hunting Knife", "Hatchet", "First Aid Kit", "Hunting Revolver: Fully Loaded", "12 '9' millimeter Revolver Rounds", "Fishing Tacklebox", "Fishing Pole"],
  choices: [{buttonText: "Leave the rifle", quote: "The fishing hut is not far from the cabin, and you feel confident that you can back in time if any wolves show up hoping to snack on some fresh fish. Besides, even if any wolves do show up, they would be more interested in taking a bite out of the fish than taking a bite of you. Additionally, your revolver is still a gun, and can scare them off just as well as something bigger and heavier."}, {buttonText: "Take the rifle", quote: "You pick up the rifle, and slide the bolt back to inspect the magazine. Empty. You grab only a couple of rifle cartridges and load them, since you won't need more than one or two shots to scare off any curious wolves. No need to punish an endagnered species for just being interested in fresh fish during a time of year when fish are unavailabe, and which also happened to be caught by a human."}]
  },
  map3: {
    main: ["You open the door to your cabin, take two steps outside, set down your tacklebox, and then close and lock the door behind you. You don't a bear or a bunch of raccoons breaking into the cabin to snack on the food stores. Picking your tacklebox back up from where you set it, you begin walking across the frozen Mystery Lake to the nearest ice fishing hut. If a full grown deer can safely walk across the ice, than so can you.", "Opening the door to the fishing hut, you can see that the fishing hole has frozen over again. You'll have to break the ice again once you come back from checking on the rabbit snares. You set down your tacklebox and your shortened fishing pole in the corner of the hut, across from the pot belly stove, standing there to keep you warm while fishing and cooking your catch.", "Leaving the fishing hut, you begin your hike across the lake, past the other fishing huts, past the other cabins along the lakeshore, and towards the southern inlet where a lazy, frozen river feeds into Mystery Lake. Along the northern shoreline, a herd of three or four deer stare at you as your boots crunch and echo across the frozen lake surface, their heads tracking you slowly as you carry on with your morning hike. The sun is no longer hidden by the horizon and the mountaintops and the ridges to the east, and its warming rays of light begin to awaken the snowy world around you. Birds begin singing their morning songs, small critters begin to scamper around the ground and tree branches to their food stores, and cattails begin to gently wave in the cold morning breeze.", "This is why you came out here, to appreciate the beauty of nature. To get away from your busy life back home and at work, where there is always a deadline to meet in a few hours, and even maintaining your home is its own job. You came here to forget all of that, to where nobody has expectations from you, where you are in charge of what you do for the day, and where you can deflate from the stresses of society by being away from society.", "There isn't a place in the world you would rather be right now."],
  status: ["Thirst: slaked", "Hunger: sated", "Health: Perfectly Fine", "Warmth: Warm"],
  inventory: ["Granola Bars", "Water Canteen: Full", "Hunting Knife", "Hatchet", "First Aid Kit", "Firelogs", "Kindling (small dry sticks, rolled up newspaper)", "Hunting Revolver: Fully Loaded", "12 '9' millimeter Revolver Rounds"],
}
}

let data = {
  main: ["You wake up in your bed, the early morning sunlight peeking through the blinds of the rental cabin. It has been a few weeks since you got here at Mystery Lake, out in the middle of Great Bear Island, Canada, leaving the mainland for a few weeks of ice fishing and a little bit of rabbit hunting. The Park Ranger warned you that he was leaving for the winter, and that remaining in the cabins after that was at your own risk, and he would not be responsible should anything happen to you. What does that guy know? This isn't your first rodeo or anything.", 
  "There weren't any blizzards in the weather forecast, even if that was two days ago. The radio in the cabin hasn't been working for the past two days, nor has any other electric item, but the snow probably brought down a power line somewhere along the way, and someone is probably going out to repair it right now. Besides, the cabins are all heated by wood-burning stoves, and there is plenty of firewood in the woodpile.",
  "In addition to the fish you came here to catch, there is plenty of food in long-term storage, even if it is mostly saltine crackers and army surplus MREs (Meals Ready to Eat). Distilled water is also in the cupboard, but snow can be melted and boiled in a pinch.",
  "The air is cold, and the sheets are still warm, but you know it would be warmer if you got up and started a fire in the wood-fire stove in the corner..."],
  choices: [{buttonText: "Light a fire:",
  quote: "You stretch your arms and slowly sit up, putting your feet into your slippers before daring to venture out onto the cold floor. Leaving the warmth of your sheets, the cold air begins to tighten its grip around you. Taking a log of cedar, you place the firewood into the pot belly stove, add some kindling, and swipe a strike-anywhere match on the side of the of stove, starting a fire. The warmth from the burning kindling wafts up, and begins to painfully warm up your chilly nose. As the fire continues to grow from a matchstick to burning kindling, from burning kindling to small flames along the main firelog, and from the small flames into a full blaze, the cold chill wrapping around you begins to disappear. This is the way a good day starts."},
  {buttonText: "Stay in bed:", quote: "You stay in bed, pulling the covers up and enjoying the warmth of the bedsheets. Though the sun has just risen over the horizon, the air in the cabin is still chilly, and you still feel the pull of your eyelids to sleep some more. The fish and rabbits can wait... You wake up again, checking your wrist watch: it has only been half an hour, but you feel rested and ready to take on the day!"}],
  status: ["Thirst: Parched", "Hunger: Hungry for Breakfast", "Health: Perfectly Fine", "Temperature: Warm"],
  inventory: ["Currently unequipped"]
}

function App() {
  // logic to set data to current map
  const [currentMap, setCurrentMap] = useState("map1")
  const [chosenOption, setChosenOption] = useState("")

  // set data to the value of storage[map]

  let data = storage[currentMap]

  function NextPage() {
    setCurrentMap(nextMap.map1)
  }

  return (
  <div className="App">
    
    <h2 id="encounter">Chapter 1: Close Encouter of the Moose Kind</h2>
    
    <div id="statusBar">
      <DisplayStatusBar statusBar = {data.status} />
    </div>
    
    <div id="inventory">
      <DisplayInventory inventory = {data.inventory} />
    </div>
    
    <div id="body">
      <DisplayDescription description = {data.main} />
      <DisplayDecisions options = {data.choices} changeMapFn={NextPage}/>  
    </div> 
  
  </div>
  );
}

function DisplayDescription (props) {
  return props.description.map(quote => <p>{quote}</p>)
}

function DisplaySingleOption (props) {
 const [hasBeenRevealed, setHasBeenRevealed] = React.useState(false)

return (
      <React.Fragment>
        <button style = {{visibility: props.isAvailable ? "visible" : "hidden"}} onClick={() => {
          setHasBeenRevealed(true);
          props.setter(false)
        }}><h5>{props.option.buttonText}</h5></button>
        <p style = {{visibility: hasBeenRevealed ? "visible" : "hidden"}}>{props.option.quote}</p>
      </React.Fragment>
    )
}

function DisplayDecisions (props) {
 const [showContinueButton, setShowContinueButton] = React.useState(true)
 const [hasBeenRevealed, setHasBeenRevealed] = React.useState([false, false])
 
  const output = props.options.map((option, index) => <DisplaySingleOption isRevealed={hasBeenRevealed[index]} isAvailable = {showContinueButton} setter = {setShowContinueButton} option = {option}/>)

  return (
    <div>
      {output}
      <button style = {{visibility: showContinueButton ? "hidden" : "visible"}} onClick={() => {
        //setHasBeenRevealed(true);
        setShowContinueButton(true)
        props.changeMapFn()
        // props.setter(false);
      }}><h4>Click here to continue</h4>
      </button>
    </div>)
}


// props = {
//   statusBar: {
//      hungerLevel: "Sated",
//      thirstLevel: "Parched",
//      warmthLevel: "Cold as hell"
//    },
//    inventory: ["Wallet", "Watch"]
//}

function DisplayStatusBar (props) {
  return(
    <React.Fragment>
    <h3>Status</h3>
    <ul>
    {props.statusBar.map(status => <li>{status}</li>)}
    </ul>
    </React.Fragment>
    )
}

function DisplayInventory (props) {
  return(
    <React.Fragment>
    <h3>Backpack: </h3> 
    <ul>
      {props.inventory.map(inventory => <li>{inventory}</li>)}
    </ul>
    </React.Fragment>
  ) 
}



export default App;
