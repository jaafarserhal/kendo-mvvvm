
$(document).ready(function() {
    var viewModel = kendo.observable({
        expenses: [],
        type: [{name: "food", value:'food'},{name: "Shopping", value:'shopping'},{name: "Bills", value:'bills'}],
        expenseType: "food",
        merchant: '',
        amount: '',
        // The event executes on clicking the Add button.
     create: function(e) {     
            //add items to array expenses
            this.get("expenses").push({type: this.get("expenseType"),merchant: this.get("merchant"),amount: this.get("amount")})
            
             //reset the forms
            this.set("expenseType", "food");
            this.set("merchant", "");
            this.set("amount", "");
        }
    });
    // Apply the bindings.
    kendo.bind(document.body.children, viewModel);
});