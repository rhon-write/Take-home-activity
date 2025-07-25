const POINTS_PER_100 = 1;
const POINTS_THRESHOLD = 10;
const DISCOUNT_PER_10_POINTS = 50;

let customer2 = {
  name: "Maria Santos",
  loyaltyPoints: 8 
};

function checkout(purchaseAmount, customer) {
  console.log(`\n Customer: ${customer.name}`);
  console.log(` Purchase Amount: ₱${purchaseAmount}`);
  console.log(` Loyalty Points Available: ${customer.loyaltyPoints}`);

  const pointsEarned = Math.floor(purchaseAmount / 100);
  console.log(` Points Earned This Transaction: ${pointsEarned}`);

  let discount = 0;
  if (customer.loyaltyPoints >= POINTS_THRESHOLD) {
    let redeemableSets = Math.floor(customer.loyaltyPoints / POINTS_THRESHOLD);
    discount = redeemableSets * DISCOUNT_PER_10_POINTS;
    customer.loyaltyPoints -= redeemableSets * POINTS_THRESHOLD;
    console.log(` Discount Applied: ₱${discount}`);
  } else {
    console.log(` Not enough points for a discount.`);
  }

  let finalAmount = purchaseAmount - discount;

  customer.loyaltyPoints += pointsEarned;

  console.log(` Final Bill: ₱${finalAmount}`);
  console.log(` Remaining Points: ${customer.loyaltyPoints}`);
}

checkout(460, customer2); 
