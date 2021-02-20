<<<<<<< HEAD
const endpoint_url = 'https://51018008.p-web.click/api';

document.addEventListener("DOMContentLoaded", function(){
  getTanaman();
});

function getTanaman() {
  fetch(endpoint_url + "/tanaman/tanamandetail")
  .then(status)
  .then(json)
  .then(function(data){
    var tanamanlistHTML = "";
    data.tanamanDetail.forEach(function(tanaman){
      tanamanlistHTML += `
        <div class = "col m4 s4">
          <div class = "card">
            <a href="detailtanaman.html?ID=${tanaman.ID}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${tanaman.gambar}"/>
              </div>
            </a>
            <div class="card-content">
            <h5 class="data">${tanaman.judul}</h5>
            <hr></hr>
            <p>${tanaman.sinopsis}</p>
            <a href="detailtanaman.html?ID=${tanaman.ID}" class="waves-effect waves-light btn-small data">View..</a>
            </div>

          </div>
        </div>
        `;

        $("#section_title").html( "10 Tanaman Hias" );
    });
        document.getElementById("tanamanlist").innerHTML = tanamanlistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getTanamanDetail(ID) {
  fetch(endpoint_url+ "/tanaman/tanamandetail"+"?ID="+ ID)
  .then(status)
  .then(json)
  .then(function(data){
    var tanamanlistHTML = "";
    data.tanamanDetail.forEach(function(tanaman){
      tanamanlistHTML += `
      <div class="card-content center">
      <h3 class="data"><strong>${tanaman.judul}</strong></h3>
      </div>
      <a href="detailtanaman.html?ID=${tanaman.ID}">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="gambartnm" src="img/${tanaman.gambar}"/>
        </div>
      </a>
      <div class="col m12 s12" style="border:2px;">
        <h5 class="data">Deskripsi</h5>
        <p>${tanaman.deskripsi}</p>
      </div>

        `;

        $("#section_title").html( "10 Tanaman Hias" );
    });
        document.getElementById("detailtanaman").innerHTML = tanamanlistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}
=======
const endpoint_url = 'http://localhost:8080/api';

document.addEventListener("DOMContentLoaded", function(){
  getTanaman();
});

function getTanaman() {
  fetch(endpoint_url + "/tanaman/tanamandetail")
  .then(status)
  .then(json)
  .then(function(data){
    var tanamanlistHTML = "";
    data.tanamanDetail.forEach(function(tanaman){
      tanamanlistHTML += `
        <div class = "col m4 s4">
          <div class = "card">
            <a href="detailtanaman.html?ID=${tanaman.ID}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${tanaman.gambar}"/>
              </div>
            </a>
            <div class="card-content">
            <h5 class="data">${tanaman.judul}</h5>
            <hr></hr>
            <p>${tanaman.sinopsis}</p>
            <a href="detailtanaman.html?ID=${tanaman.ID}" class="waves-effect waves-light btn-small data">View..</a>
            </div>

          </div>
        </div>
        `;

        $("#section_title").html( "10 Tanaman Hias" );
    });
        document.getElementById("tanamanlist").innerHTML = tanamanlistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getTanamanDetail(ID) {
  fetch(endpoint_url+ "/tanaman/tanamandetail"+"?ID="+ ID)
  .then(status)
  .then(json)
  .then(function(data){
    var tanamanlistHTML = "";
    data.tanamanDetail.forEach(function(tanaman){
      tanamanlistHTML += `
      <div class="card-content center">
      <h3 class="data"><strong>${tanaman.judul}</strong></h3>
      </div>
      <a href="detailtanaman.html?ID=${tanaman.ID}">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="gambartnm" src="img/${tanaman.gambar}"/>
        </div>
      </a>
      <div class="col m12 s12" style="border:2px;">
        <h5 class="data">Deskripsi</h5>
        <p>${tanaman.deskripsi}</p>
      </div>
      
        `;

        $("#section_title").html( "10 Tanaman Hias" );
    });
        document.getElementById("detailtanaman").innerHTML = tanamanlistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}
>>>>>>> 992c5bb88f1fb8a3c2feeac7379117a246cb3e67
