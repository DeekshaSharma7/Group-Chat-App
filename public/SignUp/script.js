const formSignUp = document.getElementById("form-signup");
const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputPhone = document.getElementById("input-phone");
const inputPassword = document.getElementById("input-password");

const labelStatus = document.getElementById("label-status");

const baseUrl = "http://localhost:3001/";

formSignUp.onsubmit = async (event) => {
  labelStatus.textContent = "";
  event.preventDefault();
  try {
    const obj = {
      name: inputName.value,
      email: inputEmail.value,
      phone: inputPhone.value,
      password: inputPassword.value,
    };

    const result = await axios.post(baseUrl + "User/signup", obj);

    const status = result.status;

    if (status == 200) {
      labelStatus.textContent = "Signup Successfull !";
      alert("Successfully Signed Up");
      window.location = "../Login/index.html";
    } else {
      //Not Required
    }
  } catch (err) {
    labelStatus.style.color = "red";
    const status = err.response.status;
    if (status == 401) {
      labelStatus.textContent = "User Already Exists!";

      alert("User Already Exists! Please Login");
    } else {
      labelStatus.textContent = "Something went wrong!";
    }
  }
};
