function sumar() {
    const n1 = document.getElementById("numeroUno").value;
    const n2 = document.getElementById("numeroDos").value;
    alert(parseInt(n1) + parseInt(n2));
}

const btn = document.getElementById("btn.sumar");

btn.addEventListener("click", sumar);