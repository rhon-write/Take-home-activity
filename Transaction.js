let Transactions = [];

function AddTransaction(item, type, qty) {
    if (type !== 'in' && type !== 'out') {
        console.log("Invalid transaction type. Use 'in' or 'out'.");
        return;
    }

    let currentQty = GetCurrentStock(item);

    if (type === 'out' && qty > currentQty) {
        console.log(`Cannot remove ${qty} from '${item}'. Only ${currentQty} in stock.`);
        return;
    }

    Transactions.push({ item, type, qty });
    console.log(`Transaction recorded: ${type} ${qty} of '${item}'`);
}

function GetCurrentStock(item) {
    let stock = 0;
    Transactions.forEach(t => {
        if (t.item === item) {
            stock += (t.type === 'in') ? t.qty : -t.qty;
        }
    });

    return stock;
}

function DisplayInventory() {
    let inventory = {};

    Transactions.forEach(t => {
        if (!inventory[t.item]) {
            inventory[t.item] = 0;
        }
        inventory[t.item] += (t.type === 'in') ? t.qty : -t.qty;
    });

    console.log("\nCurrent Inventory:");
    for (let item in inventory) {
        console.log(`- ${item}: ${inventory[item]}`);
    }
}

AddTransaction("Phone", "in", 10);
AddTransaction("Mouse", "in", 20);
AddTransaction("Phone", "out", 4);
AddTransaction("Mouse", "out", 30); 

DisplayInventory();