let currentState = welcoming;

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput(){
  currentState = welcoming;  
}

function welcoming() {
  let aReturn = [];
  currentState = choosingService;
  aReturn.push("Welcome to Glow Salon ✨");
  aReturn.push("What service are you looking for today?");
  return aReturn;
}

function choosingService(sInput) {
  let aReturn = [];

  if (sInput.toLowerCase().includes("buzz")) {
    currentState = upsell;
    aReturn.push("Great choice! A Buzz Cut is quick and clean.");
    aReturn.push("Would you like to add a shampoo treatment?");
  } 
  else if (sInput.toLowerCase().includes("regular")) {
    currentState = upsell;
    aReturn.push("Nice! A Regular Cut will give you a fresh look.");
    aReturn.push("Would you like to add a conditioning treatment?");
  } 
  else {
    aReturn.push("We offer Buzz Cut or Regular Cut.");
    aReturn.push("Which one would you like?");
  }

  return aReturn;
}

function upsell(sInput) {
  let aReturn = [];
  currentState = welcoming;

  if (sInput.toLowerCase().startsWith('y')) {
    aReturn.push("Perfect! We've added that to your service 💇‍♀️");
    aReturn.push("You're all set. See you soon!");
  } else {
    aReturn.push("No worries! Your booking is confirmed without extras.");
    aReturn.push("See you at Glow Salon ✨");
  }

  return aReturn;
}