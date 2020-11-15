function sumar() {
    const n1 = document.getElementById("numeroUno");
    const n2 = document.getElementById("numeroDos");
    alert(n1 + n2);
}

sumar();

const btn = document.getElementById("btn.sumar");

btn.addEventListener("click", sumar);