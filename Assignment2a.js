function Maximum(no) {
    var Max = 0;
    for (var i = 0; i < no.length; i++) {
        if (no[i] > Max)
            Max = no[i];
    }
    console.log(Max);
}
Maximum([23, 89, 6, 29, 56, 45, 77, 32]);
