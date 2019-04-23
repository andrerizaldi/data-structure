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

let db = {
  contacts: []
};

function view() {
  let tbody = document.getElementById("table-rows");
  contacts.map((data, index) => {
      let row = tbody.insertRow();
      let fullName = row.insertCell();
      let phoneNumber = row.insertCell();
      let email = row.insertCell();
      let gender = row.insertCell();
      let aksi = row.insertCell();
      fullName.innerHTML = data.fullName;
      phoneNumber.innerHTML = data.phoneNumber;
      email.innerHTML = data.email;
      gender.innerHTML = data.gender;
      aksi.innerHTML = ("<button>Edit</button> <button>Hapus</button>");
  });
}

function add() {
  var object = {
    id: 6,
    fullName: "ANDRE ",
    phoneNumber: "008455497996",
    email: "rizalandre07@bravesites.com",
    gender: "Male"
  }
  contacts.push(object);
  let tbody = document.getElementById("table-rows");
  let tr = document.getElementsByTagName("TR");
  
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  view();
}

function edit(data, id) {
  let result = contacts.map(item => {
    if (item.id == id) {
      return { ...item, ...data };
    }
    return item;
  });
  return result;
}

function remove(data, id) {

}

function updateDb(data){
db.contacts = data;
}


let result;
result = view();

// updateDb(result);
// console.log(db);

result = add();
// console.log(result);

// result = edit(myInput, 1);
// console.log(result);