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

function view(contacts) {
  contacts.map(function(data) {
    console.log(
      data.id,
      data.fullName,
      data.phoneNumber,
      data.email,
      data.gender
    );
  });
}

function add(data) {
  let result = [...contacts, data];
  return result;
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

function remove(data, id) {}

let myInput = {
  id: 6,
  fullName: "John Doe",
  phoneNumber: "12345",
  email: "johndoe@email.com",
  gender: "Male"
};

let result;
result = add(myInput);
console.log(result);

result = edit(myInput, 1);
console.log(result);
console.log(myInput);
