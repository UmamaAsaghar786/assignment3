// MobileList={OPPO:{A31:{ram:4,rom:67,price:9098},A1:{ram:89,rom:90,price:098908}}}

obj={tecno:{spark5:{ram:7,rom:89,price:9097},spark7:{ram:89,rom:98,price:
    879098}},oppo:{A1K:{ram:4,rom:64,price:768378},A31:{ram:4,rom:64,price:67867}}}
let b=Object.keys(obj)
let c=b.length;
let names=document.getElementById("mobile")
// a.innerHTML=`<option>${b[0]}</option>`
// a.innerHTML+=`<option>${b[1]}</option>`
const names=names.filter(function(names)){
    //const element = array[i];
    names.innerHTML+=`<option value="${b[i]}">${b[i]}</option>`
}
function abc(){
    let abc=document.getElementById("model")
    let z=document.getElementById("mobile").value;
    let x=Object.keys(obj[z])
    let d=x.length
    abc.innerHTML=""
    const models=models.filter(function(models){
        models.innerHTML+=`<option value="${x[i]}">${x[i]}</option>`
    // let d=document.getElementById("speci")
    // let e=document.getElementById("models")
    // let f=Object.keys(obj[e])
    }
}
 function d(){
     let y=document.getElementById("speci").value;
     let e=document.getElementById("models").value;
     let z=obj[a][abc];
     let f=Object.keys(z);
     let g=Object.values(z);
     d.innerHTML+=`<option value="${f[i]}">${f[i]}</option>`
 }