export function filterArrays(array, rate, initial){
  const leng = array.length;
  let y0;
  let y1;
  if ( leng > initial + rate ){
    y0 = initial + rate;
    y1 = 0;
  }else {
    y0 = leng;
    y1 = initial + rate - leng;
  }
  return array.slice(initial,y0).concat(array.slice(0,y1))
}