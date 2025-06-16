const storeData = [
  {
    firstName: "Koko",
    lastName: "sok",
    email: "das@gmail.com",
    phone: +88569398172,
    gender: "male",
  },
  {
    firstName: "Saa",
    lastName: "sok",
    email: "sa@gmail.com",
    phone: +88569398172,
    gender: "female",
  },
  {
    firstName: "Leo",
    lastName: "sok",
    email: "leo@gmail.com",
    phone: +88569398172,
    gender: "male",
  },
];
// Define Pattern
const catchNumber = /\d/;
const catchLetter = /^[a-zA-Z]{1,30}$/;
const passRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const catchPhoneNumber = /^\+?[0-9]\d{9,14}$/;
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const gender = document.getElementById("gender");
let savetButton = document.querySelector("#btn-save");
let cancelButton = document.querySelector("#btn-cencel");

const firstNameErr = document.querySelector(".error-first-name");
const lastNameErr = document.querySelector(".error-last-name");
const emailErr = document.querySelector(".error-email");
const phoneErr = document.querySelector(".error-phone-number");
const genderErr = document.querySelector(".error-gender");
validateForm();
function validateForm() {
  savetButton.addEventListener("click", (e) => {
    e.preventDefault();
    const getFirstName = firstName.value.trim();
    const getLastName = lastName.value.trim();
    const getEmail = email.value.trim();
    const getPhone = phone.value.trim();
    const getGender = gender.value;

    let isValid = true;
    if (getFirstName === "" || !catchLetter.test(getFirstName)) {
      firstNameErr.innerHTML = "Required (letter only from 1 to 30).";
      isValid = false;
    } else {
      firstNameErr.innerHTML = "";
    }
    if (getLastName === "" || !catchLetter.test(getLastName)) {
      lastNameErr.innerHTML = "Required (letter only from 1 to 30).";
      isValid = false;
    } else {
      lastNameErr.innerHTML = "";
    }
    if (getEmail === "" || !emailRegex.test(getEmail)) {
      emailErr.innerHTML = "Unvalid email.";
      isValid = false;
    } else {
      emailErr.innerHTML = "";
    }
    if (getPhone === "" || !catchPhoneNumber.test(getPhone)) {
      phoneErr.innerHTML = "Unvalid number phone.";
      isValid = false;
    } else {
      phoneErr.innerHTML = "";
    }
    if (getGender === "") {
      genderErr.innerHTML = "Please select a gender.";
      isValid = false;
    } else {
      genderErr.innerHTML = "";
    }
    if (isValid) {
      alert("Form submitted successfully!");
      const index = indexUpdate.value;
      if (index !== "") {
        storeData[index] = {
          firstName: getFirstName,
          lastName: getLastName,
          email: getEmail,
          phone: getPhone,
          gender: getGender,
        };
      } else {
        storeData.push({
          firstName: getFirstName,
          lastName: getLastName,
          email: getEmail,
          phone: getPhone,
          gender: getGender,
        });
      }
      resetForm();
      resetErrorForm();
      loadDataToPage();
      return true;
    } else {
      return false;
    }
  });
  cancelButton.addEventListener("click", () => {
    resetForm();
    resetErrorForm();
  });
}

function loadDataToPage() {
  let card = ``;

  storeData.forEach((items, index) => {
    card += `
     <tr>
     <td>${items.firstName}</td>
     <td>${items.lastName}</td>
     <td>${items.email}</td>
     <td>${items.phone}</td>
     <td>${items.gender}</td>
     <td>
     <button onclick="updateData(${index})" class="shadow-none btn btn-warning js-update-btn">Update</button>
     <button onclick="deleteData(${index})" class="shadow-none btn btn-danger js-delete-btn">Delete</button>
     </td>
     </tr>
    `;
  });
  document.querySelector(".table-display").innerHTML = card;
}
loadDataToPage();

function resetForm() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  phone.value = "";
  gender.value = "";
}

function resetErrorForm() {
  firstNameErr.innerHTML = "";
  lastNameErr.innerHTML = "";
  emailErr.innerHTML = "";
  phoneErr.innerHTML = "";
  genderErr.innerHTML = "";
}

function deleteData(index) {
  storeData.splice(index, 1);
  loadDataToPage();
}
const indexUpdate = document.getElementById("indexUpdate");
function updateData(index) {
  const currentObject = storeData[index];
  firstName.value = currentObject.firstName;
  lastName.value = currentObject.lastName;
  email.value = currentObject.email;
  phone.value = currentObject.phone;
  gender.value = currentObject.gender;
  indexUpdate.value = index;
  console.log(storeData[index]);
}
