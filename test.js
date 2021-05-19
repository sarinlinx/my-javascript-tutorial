// create Object
const account = {
        name: 'Andrew Mead',

        // the 'expenses' property is an Array. It will have a description and amount
        expenses: [],

        // the 'income' property is an Array
        income: [],

        // method - takes expense description and amount
        addExpense: function(description, amount) {
            // add Object into 'expenses' Array property above using push()
            this.expenses.push({
                // create properties
                description: description,
                amount: amount
            })
        },

        // method - takes income description and amount
        addIncome: function(description, amount) {
            // add Object into income Array above using push()
            this.income.push({
                // create properties
                description: description,
                amount: amount
            })
        },


        // totals all expenses
        getAccountSummary: function() {
            let totalExpenses = 0
            let totalIncome = 0
            let accountBalance = 0

            // this.expenses is the expenses[] above
            // use forEach() to loop through it and add the amounts only (not the descriptions)
            // newExpense has access to the original 'expenses' Array of Objects
            this.expenses.forEach(function(newExpense) {
                // update 'totalExpenses with only the 'amount' values in expenses[]
                totalExpenses = totalExpenses + newExpense.amount
            })

            // this.income is the income[] above
            // use forEach() to loop through it and add the amounts only (not the descriptions)
            // 'income' has access to the original 'income' Array of Objects
            this.income.forEach(function(income) {
                totalIncome = totalIncome + income.amount
            })

            accountBalance = totalIncome - totalExpenses



            // print result
            return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
        }


    } // close 'account' Array


// run the 'addExpense' property method
// this adds the new properties of 'description' and 'amount' into the 'expenses' property Array
// which is located in the 'account' Array of Objects
account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)

account.addIncome('Job', 1000)

console.log(account.getAccountSummary())

console.log(account)