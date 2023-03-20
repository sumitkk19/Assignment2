var ChkArmstrong = function (no) {
    var no1 = no;
    var Rem = 0;
    var Res = 0;
    while (no1 > 0) {
        Rem = Math.floor(no1) % 10;
        Res += Rem * Rem * Rem;
        no1 = Math.floor(no1) / 10;
    }
    if (no == Res) {
        console.log("It is Armstrong Number");
    }
    else {
        console.log("It is Not Armstrong Number");
    }
};
ChkArmstrong(153);
