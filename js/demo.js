$('#menu').click(() => {
    $('#menuBurger').toggleClass('inactive')
    $('#menuClose').toggleClass('inactive')
    $('#menuList').toggleClass('hidden').hide().fadeIn(800);
})


Array.prototype.myMap=function(call){
    const newArr=[];
    for(let i=0; i<this.length; i++){
        newArr.push(call(this[i], i, this))
    }
    return newArr;
}

Array.prototype.myFilter=function(call){

    const newArr=[]
    for(let i=0; i<this.length; i++){
        if(call(this[i])){
            newArr.push(this[i], i, this)
        }
    }
    return newArr;
}

const sample=[1, 2, 3];
// const c=sample.filter(el=>el>1)
// console.log(c)

const b=sample.myFilter(el => el>1);

console.log(b)

const a=sample.myMap(el => el*2);

console.log(a);


