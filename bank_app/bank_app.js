class BankAccount{
    constructor(accountNum,ownerName,balance){
       this.accountNum = accountNum;
           this.ownerName = ownerName;
           this.balance = balance; 
       console.log("Initial Account Information");
       console.log("Account Number : " + this.accountNum);
       console.log("Owner name : " +  this.ownerName);
       console.log("Balance : $" + this.balance);
       console.log();
       console.log("Diposit & Withdrow:- ");
   }
   diposit(diposit){
       this.diposit = diposit;
       var currentBalacce = this.balance + this.diposit;
       console.log("$" + this.diposit + " diposit into the account " + this.accountNum);
       this.currentBalacce = currentBalacce;
   }
   withdraw(withdraw){
       this.withdraw = withdraw;
       if( this.withdraw <= this.currentBalacce){
           console.log("$" + this.withdraw + " Withdrow form the account" + this.accountNum);
       }
       else{
           console.log("Insufficient funds");
       }
   }
   getBalance(){
       var NewBalance =   this.currentBalacce - this.withdraw ;
       this.NewBalance = NewBalance;
       }
       displayAccountInfo(){
       console.log();
       console.log("Update Account Information :-")
       console.log("Account Number : " +  this.accountNum);
       console.log("Owner name : " + this.ownerName);
       console.log( "Current Balance : $" +  this.NewBalance);

   }
   
}
   var accountNumber = new BankAccount(10000145,"Ononna",9000);
   accountNumber.diposit(2225);    // 
   accountNumber.withdraw(1806);
   accountNumber.getBalance();
   accountNumber.displayAccountInfo();

   var accountNumber = new BankAccount(92343992,"Gulumulu",1200);
   accountNumber.diposit(1460);    // 
   accountNumber.withdraw(2237);
   accountNumber.getBalance();
   accountNumber.displayAccountInfo();
