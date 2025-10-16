// ===============================
// 🎬 DATOS DE PELÍCULAS
// ===============================
const peliculas = [
  {
    titulo: "Beautiful Boy",
    director: "Felix Van Groeningen",
    portada: "img/beautiful-boy.jpg",
    escenas: [
      "https://www.dropbox.com/scl/fi/8p789fxamjvt6tdzpfriz/Beautiful-1.mp4?rlkey=lbxs6qfonmjfwsmvyrvmvdoap&st=i0k4tc49&raw=1",
      "https://www.dropbox.com/scl/fi/2lbm6xx9m3brd4cmvy09g/Beautiful-2.mp4?rlkey=s6wph4vhnbplotbmm1zm7m1jb&st=4j5tn2lo&raw=1",
      "",
      ""
    ],
    vinilo: "img/vinilo-beautiful.jpg",
    banda: "audio/beautiful.mp3"
  },
  {
    titulo: "Aftersun",
    director: "Charlotte Wells",
    portada: "img/aftersun.jpg",
    escenas: [
      "https://www.dropbox.com/scl/fi/4me8kmkmi3pq4fkijbytd/Aftersun-1.mp4?rlkey=paasgsikt5s662cu2loyf690r&st=er3lak0q&raw=1",
      "https://www.dropbox.com/scl/fi/mkef9xmyi6z8pjkuwmlg9/Aftersun-2.mp4?rlkey=cygg8k2626t0yepw8qoc93ydg&st=e0ejtrex&raw=1",
      "https://www.dropbox.com/scl/fi/z7dyi1pil6nmedsf6kkom/Aftersun-3.mp4?rlkey=qrjh9rgmng3mxm92hny3zwe5u&st=jzfip48x&raw=1",
      "https://www.dropbox.com/scl/fi/7tjp3h2bgcd5yeegpcqiz/Aftersun-4.mp4?rlkey=qwirf1q4rbqom5hsppfmzy20q&st=2eedfl03&raw=1",
      "https://www.dropbox.com/scl/fi/paty3i7e6w4wiqbg7ga56/Aftersun-5.mp4?rlkey=odr38itxgiufenqyh2hfgg93b&st=zw9aoccu&raw=1",
    ],
    vinilo: "img/vinilo-aftersun.jpg",
    banda: "audio/aftersun.mp3"
  },
  {
    titulo: "Requiem for a Dream",
    director: "Darren Aronofsky",
    portada: "img/requiem-for-a-dream.jpg",
    escenas: [
      "https://www.dropbox.com/scl/fi/eayjk4tapsxu899eh0de2/Requiem-1.mp4?rlkey=kyn6gw76ulju1mqsm6p5nlezj&st=52pv4qnb&raw=1",
      "https://www.dropbox.com/scl/fi/fh1onxt4dxz4ejym4wuav/Requiem-2.mp4?rlkey=mdx1wmemomy2as9hpzfv5cwr1&st=2758tc54&raw=1",
      "https://www.dropbox.com/scl/fi/7vt6notps1nbekyxe9pb0/Requiem-3.mp4?rlkey=g082o7ilze4otb2asaz1s5t4m&st=xv1np5ua&raw=1",
      "https://www.dropbox.com/scl/fi/fkhzv9mz8lz4yfsz60v0f/Requiem-4.mp4?rlkey=qwo8b8prjj3xzfvv61gw3rgs1&st=xs6v89u3&raw=1"
    ],
    vinilo: "img/vinilo-requiem.jpg",
    banda: "audio/requiem.mp3"
  },
  {
    titulo: "Whiplash",
    director: "Damien Chazelle",
    portada: "img/whiplash.jpg",
    escenas: [
      "https://www.dropbox.com/scl/fi/r5j50ngumhm5hy2vs1u8d/Whiplash-1.mp4?rlkey=uyv519qe8xo3bu87ikepszofp&st=09hv4471&raw=1",
      "https://www.dropbox.com/scl/fi/fq0gwhhy70qmkgfw3kl71/Whiplash-2.mp4?rlkey=n25wnk7x2yaftd5wsgxnjy067&st=xj7872hu&raw=1",
      "https://www.dropbox.com/scl/fi/ruca8rlnrw8bfbrtvko7t/Whiplash-3.mp4?rlkey=d3gavxw5d5kj6itagnrjp58te&st=mix8glpj&raw=1",
      "https://www.dropbox.com/scl/fi/i4guet11jkbwcj6ivhh69/Whiplash-4.mp4?rlkey=abegk36scocjtaip575k5z8r2&st=fmd0a6mo&raw=1"
    ],
    vinilo: "img/vinilo-whiplash.jpg",
    banda: "audio/whiplash-texas.mp3"
  },
  {
    titulo: "Her",
    director: "Spike Jonze",
    portada: "img/her.jpg",
    escenas: [
      "",
      "",
      "",
      ""
    ],
    vinilo: "img/vinilo-her.jpg",
    banda: "audio/her.mp3"
  },
  {
    titulo: "The Whale",
    director: "Darren Aronofsky",
    portada: "img/the-whale.jpg",
    escenas: [
      "https://www.dropbox.com/scl/fi/8ock7v6w1vpojzbpl3381/The-Whale-1-1.mp4?rlkey=fyjbvi14hems5nbcij8y20xmq&st=hrltiis9&raw=1",
      "",
      "",
      ""
    ],
    vinilo: "img/vinilo-whale.jpg",
    banda: "audio/whale.mp3"
  }
];


