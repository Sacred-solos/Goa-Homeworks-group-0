let accounts = [];
let accountId = 1;

document.getElementById('createAccountForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const owner = document.getElementById('accountOwner').value;
    const initialBalance = parseFloat(document.getElementById('initialBalance').value);

    const account = {
        id: accountId++,
        owner: owner,
        balance: initialBalance
    };

    accounts.push(account);
    displayAccounts();
    document.getElementById('createAccountForm').reset();
});

document.getElementById('transferForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const fromAccountId = parseInt(document.getElementById('fromAcc').value);
    const toAccountId = parseInt(document.getElementById('toAcc').value);
    const amount = parseFloat(document.getElementById('amount').value);

    const fromAccount = accounts.find(account => account.id === fromAccountId);
    const toAccount = accounts.find(account => account.id === toAccountId);

    if (fromAccount && toAccount && fromAccount.balance >= amount) {
        fromAccount.balance -= amount;
        toAccount.balance += amount;
        displayAccounts();
        alert('Transfer successful');
    } else {
        alert('Not enough money');
    }

    document.getElementById('transferForm').reset();
});

function displayAccounts() {
    const accountsList = document.getElementById('accountsList');
    accountsList.innerHTML = '';

    accounts.forEach(account => {
        const accountItem = document.createElement('li');
        accountItem.textContent = `Account ID: ${account.id}, User: ${account.owner}, Balance: ${account.balance.toFixed(2)}$`;
        accountsList.appendChild(accountItem);
    });
}