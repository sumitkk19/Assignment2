

function ChkString(str: string): void{
    var Sentence: string = "Pune Kothrud Marvellous Infosystems";
    if (Sentence.indexOf(str) != -1) {
        console.log("String Contains Marvellous In It");
    }
    else {
        console.log("String does not contains Marvellous");

    }
    
}

ChkString("Pune Kothrud Marvellous Infosystems");
