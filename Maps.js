//import {GameState, Decision} from './GamestateRedstoneUpdate.js';
const {GameState, Decision} = require('./GamestateRedstoneUpdate.js')
//Maps
export const mapData = {
 map1: {
    main: ["You wake up in your bed, the early morning sunlight peeking through the blinds of the rental cabin. It has been a few weeks since you got here at Mystery Lake, out in the middle of Great Bear Island, Canada, leaving the mainland for a few weeks of ice fishing and a little bit of rabbit hunting. The Park Ranger warned you that he was leaving for the winter, and that remaining in the cabins after that was at your own risk, and he would not be responsible should anything happen to you. What does that guy know? This isn't your first rodeo or anything.", 
  "There weren't any blizzards in the weather forecast, even if that was two days ago. The radio in the cabin hasn't been working for the past two days, nor has any other electric item, but the snow probably brought down a power line somewhere along the way, and someone is probably going out to repair it right now. Besides, the cabins are all heated by wood-burning stoves, and there is plenty of firewood in the woodpile.",
  "In addition to the fish you came here to catch, there is plenty of food in long-term storage, even if it is mostly saltine crackers and army surplus MREs (Meals Ready to Eat). Distilled water is also in the cupboard, but snow can be melted and boiled in a pinch.",
  "The air is cold, and the sheets are still warm, but you know it would be warmer if you got up and started a fire in the wood-fire stove in the corner..."],
  choices: [{
      buttonText: "Light a fire:",
      quote: "You stretch your arms and slowly sit up, putting your feet into your slippers before daring to venture out onto the cold floor. Leaving the warmth of your sheets, the cold air begins to tighten its grip around you. Taking a log of cedar, you place the firewood into the pot belly stove, add some kindling, and swipe a strike-anywhere match on the side of the of stove, starting a fire. The warmth from the burning kindling wafts up, and begins to painfully warm up your chilly nose. As the fire continues to grow from a matchstick to burning kindling, from burning kindling to small flames along the main firelog, and from the small flames into a full blaze, the cold chill wrapping around you begins to disappear. This is the way a good day starts.",
      requirement: {},
      effect: {

      }
    },
    {
      buttonText: "Stay in bed:",
      quote: "You stay in bed, pulling the covers up and enjoying the warmth of the bedsheets. Though the sun has just risen over the horizon, the air in the cabin is still chilly, and you still feel the pull of your eyelids to sleep some more. The fish and rabbits can wait... You wake up again, checking your wrist watch: it has only been half an hour, but you feel rested and ready to take on the day!"
    }
  ],
  status: ["Thirst: Parched", "Hunger: Hungry for Breakfast", "Health: Perfectly Fine", "Temperature: Warm"],
  inventory: ["Currently unequipped"]
},

  map2: {
    main: ["Feeling refreshed, you get yourself dressed in your winter clothes: thick wool socks, thermal underwear, warm snow boots, snow pants, a longsleeve shirt and a hoodie, wool mittens, and finally your ski coat. Pouring yourself a bowl of cold cereal, you begin to think about your agenda for the day: check on the rabbit snares you placed yesterday, the hike to get to them should take all morning, munch on some granola for lunch, and then to do some ice fishing in the afternoon.", "You pick up your fishing rod by the cabin door, some spare hooks in case a fish gets away, and your tacklebox. You put on your backpack, already filled with some granola bars and a full water canteen, your hunting knife, a hatchet, a first aid kit, and couple of small fire logs and kindling. You also pick up your hunting revolver, perfect for picking off small game like rabbits. You load the break-action chamber with six bullets, and grab an extra dozen rounds. You slip the shoulder holster on, and place your revolver underneath your left armpit. Ready to head out to the fishing hut, you spot an old bolt-action hunting rifle leaning on the wall by the coat rack, standing guard over the door.", "It isn't your rifle, someone must have left it here by accident over the winter. You don't need something with the firepower to bring down a deer in order to hunt rabbits, and carrying a rifle around would only weigh you down. You're already taking the hatchet in order to harvest more firewood so you don't have to carry a whole lot around."],
  status: ["Thirst: Slaked", "Hunger: Sated", "Health: Perfectly Fine", "Warmth: Warm"],
  inventory: ["Granola bars", "Water Canteen: Full", "Hunting Knife", "Hatchet", "First Aid Kit", "Hunting Revolver: Fully Loaded", "12 '9' millimeter Revolver Rounds", "Fishing Tacklebox", "Fishing Pole"],
  choices: [{
    buttonText: "Leave the rifle",
    quote: "The fishing hut is not far from the cabin, and you feel confident that you can back in time if any wolves show up hoping to snack on some fresh fish. Besides, even if any wolves do show up, they would be more interested in taking a bite out of the fish than taking a bite of you. Additionally, your revolver is still a gun, and can scare them off just as well as something bigger and heavier.",
    requirement: {},
    effect: {
      flags: {
        set: [],
        unset: []
      }
    }
  }, 
  {
    buttonText: "Take the rifle",
    quote: "You pick up the rifle, and slide the bolt back to inspect the magazine. Empty. You grab only a couple of rifle cartridges and load them, since you won't need more than one or two shots to scare off any curious wolves. No need to punish an endagnered species for just being interested in fresh fish during a time of year when fish are unavailabe, and which also happened to be caught by a human.",
    requirement: {},
    effect: {
      flags: {
        set: ["PICKED_RIFLE"]
      },
      inventory: {
        set: ["Rifle"]
      }
    }
  }],
},
  map3: {
    main: ["You open the door to your cabin, take two steps outside, set down your tacklebox, and then close and lock the door behind you. You don't a bear or a bunch of raccoons breaking into the cabin to snack on the food stores. Picking your tacklebox back up from where you set it, you begin walking across the frozen Mystery Lake to the nearest ice fishing hut. If a full grown deer can safely walk across the ice, than so can you.", "Opening the door to the fishing hut, you can see that the fishing hole has frozen over again. You'll have to break the ice again once you come back from checking on the rabbit snares. You set down your tacklebox and your shortened fishing pole in the corner of the hut, across from the pot belly stove, standing there to keep you warm while fishing and cooking your catch.", "Leaving the fishing hut, you begin your hike across the lake, past the other fishing huts, past the other cabins along the lakeshore, and towards the southern inlet where a lazy, frozen river feeds into Mystery Lake. Along the northern shoreline, a herd of three or four deer stare at you as your boots crunch and echo across the frozen lake surface, their heads tracking you slowly as you carry on with your morning hike. The sun is no longer hidden by the horizon and the mountaintops and the ridges to the east, and its warming rays of light begin to awaken the snowy world around you. Birds begin singing their morning songs, small critters begin to scamper around the ground and tree branches to their food stores, and cattails begin to gently wave in the cold morning breeze.", "This is why you came out here, to appreciate the beauty of nature. To get away from your busy life back home and at work, where there is always a deadline to meet in a few hours, and even maintaining your home is its own job. You came here to forget all of that, to where nobody has expectations from you, where you are in charge of what you do for the day, and where you can deflate from the stresses of society by being away from society.", "There isn't a place in the world you would rather be right now."],
  status: ["Thirst: slaked", "Hunger: sated", "Health: Perfectly Fine", "Warmth: Warm"],
  inventory: ["Granola Bars", "Water Canteen: Full", "Hunting Knife", "Hatchet", "First Aid Kit", "Firelogs", "Kindling (small dry sticks, rolled up newspaper)", "Hunting Revolver: Fully Loaded", "12 '9' millimeter Revolver Rounds"],
  choices: [{buttonText: "Continue Walking", quote: "Feeling as if you have taken in all the sights to see where you stand, you continue walking to the grove with the rabbit snares."}]
},

map4: {
	main: ["Readjusting your pack, you continue across the lake to the north, where you cross over the mouth of the river feeding into Mystery Lake. Listening closely, you can barely hear the water flowing underneath the ice, and only a trickle of a stream, not a lazy river like in the summer. You cautiously cross over the ice to the riverbank, but your foot doesn't fall through into the icy waters below. You shake that mental image out of your head.",
	"Safe and sound, you continue your hike on dry land, your footsteps kicking up fresh powder from last night's snowfall. Icicles hang down from tree limbs and branches, sparkling in the sunlight. Tiny footprints from rabbits dot across the snow as you hike along the reflective signs indicating the official park trail buried under the snow.",
	"Looking up the hill beyond which your destination lies, a large dark blob stands in the middle of the trail. It's not a wolf, it's much too tall to be one... It isn't a bear, as it isn't low enough to the ground on all fours... You spy antlers atop its head, but they're very big for even an adult deer...",
	"Just as it clicks in your head, the beast lifts its head up from its grazing. It's a moose! A really big adult moose! You and the moose make eye contact, and you forget what you are supposed to do when encountering a moose. Generally, you leave them be, especially when they have kids, but what do you do when you intrude upon a moose?",
	"The great beast rears its head, shouts over its shoulder, then turns back to you and scrapes one foot against the ground. It tilts its head forward and begins to sprint at you at full speed. Your mind races as you weigh your options..."],
	status: ["Thirst: slaked", "Hunger: sated", "Health: Perfectly Fine", "Warmth: Warm"],
  	inventory: ["Granola Bars", "Water Canteen: Full", "Hunting Knife", "Hatchet", "First Aid Kit", "Firelogs", "Kindling (small dry sticks, rolled up newspaper)", "Hunting Revolver: Fully Loaded", "12 '9' millimeter Revolver Rounds"],
	choices: [{
    buttonText: "You use your rifle",
	   quote: "You swing your rifle from your shoulder, but the trigger is down by your knee, wasting precious time as you reach down and grab it. Bringing the rifle up to your shoulder, aiming straight for the moose's cranium, you pull the trigger. A click from the rifle deafens your ears as you realize that you didn't put a bullet in the chamber. Panicking, you fumble as you reach forward and pull the bolt back, finally putting a round in the chamber. Already upon you, the moose bulldozes through you, knocking the rifle out of your hands, and knocking you off your feet.",
     requirement: {
      flags: {isSet: ["PICKED_RIFLE"]}
     }
},
	{buttonText: "You use your revolver",
	quote: "You pull your revolver out of its holster, and fire a shot into the air, but the moose does not stop in its charge straight for you. Knowing it is likely futile, you quickly let off another shot, aiming in the moose's general direction. It was indeed futile, as it continues to charge at you. Desperate to stop the mad beast, you take a proper aiming stance and aim for the crown of the head, and pull the trigger. If your shot even hit the moose, it didn't even notice it. Out of time, you attempt to back pedal away from the danger, but you find yourself bucked into the air, your revolver flying from your hands, and you land in a heap on the snowy ground."},
	{buttonText: "You choose to run", 
	quote: "You turn and run, sprinting as fast as your legs can take you in your mad dash away from the moose. You've never been to Spain, but this surely must be what the bull runners feel when a huge, heavy animal with sharp horns comes chasing after them. Looking over your shoulder, the moose is catching up to you, and your instinct is to put even more energy into sprinting. If you are running away when the moose hits you, it won't hurt as much compared to standing still... maybe. The sound of stomping hooves still rushes up behind you, and suddenly you are airborn, a sharp pain in your back. Your belongings in your backpack rattle and fall out, sprinkling the ground with granola and firelogs, right before you land on what looked like a pile of powder, but covered up a thick patch of icy snow."}]
},

map5: {
	main: ["With the wind knocked out of you, there is nowhere to go as the moose rears back and brings its heavy hooves down, narrowly missing your head. Your senses coming back, you reach up and attempt to block the hoof coming down for a second time as the moose tries to step on you. You're unsure how much energy you have dispersed as you grab the leg, but you cannot stop the moose from stomping on your chest, knocking the wind out of your lungs a second time.",
	"You feel ribs crack and a sharp pain stabbing through you, a pain which remains even as the hoof lifts up and the moose moves on, slowly walking away as you writhe on the ground. Breathing is now difficult, your vision is blurry, and there is a throbbing pain on the back of your skull. "],
	status: ["Thirst: slaked", "Hunger: sated", "Health: Perfectly Fine", "Warmth: Warm"],
  	inventory: ["Granola Bars", "Water Canteen: Full", "Hunting Knife", "Hatchet", "First Aid Kit", "Firelogs", "Kindling (small dry sticks, rolled up newspaper)", "Hunting Revolver: Fully Loaded", "12 '9' millimeter Revolver Rounds"],
  	choices: [{buttonText: "You attempt to stand up",
  	quote: "Your vision narrows until everything is black..."}]
},

map6: {
	main: ["You wake up in the snow, cold and chilled to the bone, coughing up blood as your lungs do their damndest to suck in oxygen. Things come back to you in a haze, you have no idea how long you've been out, but you swear it was all just a dream, but there's no other explanation for the pain in your chest as you attempt to stand up. Still lying on the ground, as snowflakes begin to gently drift down, you painfully slip your backpack out from under you, and pull out the metal tin with first aid cross on it. Damn, there's only one gauze bandage...",
"You grit your teeth and begin to wrap the bandage around your chest, binding the parts where you probably have some broken ribs. At least there's no external bleeding, but your lungs feel like they've been soaking overnight. That's probably from internal bleeding, which would also explain the blood being coughed up. You inch yourself towards and tree, and lean your back against it, letting the blood drain out of your lungs so you can breathe better. You begin to feel a heavy weight leave your lungs, like when you hold out a wet sponge to let the excess water drain out before wringing the sponge dry.",
"Searching through your first aid kit, you find some pain pills, but they look like they're for aches and scrapes, not for dealing with serious injuries. You pop a couple of pills, and they help a bit, but it's not the same as being at the hospital hooked up to an IV of pain killers. Speaking of hospitals, you suddenly realize you're trapped in the middle of nowhere, hundreds of miles away from the nearest hospital. The power is out, there are no cell towers, nobody is around for many miles, the Park Rangers won't be back until spring, and you don't even have a walkie talkie radio.",
"Your isolation never felt more complete.",
"Your body attempts to hyperventilate in panic, but your lungs cannot handle the extra workload and you only cough up more blood"]
},

map7: {
	main: ["The snowfall is beginning to become pretty dense, and you have a hard time seeing ahead of you, but if you follow the river you will get back to the lake, and from there you can follow the lakeside to get back to your cabin.",
	"As you cross the frozen lake, the snow flurries begin to intensify, dropping a veil over your eyes as you strain to see the cabin you have been living in for the past few days. The birds you heard this morning have gone into hiding, and the cattails are whipping about in the sharp and chilling wind. The small herd of deer that was staring at you this morning have left the lakeside, probably to seek shelter from the gathering wind and snow.",
	"You wipe your mouth of liquids gathering on your lips, knowing that exposed body fluids can chill and further reduce your body temperature. Looking at your sleeve you see that it is blood, and not drool, pooling on your face. Now that you are thinking about it, your sides begin to ache more as you continue to struggle to walk across the ice without slipping.",
	"The snowfall and wind is beginning to worsen, and you realize you can no longer see your lake cabin. Thankfully, your focus for the past few minutes has been to get out of the cold and bandaged, suppressing the brain’s instinct to panic. Even so, your thoughts race as you weigh your options while standing on the exposed, frozen ice."],
}}



// function that takes a map and returns a page.
//const makePage = mapJson => {
//   return mapData[map1.choices]
// }


//let page1 = makePage(mapData["map1"])


const dec1 = new Decision(mapData.map1.choices[0].main, null, null)
dec1.setEffect(mapData.map2.choices[1].effect)
console.log(dec1.effect)

const gs = new GameState()
dec1.effect(gs)
console.log(gs.flags)

const dec2 = new Decision(mapData.map2.choices[1].main, null, null)
dec2.setRequirement(mapData.map2.choices[1].requirement)
console.log(dec2.requirement)
console.log(dec2.checkRequirement(gs))
