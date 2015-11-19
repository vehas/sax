export default function zNormal(arr) {
  arr  = arr.map((i)=> parseFloat(i,10));
  //  console.log(arr);
  let sum  = arr.reduce((f,l) =>f+l);
  var mean  = sum/arr.length;
  // console.log("sum >>>",sum);
  // console.log("mean >>>", mean);
  // console.log(arr);
  let c = arr.map((f)=>(f-mean)*(f-mean))
             .reduce((f,l) =>f+l);
  // console.log(c);
  let sd = Math.sqrt(c/arr.length);
  // console.log(sd);
  arr = arr.map((i) => (i-mean)/sd);
  // console.log(arr);
  return arr;
}
