


function Maximum(no: number[]): void{
    var max;
    for (var i = 0; i < no.length; i++){
     
        for (var j = i + 1; j < no.length; j++){
            if (no[i] < no[j])
            {
                max = no[i];
                no[i] = no[j];
                no[j] = max;

                }
        }
    }
    console.log("Second Maximum Number is" + no[1]);
}

Maximum([23, 89, 6, 29, 56, 45, 77, 32]);