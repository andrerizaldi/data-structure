let i = 6;
const contacts = [
  {
    id: 1,
    fullName: "Genna Arnli",
    phoneNumber: "5278765234",
    email: "garnli0@photobucket.com",
    gender: "Female"
  },
  {
    id: 2,
    fullName: "Jojo Scotchford",
    phoneNumber: "7925766855",
    email: "jscotchford1@booking.com",
    gender: "Female"
  },
  {
    id: 3,
    fullName: "Kakalina Pietasch",
    phoneNumber: "3118199662",
    email: "kpietasch2@auda.org.au",
    gender: "Female"
  },
  {
    id: 4,
    fullName: "Araldo Coil",
    phoneNumber: "5887272284",
    email: "acoil3@behance.net",
    gender: "Male"
  },
  {
    id: 5,
    fullName: "Shadow Maffi",
    phoneNumber: "8455497996",
    email: "smaffi4@bravesites.com",
    gender: "Male"
  }
];

const search = document.getElementById('search');
search.addEventListener('keyup',function(e){
  const val = e.target.value;
  view('search',val)
})

let dataUi = null;
const view = (gen,val='') => {
  if(gen == null){
    let tbody = document.getElementById("table-rows");
    tbody.innerHTML = "";
  contacts.map((item, index) => {
    // buat table
    let row = tbody.insertRow();
    // kasih atribut agar mudah delete dan edit
    row.setAttribute("id", "data_" + item.id);

    //isi kolom dengan data
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.innerHTML = item.id;
    cell2.innerHTML = item.fullName;
    cell3.innerHTML = item.email;
    cell4.innerHTML = item.phoneNumber;
    cell5.innerHTML = item.gender;
    cell6.innerHTML = `
      <a href="#" id="hapus" data-id=${item.id}> Hapus
      </a>
      <a href="#" id="edit" data-id="${item.id}"> Edit
      </a>
    `;
  });
  }else if(gen == "male"){
    let tbody = document.getElementById("table-rows");
    tbody.innerHTML = "";
    contacts.map((item, index) => {
      if(item.gender == "Male"){
      
      let row = tbody.insertRow();
      
      row.setAttribute("id", "data_" + item.id);
  
      
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      let cell6 = row.insertCell(5);
  
      cell1.innerHTML = item.id;
      cell2.innerHTML = item.fullName;
      cell3.innerHTML = item.email;
      cell4.innerHTML = item.phoneNumber;
      cell5.innerHTML = item.gender;
      cell6.innerHTML = `
        <a href="#" id="hapus" data-id=${item.id}> Hapus
        </a>
        <a href="#" id="edit" data-id="${item.id}"> Edit
        </a>
      `;
      }
      // end
    });
  }else if (gen == "female"){
    let tbody = document.getElementById("table-rows");
    tbody.innerHTML = "";
    contacts.map((item, index) => {
      if(item.gender == "Female"){
      
      let row = tbody.insertRow();
      
      row.setAttribute("id", "data_" + item.id);
  
      
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      let cell6 = row.insertCell(5);
  
      cell1.innerHTML = item.id;
      cell2.innerHTML = item.fullName;
      cell3.innerHTML = item.email;
      cell4.innerHTML = item.phoneNumber;
      cell5.innerHTML = item.gender;
      cell6.innerHTML = `
        <a href="#" id="hapus" data-id=${item.id}> Hapus
        </a>
        <a href="#" id="edit" data-id="${item.id}"> Edit
        </a>
      `;
      }
    });
  }else{
    let tbody = document.getElementById("table-rows");
    tbody.innerHTML = "";
    
    contacts.map(item =>{
    if(item.fullName.toLowerCase().indexOf(val) != -1){
      
      let row = tbody.insertRow();
      
      row.setAttribute("id", "data_" + item.id);
  
      //isi kolom dengan data
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      let cell6 = row.insertCell(5);
  
      cell1.innerHTML = item.id;
      cell2.innerHTML = item.fullName;
      cell3.innerHTML = item.email;
      cell4.innerHTML = item.phoneNumber;
      cell5.innerHTML = item.gender;
      cell6.innerHTML = `
        <a href="#" id="hapus" data-id=${item.id}> Hapus
        </a>
        <a href="#" id="edit" data-id="${item.id}"> Edit
        </a>
      `;
    }
  })
  }
};

function add(data) {
  let result = contacts.push(data);
  return result;  
}

