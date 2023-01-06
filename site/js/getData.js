const data = "./json/Data.json";
const listData = document.querySelector("galeri");

const getGaleri = () => {
  fetch(data)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      console.log(responseJson.galeri);
      listData.innerHTML = "";
      let galeri = responseJson.galeri;
      galeri.forEach((item) => {
        galeri.innerHTML += `
       
                <div class="thumbnail-mary-figure">
                  <img
                    src="${item.gambar}"
                    alt=""
                    width="270"
                    height="195"
                  />
                </div>
                <div class="thumbnail-mary-caption">
                  <a
                    class="icon fl-bigmug-line-zoom60"
                    href="${item.gambar}"
                    data-lightgallery="item"
                    ><img
                      src="${item.gambar}"
                      alt=""
                      width="270"
                      height="195"
                  /></a>
                </div>`    
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

document.addEventListener("DOMContentLoaded", getGaleri);
