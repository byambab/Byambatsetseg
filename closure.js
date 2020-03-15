
var accountInfoList = [];

function Account(accountName, deposit) {
    this.accountName = accountName;
    this.deposit = parseInt(deposit);
};

function createAccount() {
    var accName = document.getElementById("aname").value;
    var d = document.getElementById("deposit").value;
    var acc = new Account(accName, d);

    var newAcc = true;
    accountInfoList.forEach((value, index, array) => {
        if (array[index].accountName == accName) {
            newAcc = false;
            array[index].deposit += parseInt(d);
        }
    });

    if (newAcc)
        accountInfoList.push(acc);


    var txt = "";
    accountInfoList.forEach((value, index, array) => {
        txt += "AccountName: " + array[index].accountName + "    Balance: " + array[index].deposit + "\n";
    });

    document.getElementById("txtarea").innerHTML = txt;


   
}
