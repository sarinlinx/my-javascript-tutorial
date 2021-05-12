//Create Object
const account = {
    name: 'Andrew Mead',
    //expenses is an Array. It will have a description and amount

    expenses: [],

    income: [],

    //method - takes expense description and amount
    addExpense: function(description, amount) {
        //add Object into expenses Array above using push()
        this.expenses.push({
            description: description,
            amount: amount
        })
    },

    addIncome: function(description, amount) {
        //add Object into income Array above using push()
        this.income.push({
            description: description,
            amount: amount
        })
    },

    //Totals all expenses
    getAccountSummary: function() {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        //this.expense is the expense[] above
        //Use forEach() to loop through it and add the amounts only (not the descriptions)
        this.expenses.forEach(function(newExpense) {
            totalExpenses = totalExpenses + newExpense.amount
        })


        //this.income is the income[] above
        //use forEach() to loop through it and add the amounts only (not the descriptions)
        this.income.forEach(function(income) {
            totalIncome = totalIncome + income.amount
        })

        accountBalance = totalIncome - totalExpenses

        //print result
        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())