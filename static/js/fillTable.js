fetch('https://api.punkapi.com/v2/beers')
.then(function(response) {
  return response.json();
}).then(function(data) {
  let tableRows = '';
  let counter = 1;
  data.forEach(function(beer){
    let malt = `${beer.ingredients.malt[0].name}`;
    if(malt.includes("Extra Pale")) {
      tableRows += `
      <tr>
        <td>${counter}</td>
        <td>${beer.name}</td>
        <td>${beer.ingredients.malt[0].name}</td>
        <td>${beer.abv}</td>
      </tr>
      `;
      counter++;
    }
});
document.getElementById('table_body').innerHTML = tableRows;
}).catch(function(err) {
  console.log(err);
});


function filterAbvg7Beers()
 {
  isChecked = document.getElementById("abvg7").checked;
  let tableBody = document.getElementById("table_body");
  let tr = tableBody.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[3].innerText;
     if (td) {
     if(isChecked == true) {
         if (td > 7) {
           tr[i].style.display = "";
         } else {
           tr[i].style.display = "none";
         }
     }
     else {
         tr[i].style.display = "";
     }
    }
  }
 }
