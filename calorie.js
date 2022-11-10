function hitungKalori(form){
    let kalori = 0
    if (form.gender === 'male'){
        kalori = (10 * form.bb) + (6.25 * form.tinggi) - (5 * form.umur) + 5
    } else if (form.gender === 'female') {
        kalori = (10 * form.bb) + (6.25 * form.tinggi) - (5 * form.umur) - 161
    }
    if (form.kegiatan === 'sedentary'){
        kalori *= 1.2
    }
    else if (form.kegiatan === 'ligthly active'){
        kalori *= 1.375
    }
    else if (form.kegiatan === 'moderately active'){
        kalori *= 1.55
    }
    else if (form.kegiatan === 'very active'){
        kalori *= 1.725
    }
    else if (form.kegiatan === 'extra active'){
        kalori *= 1.9
    }
    if (form.weight === 'lose weight'){
        kalori -= 500
    }
    if (form.weight === 'gain weight'){
        kalori += 500
    }
    
    return kalori
}

let form = {
    gender: 'female',
    umur: 22,
    tinggi: 156,
    bb: 52,
    bbtarget: 48,
    kegiatan: 'sedentary',
    weight: 'maintain weight'
}
console.log(hitungKalori(form))

const menuList = document.querySelector('.menu-list')

function foodList(){
  let food = [
    {
        nama: 'nasi',
        calorie: 175,
        gram: 100
    },
    {
        nama: 'nasi goreng',
        calorie: 267,
        gram: 100
    },
    {
        nama: 'sate ayam',
        calorie: 466,
        gram: 100
    },
    {
        nama: 'siomay',
        calorie: 361,
        gram: 100
    },
    {
        nama: 'telur goreng',
        calorie: 92,
        gram: 100
    },
    {
        nama: 'roti tawar',
        calorie: 128,
        gram: 50
    },
    {
        nama: 'mie instant',
        calorie: 168,
        gram: 50
    },
    {
        nama: 'ayam panggang',
        calorie: 164.3,
        gram: 100
    },
    {
        nama: 'pepaya',
        calorie: 46,
        gram: 100
    },
    {
        nama: 'apel',
        calorie: 92,
        gram: 160
    },
    {
        nama: 'alpukat',
        calorie: 85,
        gram: 100
    },
    {
        nama: 'tempe goreng',
        calorie: 200,
        gram: 100
    },
    {
        nama: 'pisang ambon',
        calorie: 74.2,
        gram: 100
    },
    {
        nama: 'anggur',
        calorie: 60,
        gram: 125
    },
    {
        nama: 'sayur lodeh',
        calorie: 61,
        gram: 100
    },
    {
        nama: 'sayur asam',
        calorie: 88,
        gram: 100
    },
    {
        nama: 'sop bayam',
        calorie: 78,
        gram: 50
    },
    {
        nama: 'tahu goreng',
        calorie: 111,
        gram: 100
    },
 ]

    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    let counter = 0
    // creating all cells
    for (let i = 0; i < food.length; i++) {
        
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        const cell2 = document.createElement("td");
        const cell3 = document.createElement("td");
        const cell4 = document.createElement("td");
        const menuMakanan = document.getElementById('menu-makanan')
        const cellText = document.createTextNode(`${food[i].nama}`);
        const gram = document.createTextNode(`${food[i].gram}`);
        const calorie = document.createTextNode(`${food[i].calorie}`)
        const infoButton = document.createElement('button')
        infoButton.innerHTML = 'add'
        infoButton.classList.add('add-btn')
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = 'add'
        cell.appendChild(cellText);
        cell2.appendChild(gram);
        cell3.appendChild(calorie);
        row.appendChild(cell);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(infoButton);
        menuMakanan.appendChild(row);
        infoButton.addEventListener("click", function(){ 
        
        document.getElementById('calorie-harian').innerHTML += `<tr><td>${food[i].nama}</td><td>${food[i].gram}</td><td>${food[i].calorie}</td><td><button onclick="deleteRow(${counter})">Delete</button></td></tr>`; 
        counter++
        }); 
        
    }
    
    // for (let j = 0; j < food.length; j++) {
    //     const menuMakanan = document.getElementById('calorie-harian')
    // }

}
foodList()

function deleteRow(index){
    let el = document.getElementById('calorie-harian')
    var children = el.children;
    if(children.length > 0) {
        el.removeChild(children[index]);
    }
    foodList()
}

// function deleteWord(){
//     const menuMakanan = document.getElementById('calorie-harian')
//     document.getElementById("myTable").deleteRow
// }
  
// function remove(elem){
//     elem.parentNode.removeChild(elem);
//   }
//   <div id="i", onclick="remove(this)">click</div>
