export function currentDate() {
   let today = new Date();
   let dd = ("0" + (today.getDate())).slice(-2);
   let mm = ("0" + (today.getMonth() + 1)).slice(-2);
   let yyyy = today.getFullYear();
   return yyyy + '-' + mm + '-' + dd
}
export function currentDateHour() {
   let today = new Date();
   let dd = ("0" + (today.getDate())).slice(-2);
   let mm = ("0" + (today.getMonth() + 1)).slice(-2);
   let hh = today.getHours()
       hh = hh < 10 ? '0'+hh : hh
   let Min = today.getMinutes()
   let yyyy = today.getFullYear();
   return yyyy + '-' + mm + '-' + dd + 'T'+hh+':'+Min
}