const restaurant = {
  name: "ASB",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function (partySize) {
    this.guestCount += partySize;
  },
  removeParty: function () {
    this.guestCount = 0;
  },
};

console.log(restaurant.checkAvailability(5));
restaurant.seatParty(74);
console.log(restaurant.checkAvailability(5));
restaurant.removeParty();
console.log(restaurant.checkAvailability(5));
