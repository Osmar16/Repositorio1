function saveItems(item){
   console.log(item); //es obj
   let val = JSON.stringify(item); // es string
   console.log(val);
   localStorage.setItem("facultades",val);
}