const rides = [
  { fare: 200, distance: 4.5, time: "2025-07-25T10:15:00" },
  { fare: 270, distance: 8,   time: "2025-07-25T14:45:00" },
  { fare: 170, distance: 3,   time: "2025-07-25T10:30:00" },
  { fare: 320, distance: 10,  time: "2025-07-25T14:10:00" },
  { fare: 120, distance: 2,   time: "2025-07-25T10:05:00" }
];

function calculateTotalEarnings(rides) {
  return rides.reduce((sum, ride) => sum + ride.fare, 0);
}

function findLongestRide(rides) {
  return rides.reduce((longest, ride) =>
    ride.distance > longest.distance ? ride : longest, rides[0]);
}

function findPeakHour(rides) {
  const countPerHour = {};
  rides.forEach(ride => {
    const hour = new Date(ride.time).getHours();
    countPerHour[hour] = (countPerHour[hour] || 0) + 1;
  });

  let peakHour = null;
  let maxCount = 0;
  for (const hour in countPerHour) {
    if (countPerHour[hour] > maxCount) {
      maxCount = countPerHour[hour];
      peakHour = hour;
    }
  }

  return `${peakHour}:00 - ${+peakHour + 1}:00 (${maxCount} rides)`;
}

console.log(` Total Earnings: ₱${calculateTotalEarnings(rides)}`);
const longest = findLongestRide(rides);
console.log(` Longest Ride: ₱${longest.fare}, ${longest.distance} km`);
console.log(` Peak Hour: ${findPeakHour(rides)}`);
