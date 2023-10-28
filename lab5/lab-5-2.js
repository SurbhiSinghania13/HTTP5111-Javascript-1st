//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Extra Challenge!

var bank_customer={
    lastName:"singhania",
    branchNumber:24,
    accountBalance:500.25,
    interestRate:1.03,
    multipleAccount:true,
    makeDeposit:function(deposit){


        this.accountBalance = bank_customer.accountBalance + deposit;
        var deposit_string="Thank you,your current balance is $ " + this.accountBalance.toFixed(2);
        return deposit_string;
    },
    makeWithdrawal:function(withdrawal){
        this.accountBalance = this.accountBalance - withdrawal;
        var withdrawal_string="Thank you,your current balance is $ " + this.accountBalance.toFixed(2);
        return withdrawal_string;
    },
    addInterest:function(){
        if(this.multipleAccount == true){
            var multiple_interest= this.interestRate + 0.005;
            this.accountBalance= this.accountBalance * multiple_interest ;
            return ("Thank you, your current balance is now $ " + this.accountBalance.toFixed(2));
        }
        else{
            this.accountBalance= this.accountBalance * this.interestRate;
            return ("Thank you, your current balance is now $ " + this.accountBalance.toFixed(2));
        }
    }
}
console.log("Current balance: " + bank_customer.accountBalance);
console.log(bank_customer.makeDeposit(200));
console.log(bank_customer.makeWithdrawal(75));
console.log(bank_customer.addInterest());



