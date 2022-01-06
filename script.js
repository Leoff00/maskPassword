function queryFactory(element) {
  return document.querySelector(element);
}
function getInputs() {
  const nameInput = queryFactory("#nameInput").value;
  const pwdInput = queryFactory("#pwdInput").value;
  const btnSubmit = queryFactory("#btnSubmit");

  function persistInputOnLocalStorage(e) {
    e.preventDefault();
    if (!nameInput || !pwdInput) return alert("Please enter with some data");

    const regex = /[a-zA-Z]/g;
    const replacement = /#/g;
    const pwdMask = pwdInput.replace(regex, "#####");
    console.log(pwdMask);

    localStorage.setItem("name: ", nameInput);
    localStorage.setItem("password: ", pwdMask);
  }

  btnSubmit.addEventListener("click", persistInputOnLocalStorage);
}
