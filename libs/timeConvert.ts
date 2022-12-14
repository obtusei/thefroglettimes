export const ConvertTime = (d:string) => {
  const date = new Date(d);
  const year = date.getFullYear();
  let month = date.getMonth()+1;
  let dt = date.getDate();

  return  (year+'-' + month + '-'+dt)
}