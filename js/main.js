//Elments
let screen= document.getElementById("screen");
let numberBTN= document.querySelectorAll('[id*="num"]');
let opertorBTN= document.querySelectorAll('[id*="oper"]');
let advancedOper=document.querySelectorAll('[id*="X"]');
var operType='';
var val = {prev:null,new:null, totel:null, totelOper:null};
var advOper = '';
var isNumber= false;
var num; 
var resalt;
var resaltX;
var x =null;
var clickedEqual=false;
var clickedOper=false;
for (let i = 0; i < advancedOper.length; i++) {

    advancedOper[i].onclick = function Adv() {
        clickedOper=true;
    if (clickedOper===true) {
        switch (advancedOper[i]) {
            case document.getElementById("sinX"):
                screen.textContent='sin(_)';                
                break;
                case document.getElementById("cosX"):
                    screen.textContent='cos(_)';
                    break;
                    case document.getElementById("tanX"):
                screen.textContent='tan(_)';
                break;
                case document.getElementById("secX"):
                screen.textContent='sec(_)';
                break;
                case document.getElementById("cscX"):
                screen.textContent='csc(_)';
                break;
                case document.getElementById("cotX"):
                screen.textContent='cot(_)';
                break;
                case document.getElementById("logX"):
                screen.textContent='log(_)';
                break;
                case document.getElementById("linX"):
                screen.textContent='ln(_)';
                break;
                case document.getElementById("sqrtX"):
                screen.textContent='√(_)';
                break;
                case document.getElementById("cubicX"):
                screen.textContent = " ∛(_)";
                break;
                default:
                    break;

        }
        advOper=screen.textContent;
    }
    isNumber=false;
    clickedEqual=false;
    }
}
// numbers
for (let index = 0; index < numberBTN.length; index++) {
    numberBTN[index].onclick= function getNumber() {
        
        num=Number(numberBTN[index].textContent.toString());
        if(isNumber){            
            if (clickedOper===true) {
                if(val.new){
                    x=val.new.toString()+num.toString() ;
                    val.new=x;
                }else{
                    x= val.prev.toString()+num.toString();
                    val.prev=x;
                }
                switch (advOper) {
                    case 'sin(_)':
                        screen.textContent=`sin(${x})`;
                        val.totel=Math.sin(x*Math.PI/180);
                        break;
                        case 'cos(_)':
                            screen.textContent=`cos(${x})`;
                            val.totel=Math.cos(x*Math.PI/180);
                            break;
                            case 'tan(_)':
                            screen.textContent=`tan(${x})`;
                            val.totel=Math.tan(x*Math.PI/180);;
                        break;
                        case 'sec(_)':
                        screen.textContent=`sec(${x})`;
                        
                        
                        break;
                        case 'csc(_)':
                        screen.textContent=`csc(${x})`;
                        
                        
                        break;
                        case 'cot(_)':
                        screen.textContent=`cot(${x})`;
                        
                        
                        break;
                        case 'log(_)':
                        screen.textContent=`log(${x})`;
                        break;
                        case 'ln(_)':
                        screen.textContent=`ln(${x})`;   
                        break;
                        case '√(_)':
                screen.textContent=`√(${x})`;
                break;
                case ' ∛(_)':
                screen.textContent = `∛(${x})`;
                break;
                    default:
                        break;
                }
                
            }else{
                if(val.new){
                resalt=val.new.toString()+num.toString() ;
                val.new=resalt;
                screen.textContent=resalt;
            }else{
                resalt= val.prev.toString()+num.toString();
                val.prev=resalt;
                screen.textContent=resalt;
            }

            }
        }else{
            if (clickedOper===true) {
                
                    if (val.prev) {
                        val.new=num;
                        }else{
                        val.prev=num;
                    }
                
                
                switch (advOper) {
                    case 'sin(_)':
                        screen.textContent=`sin(${num})`;
                        break;
                        case 'cos(_)':
                            screen.textContent=`cos(${num})`;
                            break;
                            case 'tan(_)':
                            screen.textContent=`tan(${num})`;
                        
                        break;
                        case 'sec(_)':
                        screen.textContent=`sec(${num})`;
                        
                        
                        break;
                        case 'csc(_)':
                        screen.textContent=`csc(${num})`;
                        
                        
                        break;
                        case 'cot(_)':
                        screen.textContent=`cot(${num})`;
                        
                        
                        break;
                        case 'log(_)':
                        screen.textContent=`log(${num})`;
                        
                        
                        break;
                        case 'ln(_)':
                        screen.textContent=`ln(${num})`;
                        
                        break;
                        case '√(_)':
                screen.textContent=`√(${num})`;
                break;
                case ' ∛(_)':
                screen.textContent = `∛(${num})`;
                break;
                    default:
                        break;
                }
                
            }else{
                if(clickedEqual){
                    val.new=null;
                    val.prev=num;
                    screen.textContent=num;
                }else{
                    if (val.prev) {
                    val.new=num;
                    screen.textContent=num;
                }else{
                    val.prev=num;
                    screen.textContent=num;
                }
                }
            }
        if (numberBTN[index]===document.getElementById('numE')) { 
            screen.textContent='e';
            if(val.prev){
                val.new=Math.E
            }else{
                val.prev=Math.E
            }
        }
        
        }
        isNumber= true;
        clickedEqual=false;
    }
}
//opertors
for (let index = 0; index < opertorBTN.length; index++) {
    opertorBTN[index].onclick= function getOpertor() {
        
        if (opertorBTN[index]!=document.getElementById('opereqaul')) {
            operType=opertorBTN[index];
            screen.textContent=opertorBTN[index].textContent.toString();
        }
        
        isNumber= false;
        clickedEqual=false;
        clickedOper=false;

    }
    ///////////////////////////////////////////////////
    document.getElementById("opereqaul").onclick=function calcolator() {
        
    switch (operType) {
        case document.getElementById('operplus'):
            val.totelOper=Number(val.prev)+Number(val.new)
            screen.textContent=val.totelOper.toString();
            val.prev=val.totelOper;
            break;
            case document.getElementById('opermin'):
                val.totelOper=Number(val.prev)-Number(val.new)
                screen.textContent=val.totelOper;
                val.prev=val.totelOper;
                val.t
                break;
                case document.getElementById('operMul'):
                    val.totelOper=Number(val.prev)*Number(val.new)
                    screen.textContent=val.totelOper;
                    val.prev=val.totelOper;
                    break;
                    case document.getElementById('operdiv'):
                        val.totelOper=Number(val.prev)/Number(val.new)
                        screen.textContent=val.totelOper;
                        val.prev=val.totelOper;
                        break;
        default:
            break;
    }
    switch (screen.textContent) {
        case `sin(${x})`:
            let sinX=Math.sin(x*Math.PI/180);
            if(!val.new){
                val.prev=sinX;
            }else{
                val.new=sinX;
            }
            break;
            case `cos(${x})`:
                let cosX=Math.cos(x*Math.PI/180);
            if(!val.new){
                val.prev=cosX;
            }else{
                val.new=cosX
            }
                break;
                case `tan(${x})`:
                    let tanX=Math.tan(x*Math.PI/180);
            if(!val.new){
                val.prev=tanX;
            }else{
                val.new=tanX;
            }
                
            break;
            case `sec(${x})`:
                let secX=1/Math.cos(x*Math.PI/180);
                if(!val.new){
                    val.prev=secX;
                }else{
                    val.new=secX;
                }
            
            break;
            case `csc(${x})`:
                let cscX=1/Math.sin(x*Math.PI/180);
                if(!val.new){
                    val.prev=cscX;
                }else{
                    val.new=cscX;
                }
            break;
            case `cot(${x})`:
                let cotX=1/Math.tan(x*Math.PI/180);
                if(!val.new){
                    val.prev=cotX;
                }else{
                    val.new=cotX;
                }
            break;
            case `log(${x})`:
                let logX=Math.log10(x);
                if(!val.new){
                    val.prev=logX;
                }else{
                    val.new=logX;
                }
            break;
            case `ln(${x})`:
                let lnX=Math.log(x);
                if(!val.new){
                    val.prev=lnX;
                }else{
                    val.new=lnX;
                }
            break;
            case `√(${x})`:
                let sqX=Math.sqrt(x);
                if(!val.new){
                    val.prev=sqX;
                }else{
                    val.new=sqX;
                }
            break;
            case `∛(${x})`:
                let cqX=Math.sqrt(x);
                if(!val.new){
                    val.prev=cqX;
                }else{
                    val.new=cqX;
                }
            break;
            //num

            case `sin(${num})`:
            let sinN=Math.sin(num*Math.PI/180);
            if(!val.new){
                val.prev=sinN;
            }else{
                val.new=sinN;
            }
            break;
            case `cos(${num})`:
                let cosN=Math.cos(num*Math.PI/180);
            if(!val.new){
                val.prev=cosN;
            }else{
                val.new=cosN;
            }
                break;
                case `tan(${num})`:
                    let tanN=Math.tan(num*Math.PI/180);
            if(!val.new){
                val.prev=tanN;
            }else{
                val.new=tanN;
            }
                
            break;
            case `sec(${num})`:
                let secN=1/Math.cos(num*Math.PI/180);
                if(!val.new){
                    val.prev=secN;
                }else{
                    val.new=secN;
                }
            
            break;
            case `csc(${num})`:
                let cscN=1/Math.sin(num*Math.PI/180);
                if(!val.new){
                    val.prev=cscN;
                }else{
                    val.new=cscN;
                }
            break;
            case `cot(${num})`:
                let cotN=1/Math.tan(num*Math.PI/180);
                if(!val.new){
                    val.prev=cotN;
                }else{
                    val.new=cotN;
                }
            break;
            case `log(${num})`:
                let logN=Math.log10(num);
                if(!val.new){
                    val.prev=logN;
                }else{
                    val.new=logN;
                }
            break;
            case `ln(${num})`:
                let lnN=Math.log(num);
                if(!val.new){
                    val.prev=lnN;
                }else{
                    val.new=lnN;
                }
            break;
            case `√(${num})`:
                let sqN=Math.sqrt(num);
                if(!val.new){
                    val.prev=sqN;
                }else{
                    val.new=sqN;
                }
            break;
            case `∛(${num})`:
                let cqN=Math.sqrt(num);
                if(!val.new){
                    val.prev=cqN;
                }else{
                    val.new=cqN;
                }
            break;
        default:
            break;
    }

    if(val.new===null){
        val.totelOper=val.prev;
        screen.textContent=val.totelOper
    }
    
    isNumber= false;
clickedEqual=true;
clickedOper=false;
    console.log(val.prev,val.new)
    } 

}
document.getElementById("exit").onclick=function () {
    close();
}
document.getElementById('clear').onclick=function(){
    window.location.reload();
}

