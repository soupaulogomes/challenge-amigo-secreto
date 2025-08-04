let names = [];

function addFriend() {
    const inputName = document.getElementById('amigo');
    const nameValue = inputName.value.trim();

    validateInput();

    names.push(nameValue);
    inputName.value = '';
    inputName.focus();

    inputListName();
}

function validateInput() {
    const inputName = document.getElementById('amigo');
    if (inputName.value.trim() === '') {
        alert('Por favor, digite um nome válido.');
        inputName.focus();
        return false;
    }
    if (names.includes(inputName.value.trim())) {
        alert('Este nome já foi adicionado. Por favor, digite um nome diferente.');
        inputName.focus();
        return false;
    }
    return true;
}

function inputListName() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    names.forEach(function(name) {
        const li = document.createElement('li');
        li.textContent = name;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
  if (names.length < 1) {
    alert('Adicione amigos à lista antes de sortear.');
    return;
  }
  const randomIndex = Math.floor(Math.random() * names.length);
  const drawnName = names[randomIndex];

  const nameSorted = document.getElementById('resultado');
  nameSorted.innerHTML = `O nome sorteado é: <strong>${drawnName}</strong>`;

  names.splice(randomIndex, 1);
}

document.addEventListener('DOMContentLoaded', function() {
  const inputAmigo = document.getElementById('amigo');
  inputAmigo.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addFriend();
    }
  });
});