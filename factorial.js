var input = document.getElementById("input");
function factorialFn (n) {
    var fac = 1;
    if(n === 1 || n<=0 ){
        return 1
    }
    else{
        for(var i = 1 ; i<= n ; i++){
            fac = fac * i;
        }
        return fac
    }
    
};
function tinhGiaiThua(){
    document.getElementById("factorial").innerHTML = this.factorialFn(input.value);
}