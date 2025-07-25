const loadTracker = {}; 

function sendLoad(number, amount) {
  if (!loadTracker[number]) {
    loadTracker[number] = 0;
  }

  if (loadTracker[number] + amount > 500) {
    console.log(` Load denied for ${number}. Daily limit exceeded.`);
    return;
  }

  loadTracker[number] += amount;
  console.log(` Load sent: ₱${amount} to ${number}. Total today: ₱${loadTracker[number]}`);
}


sendLoad("09173644567", 500);
sendLoad("09177434567", 1100);
sendLoad("09171234567", 300); 
