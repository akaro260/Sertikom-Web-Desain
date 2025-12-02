        window.addEventListener("scroll", function (){
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled")
    } else {
        (navbar.classList.remove("scrolled"))
}
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // jangan reload

    let valid = true;

    // ambil elemen input
    const nama = document.getElementById("nama");
    const email = document.getElementById("email");
    const pesan = document.getElementById("pesan");

    // ambil elemen error
    const errNama = document.getElementById("err-nama");
    const errEmail = document.getElementById("err-email");
    const errPesan = document.getElementById("err-pesan");

    // reset tampilan error
    [nama, email, pesan].forEach(el => el.style.border = "1px solid #1b2a41");
    [errNama, errEmail, errPesan].forEach(err => err.classList.add("d-none"));

    // cek nama
    if (nama.value.trim() === "") {
        nama.style.border = "1px solid #dc3545";
        errNama.classList.remove("d-none");
        valid = false;
    }

    // cek email
   if (email.value.trim() === "") {
    email.style.border = "1px solid #dc3545";
    errEmail.textContent = "Email tidak boleh kosong";
    errEmail.classList.remove("d-none");
    valid = false;
}
else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.style.border = "1px solid #dc3545";
    errEmail.textContent = "Format email tidak valid (contoh: nama@gmail.com)";
    errEmail.classList.remove("d-none");
    valid = false;
}

    // cek pesan
    if (pesan.value.trim() === "") {
        pesan.style.border = "1px solid #dc3545";
        errPesan.classList.remove("d-none");
        valid = false;
    }

    if (valid) {
        alert("Pesan berhasil dikirim!");
        // kamu bisa ganti alert dengan WhatsApp / Firebase / API kirim email
    }
});

// cek email
const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.paket-card');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    let filter = btn.getAttribute('data-filter');

    cards.forEach(card => {
      let category = card.getAttribute('data-category');

      if (filter === "all" || filter === category) {
        card.classList.remove('hide');
        card.setAttribute("data-aos", "zoom-in-up");

        setTimeout(() => {
          AOS.refresh();
        }, 50);

      } else {
        card.classList.add('hide');
      }
    });

  });
});

  window.addEventListener("load", function() {
    const dots = document.getElementById("preloader-dots");

    dots.style.opacity = "0";

    setTimeout(() => {
      dots.style.display = "none";
    }, 500);
  });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});
// ==== ACTIVE SAAT DI-KLIK ====


// ==== ACTIVE SAAT SCROLL ====

// ==== ACTIVE SAAT DI-KLIK ====
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// ==== ACTIVE SAAT SCROLL ====
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let scrollPos = window.pageYOffset + 140; // offset navbar

  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

