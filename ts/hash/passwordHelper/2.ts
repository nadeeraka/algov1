

const state ={
    score:0,
    strings:0,
    numbers:0,
    simboles:0
}

const passwordHalper:any =(word:string)=>{
// make a array
// loop and see each char 
// score machnisam 
// return score

const array = word.split('')
array.forEach(element => {
    findChar(element)
});


}



const findChar:any =(char:any)=>{
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
   if (isNaN(char)) {
    state.strings++
   } else if (format.test(char)){
    state.simboles++

   }else{
    state.numbers++
   }
} 




const processor = (obj)=>{

    //  length 1-3 -0   1-6 -1 1-10 -2  1-16 -3  16 < 4
    // numbers 1-3 - 1  3< = 2
    // symboles  1-3 - 2  3< = 3



  const len:number = state.numbers+ state.simboles+ state.strings

  const lenAlgo:number = len>4? len/4: 0

  const strAlgo:number = state.strings >4? state.strings/4 : 0

  const symAlgo:number = state.simboles>2?state.simboles:0



const total:number = Math.round(lenAlgo+strAlgo+symAlgo)


return total


  
}