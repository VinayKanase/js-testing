

export default function arrayAnalyze(array){
    if(!array) return {average: null,min: null,max: null,length: undefined};
    if(array.length === 0) return {average:null,min:null,max:null,length:0};
    const total = array.reduce((total,currValue)=> total + currValue,0);
    const object = {
        min: Math.min(...array),
        max: Math.max(...array),
        average:total/array.length,
        length: array.length
    };
    return object;
}

// module.exports = arrayAnalyze;