//-----Date----
var input = document.getElementById("date");
var btn = document.getElementById("go1");
var ans = document.getElementById("ans");

function goDate() {
    var val = input.value;
    let c = "";
    let join = "";
    let r = val.match(/[a-zA-Z]/g);
    let r1 = /[ -/:-@[-`{-~}]/;
    // console.log(r)
    if (r == false || r == null) {
        if (val.length >= 6) {
            if (val.match(r1)) {
                c = val.charAt(2);
                let sp = val.split(c);
                join = sp[1] + "-" + sp[0] + "-" + sp[2];
                console.log(join);
            }
            else if (val.length >= 6) {
                let d = val.slice(0, 2);
                // console.log(d);
                let m = val.slice(2, 4);
                // console.log(m);
                let y = val.slice(4);
                // console.log(y);
                join = m + "-" + d + "-" + y;
                console.log(join);
            }
            let date = new Date(join);
            if (date != "Invalid Date") {
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                let res = year + "-" + month + "-" + day;
                ans.value = res;
                console.log(res);
            }
            else {
                alert("please enter valid 'month,date or year'!");
                input.value = " ";
            }
        }
        else {
            alert("please enter Minimum length 6 character value!");
            input.value = " ";
        }
    }
    else {
        alert("Please enter only Numeric values!")
        input.value = " ";
    }
}

//----Math------
var v1 = document.getElementById("val1");
var v2 = document.getElementById("val2");
var v3 = document.getElementById("val3");
var answer = document.getElementById("ans1");

//-Only numbers---
let r  = /[0-9]/g;

//----events----
answer.addEventListener("mouseover", deci());
answer.addEventListener("mouseout", round());

//---functions----
function deci() {
    if(r.test(v1.value) && r.test(v2.value) && r.test(v3.value)){
    let sum = eval(v1.value + "+" + v2.value + "+" + v3.value);
    let str = sum.toString();
    let v = 2;
    str = str.slice(0, (str.indexOf(".")) + v + 1);
    answer.value = Number(str);
    }
    else{
        alert("Please enter only numbers!");
    }
}
function round() {
    if(r.test(v1.value) && r.test(v2.value) && r.test(v3.value)){
    let sum = eval(v1.value + "+" + v2.value + "+" + v3.value);
    let r = sum.toFixed();
    answer.value = r;
    }
    else{
        alert("Please enter only numbers!");
    }
}

