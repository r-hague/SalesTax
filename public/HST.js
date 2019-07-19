
class HST{
    static calculate(sProv, nAmt){
        let rc = 0;
        switch(sProv){
            case "ON":
                rc = nAmt *.13;
                break;
            case "AB":
                rc = nAmt *.05;
                break;
            case "MB":
                rc = nAmt *.13;
                break;
            case "SK":
                rc = nAmt *.11;
                break;
            case "BC":
                rc = nAmt *.12;
                break;

            default:
                throw "invalid province";
        }
        return rc;
    }
}

module.exports = HST;