// constructor
function Facultades(name,campus){
    this.name=name;
    this.campus=campus;
}

//validacion


//register
function register(){
    let inputName = document.getElementById("txtfacultad").value;
    let inputCampus = document.getElementById("txtcampus").value;

    let nuevaFacultad = new Facultades(inputName,inputCampus);
    // console.log(nuevaFacultad);
    saveItems(nuevaFacultad); // this fn is on StoreManager
}