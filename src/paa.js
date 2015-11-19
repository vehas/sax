export default function PAA(zarr,SaxLenght) {
  // console.log(SaxLenght);
  let sarr = []
  for (var i = 0; i < SaxLenght; i++) {
      sarr.push([]);
  };
  // console.log(sarr);
  let propotion  = zarr.length/SaxLenght;
  // console.log(propotion);
  let paa =  zarr.reduce((arr,xi,index)=>{
    arr[parseInt(index/propotion)].push(xi);
    return arr;
  },sarr)
  .map(marr => marr.reduce((f,l)=> f+l)/propotion);
  // console.log('paa ',""+paa);

  return paa;
}
