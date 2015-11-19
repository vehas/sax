export default function distance3(saxa,saxb) {
  let distance = [0,    0, 0.86,
                  0,    0, 0,
                  0.86, 0, 0];
   let dis  = saxa.map((_,i)=>[saxa[i],saxb[i]])
                 .map(tuple =>{
                   console.log(tuple[0], tuple[1]);
                   if((tuple[0] ==='c' && tuple[1] ==='a') ||
                   (tuple[0] ==='a' && tuple[1] ==='c')){
                     return 0.86;
                    }
                  return 0 ;
                  })
                  .reduce((f,l) => f+l );
   console.log(dis);
   return dis
}
