const Data ="./json/Data.json";
const listData = document.querySelector('#coba');

const getListData = () => {
  fetch (Data)
  .then(response => {
    return response.json();
  }).then(responseJson => {
    console.log(responseJson.kkn);
    listData.innerHTML = "";
    let glr = responseJson.kkn;
    glr.forEach(item => {
      listData.innerHTML += `
      <img src="${item.gambar}">
      <h3>${item.judul}</h3>
      <p>${item.deskripsi}</p>
      `
    });
  }).catch(error => {
    console.log(error)
  })
}

document.addEventListener("DOMContentLoaded",getListData);
















// fetch("./json/Data.json")
// .then(function(response){
//   return response.json();
// })

// .then(function(galeris){
//   let coba = document.querySelector('#coba');
//   let out = "";
//   for(let galerii of galeris) {
//     out += `
//       <img src="${galerii.galeri}">
//     `;
//   }
//   coba.innerHTML = out;
// })