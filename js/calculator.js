
let cur_value =null;
let first_operand= null;
let cur_operator = null;
let second_operand = null;

function insert(num) {
    document.form1.textview.value = document.form1.textview.value + num;
    
}

function insertoperator(num) {
    if(document.form1.textview.value.slice(-1)==='*'||document.form1.textview.value.slice(-1)==='/'|| document.form1.textview.value.slice(-1)==='+'||document.form1.textview.value.slice(-1)==='-'){
        document.form1.textview.value=document.form1.textview.value.slice(0,-1)+num;
    }else{
    
    const exp = document.form1.textview.value;
    if (exp) {
        document.form1.textview.value = eval(exp);
        document.form1.textview.value = document.form1.textview.value + num;
    }
}
}
function alertNum(el){
    alert(el);
}

function equal() {
    const exp = document.form1.textview.value;
    if (exp) {
        document.form1.textview.value = eval(exp);
    }
    alertNum(eval(exp))
}

function backspace() {
    const exp = document.form1.textview.value;
    document.form1.textview.value = exp.substring(0, exp.length - 1);
}

function clear(){
    let cur_value ;
    let first_operand;
    let first_operator ;
    let second_operand ;

}

function power(){
    const exp = document.form1.textview.value;
    if (exp) {
        document.form1.textview.value = eval(exp)**2;
}
}

function promptAlert(){
    alert("Developer: Tomer Ben Jonathan" + "\n" + "Version: 0.1" + "\n" + "Description: Calculator App");
}

function myFunction() {
    const sel1 = document.getElementById('background').value;
    document.body.style.backgroundColor = sel1;
    backspace();

}



