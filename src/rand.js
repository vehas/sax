export default  function randarr(n,min,max,seed) {
  let arr = [];
  // let arr.lenght = n;
  // console.log(Math.random() * (max - min) + min);
  // arr = arr.map(a => Math.random() * (max - min) + min);
  Math.seedrandom(seed);
  for(let i=0;i<n ; i++){
     arr.push((Math.random() * (max - min) + min).toFixed(2));
  }
  // console.log(arr);
  return arr;

}
