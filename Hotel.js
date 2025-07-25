const bookings = [
  { roomNumber: 101, startDate: "2025-07-20", endDate: "2025-07-22" },
  { roomNumber: 101, startDate: "2025-07-25", endDate: "2025-07-27" }
];

function parseDate(dateStr) {
  return new Date(dateStr);
}

function isOverlapping(newBooking, existingBooking) {
  return (
    newBooking.roomNumber === existingBooking.roomNumber &&
    parseDate(newBooking.startDate) < parseDate(existingBooking.endDate) &&
    parseDate(newBooking.endDate) > parseDate(existingBooking.startDate)
  );
}

function addBooking(newBooking) {
  for (let booking of bookings) {
    if (isOverlapping(newBooking, booking)) {
      console.log(" Booking denied: Overlapping dates.");
      return;
    }
  }
  bookings.push(newBooking);
  console.log(" Booking confirmed.");
}


const newBooking = { roomNumber: 101, startDate: "2025-07-21", endDate: "2025-07-23" };
addBooking(newBooking);
