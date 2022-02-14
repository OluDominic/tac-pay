export function userData() {

    let data = JSON.parse(localStorage.getItem('userdata'));

    if (!data) {
        // history.push('/')
     }
     else{
         data=JSON.parse(data);
         console.log(data,'popop')
   //setUserdata(data);
     }
}