function emailVal(email) {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


function validasi(fullName,email,phone) {
  
 if(fullName != "" && email !="" && phone != ""){
   
   if(fullName.length >= 3 && email.length >= 3 && phone.length >= 3){
    
    if(emailVal(email)){
      
      if(phone.match(/^[0-9]+$/)){
        return true
      }else{
        alert('Phone Number Harus angka');
        return false;
      }
    }else{
      alert('Email tidak Valid \n example@mail.com')
      return false;
    }

   }else{
     alert('lebih dari 3');
    return false;
   }

 }else{
   alert('Tidak Boleh kosong');
   return false;
 }
}

function remove(id) {
  let result = contacts.filter(item => item.id !== id);
  return result;
}

function edit(data, id) {
  let result = contacts.map(item => {
    if (item.id == id) {
      item.fullName = data.fullName;
      item.phoneNumber = data.phoneNumber;
      item.email = data.email;
      item.gender = data.gender;
    }
    return item;
  });
  return result;
}

document.addEventListener('click',function(e){
  function getInput(){
    let fullname = document.getElementById("fullname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let gender = document.getElementById("gender");

    let data = {
      fullName : fullname.value,
      email : email.value,
      phone : phone.value,
      gender : gender.value
    }
    return data;
  }

  function delInput(){
    fullname.value = "";
    phone.value = "";
    email.value = "";
  }

  if(e.target.id ==  'hapus' ){
    const id = e.target.attributes[2].nodeValue;
    const data = document.getElementById('data_'+id);
    data.innerHTML ="";
    remove(id)

    fullname.value = "";
    phone.value = "";
    email.value = "";
  }

  if(e.target.id == 'edit'){
    const id = e.target.attributes[2].nodeValue;

    let fullname = document.getElementById("fullname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let gender = document.getElementById("gender");
    let data_id = document.getElementById("id");
    
    let data = []
    contacts.filter(item=>{
      if (item.id == id) {
            data = item;
        }
    })

    fullname.value = data.fullName;
    email.value = data.email;
    phone.value = data.phoneNumber;
    gender.value = data.gender;
    data_id.value = data.id;

    const ubah = document.getElementById('tambah');
    ubah.setAttribute('id','ubah') 
  }

  if(e.target.id == 'ubah'){

    let fullname = document.getElementById("fullname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let gender = document.getElementById("gender");
    let data_id = document.getElementById("id");

    const valid = validasi(fullname.value, email.value, phone.value);

    if(valid){

    let data_tab = document.getElementById('data_'+data_id.value);
    data_tab.cells[1].innerHTML = fullname.value;
    data_tab.cells[2].innerHTML = email.value;
    data_tab.cells[3].innerHTML = phone.value;
    data_tab.cells[4].innerHTML = gender.value;

    let myinput = {
      fullName: fullname.value,
      phoneNumber: phone.value,
      email: email.value,
      gender: gender.value
    };

     edit(myinput,data_id.value);
    
     fullname.value = "";
     phone.value = "";
     email.value = "";

     const ubah = document.getElementById('ubah');
     ubah.setAttribute('id','tambah')
     view(null) 
     return false;
    }
  }

  if(e.target.id == 'tambah'){
    const data = getInput();
    const valid = validasi(data.fullName, data.email, data.phone);
  
    if (valid) {
      let tbody = document.getElementById("table-rows");
      let row = tbody.insertRow();
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      let cell6 = row.insertCell(5);
      row.setAttribute('id',`data_${i}`)
  
      cell1.innerHTML = i;
      cell2.innerHTML = data.fullName;
      cell3.innerHTML = data.email;
      cell4.innerHTML = data.phone;
      cell5.innerHTML = data.gender;
      cell6.innerHTML = `
      <a href="#" id="hapus" data-id="${i}"> Hapus
      </a>
      <a href="#" id="edit" data-id="${i}"> Edit
      </a>
      `;
  
      let myinput = {
        id: i++,
        fullName: data.fullName,
        phoneNumber: data.phone,
        email: data.email,
        gender: data.gender
      };
  
      add(myinput);
      
      view(null)
      delInput();
    }
  }

  if(e.target.id == "gender"){
    const data = e.target.attributes[3].nodeValue;

      if(data == "male"){
        dataUi = 'male';
      }else if(data == "female"){
        dataUi = "female";
      }else{
        dataUi = null;
      }
    
    view(dataUi)
    return false;
  }

})

view(dataUi);