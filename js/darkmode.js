//--------------------VARIABLES DARK MODE ------------------//

const darkMode = document.getElementById('darkmode');

//--------------------- Click Event-------------------------//

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('dark-mode', 'enable'); // Guardar datos con SET , tiene que ser cadena de texto, con GET se obtien el valor
    } else {
      localStorage.setItem('dark-mode', 'disable');
    }
    darkModeText();
});

function darkModeText() {
    darkMode.innerHTML === "Modo Nocturno" ? darkmode.innerHTML = "Modo Diurno" : darkMode.innerHTML = "Modo Nocturno";
}

//------------------------ GET MODE LOCAL STORAGE -------------------------// enable con '' linea de texto ------//

if (localStorage.getItem('dark-mode') === 'enable') {
  document.body.classList.add('dark');
  darkmode.innerHTML = "Modo Diurno";
} else {
  document.body.classList.remove('dark');
  darkMode.innerHTML = "Modo Nocturno";
}