const criticas = [
  {
    titulo: "Aftersun (2022)",
    imagen: "img/critica-aftersun.jpg",
    texto: "Una mirada nostálgica y contenida sobre la paternidad y la memoria. Aftersun observa lo que queda entre los silencios y los gestos, con una belleza que duele y reconforta a la vez."
  },
  {
    titulo: "Stalker (1979)",
    imagen: "img/critica-stalker.jpg",
    texto: "Una experiencia filosófica que desafía la narrativa convencional. Tarkovsky convierte el viaje en metáfora de la fe, el deseo y la condición humana."
  },
  {
    titulo: "Requiem for a Dream (2000)",
    imagen: "img/critica-requiem.jpg",
    texto: "Hipnótica y brutal, una sinfonía visual sobre la adicción y la destrucción. Aronofsky logra un descenso emocional inolvidable."
  },
  {
    titulo: "Paris, Texas (1984)",
    imagen: "img/critica-paris.jpg",
    texto: "Wim Wenders construye un retrato desolador y poético sobre la pérdida, el amor y la redención, acompañado por la guitarra de Ry Cooder."
  },
  {
    titulo: "Marriage Story (2019)",
    imagen: "img/critica-marriage.jpg",
    texto: "Una disección íntima y honesta de la separación. Johansson y Driver ofrecen actuaciones llenas de verdad y vulnerabilidad."
  },
  {
    titulo: "The Whale (2022)",
    imagen: "img/critica-whale.jpg",
    texto: "Un estudio desgarrador sobre la culpa, la empatía y la redención. Brendan Fraser nos entrega una de las interpretaciones más humanas del cine reciente."
  }
];

// ===============================
// 🎬 GENERAR GALERÍA DE POSTERS
// ===============================
const galeria = document.getElementById('galeriaPeliculas');

peliculas.forEach((p, index) => {
  const div = document.createElement('div');
  div.className = 'tarjeta';
  div.dataset.index = index;
  div.innerHTML = `<img src="${p.portada}" alt="${p.titulo}">`;
  galeria.appendChild(div);
});

// ===============================
// 🎬 POP-UP DE ESCENAS ALEATORIAS
// ===============================
const ventana = document.getElementById('ventanaEscena');
const botonCerrar = document.getElementById('cerrarVentana');
const videoEscena = document.getElementById('videoEscena');

// 🎬 Control de video (click = pausa/play, doble click = fullscreen)
let clickTimer = null;

videoEscena.addEventListener('click', () => {
  if (clickTimer) {
    clearTimeout(clickTimer);
    clickTimer = null;
    return;
  }
  clickTimer = setTimeout(() => {
    if (videoEscena.paused) {
      videoEscena.play();
    } else {
      videoEscena.pause();
    }
    clickTimer = null;
  }, 200);
});

videoEscena.addEventListener('dblclick', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    videoEscena.requestFullscreen?.();
  }
});

document.querySelectorAll('.tarjeta').forEach((tarjeta, i) => {
  tarjeta.dataset.index = i; // Se asegura que cada tarjeta tenga un índice
  tarjeta.addEventListener('click', () => {
    const peli = peliculas[i];
    if (!peli || peli.escenas.length === 0) return;

    // Selecciona una escena aleatoria
    const random = Math.floor(Math.random() * peli.escenas.length);
    const fuente = peli.escenas[random];

    if (fuente) {
      videoEscena.src = fuente;
      ventana.style.display = 'flex';
      videoEscena.play();
    }
  });
});

botonCerrar.addEventListener('click', cerrarPopup);
ventana.addEventListener('click', e => { if (e.target === ventana) cerrarPopup(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarPopup(); });

function cerrarPopup() {
  videoEscena.pause();
  videoEscena.src = '';
  ventana.style.display = 'none';
}


// ===============================
// 🎵 BANDAS SONORAS / CRÍTICAS
// ===============================
const bloqueVinilos = document.getElementById('bloqueVinilos');
const bloqueCriticas = document.getElementById('bloqueCriticas');

function mostrarBanda(index) {
  const p = peliculas[index];
  bloqueVinilos.innerHTML = `
    <div class="bloque-unico">
      <img src="${p.vinilo}" alt="${p.titulo} OST">
      <p><b>${p.titulo}</b> — ${p.director}</p>
      <audio controls>
        <source src="${p.banda}" type="audio/mp3">
      </audio>
    </div>
  `;
}

function mostrarCritica(index) {
  const c = criticas[index];
  bloqueCriticas.innerHTML = `
    <div class="bloque-unico">
      <div class="texto-critica">
        <h3>${c.titulo}</h3>
      </div>
      <img src="${c.imagen}" alt="${c.titulo}">
      <div class="texto-critica">
        <p>${c.texto}</p>
      </div>
    </div>
  `;
}

// Inicial
let indice = 0;
mostrarBanda(indice);
mostrarCritica(indice);

// Cambio con botones principales
const btnVinilos = document.getElementById('btnVinilos');
const btnCriticas = document.getElementById('btnCriticas');

btnVinilos.addEventListener('click', () => {
  bloqueVinilos.classList.add('mostrar');
  bloqueCriticas.classList.remove('mostrar');
  btnVinilos.classList.add('boton-activo');
  btnCriticas.classList.remove('boton-activo');
});

btnCriticas.addEventListener('click', () => {
  bloqueCriticas.classList.add('mostrar');
  bloqueVinilos.classList.remove('mostrar');
  btnCriticas.classList.add('boton-activo');
  btnVinilos.classList.remove('boton-activo');
});

// Cambio automático cada 10 segundos
setInterval(() => {
  indice = (indice + 1) % peliculas.length;
  mostrarBanda(indice);
  mostrarCritica(indice);
}, 10000);
