export default function sax3(paa){
  return paa.map(i=>{
    if(i> 0.43) return 'c'
    else if( i > -0.43) return 'b'
    return 'a'
  })

}
