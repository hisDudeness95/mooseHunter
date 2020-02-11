import React, { useState } from 'react';
import {GameState} from './GamestateRedstoneUpdate.js';
import './stylesheet.css';
import {mapData} from './Maps.js'

let nextMap = {
  map1: "map2",
  map2: "map3",
  map3: "map4",
  map4: "map5",
}


let data = {
}

function App() {
  // logic to set data to current map
  const [currentMap, setCurrentMap] = useState("map1")
  const [chosenOption, setChosenOption] = useState("")
  const [GS, setGS] = useState(new GameState)

  React.useEffect(() => {
    GS.setFlag("Started")
    console.log(GS.isSet("Started"))
  }, [])

  // set data to the value of storage[map]

  let data = mapData[currentMap]

  function NextPage() {
    setCurrentMap(nextMap[currentMap])
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
 const [isRevealed, setIsRevealed] = React.useState(false)

return (
      <React.Fragment>
        <button style = {{visibility: props.isAvailable ? "visible" : "hidden"}} onClick={() => {
          props.setIsRevealed(true);
          props.setter(false)
        }}><h5>{props.option.buttonText}</h5></button>
        <p style = {{visibility: props.isRevealed ? "visible" : "hidden"}}>{props.option.quote}</p>
      </React.Fragment>
    )
}

function DisplayDecisions (props) {
 const [showContinueButton, setShowContinueButton] = React.useState(true)
 const [isRevealed, setIsRevealed] = React.useState(new Array(props.options.length).fill(false))
 function createSetSingleOption(index) {
  return function (bool) {
    // use setHasBeenRevelead to set the bool at index given.
    let newValues = isRevealed
    newValues[index] = bool
    console.log(`Setting has been revelead. ${JSON.stringify(newValues)}`)
    setIsRevealed(newValues)
  }
}

  const output = props.options.map((option, index) => <DisplaySingleOption isRevealed={isRevealed[index]} setIsRevealed={createSetSingleOption(index)} isAvailable = {showContinueButton} setter = {setShowContinueButton} option = {option}/>)

  return (
    <div>
      {output}
      <button style = {{visibility: showContinueButton ? "hidden" : "visible"}} onClick={() => {
        setIsRevealed(Array(props.options.length).fill(false));
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
