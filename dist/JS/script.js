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
