
function taxcalulation(amount){

    if(amount<=250000){
        return "Tax not Applied";
    }if(amount>=250000 && amount<=500000){
        let tax = amount*(10/100);
        return tax
    }if(amount>500000 && amount<=1000000){
          let tax = amount*(20/100);
          return tax;
    }if(amount>1000000){
        let tax = amount*(30/100);
        return tax;
    }
}
module.exports = taxcalulation;