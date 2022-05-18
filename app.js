const firstName = document.querySelector("#first-name");
const pwd = document.querySelector("#password");
const cpwd = document.querySelector("#confirm-password");
const form = document.querySelector("form");
const pwError = document.querySelector(".not-match");

window.addEventListener("load", () => {
	firstName.focus();
});

form.addEventListener("submit", e => {
	e.preventDefault();
	if (pwd.value !== cpwd.value) {
		pwError.style.display = "initial";
	} else {
		pwError.style.display = "none";
	}
	console.log(pwd.value);
});
