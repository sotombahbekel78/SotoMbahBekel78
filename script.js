// ================= DATA MENU =================
const menus = [
  {
    nama: "SOTO AYAM",
    kategori: "Best Seller ⭐",
    harga: "Rp 10.000",
    deskripsi: "Soto ayam khas Jawa dengan kuah bening gurih dari kaldu ayam kampung, disajikan dengan suwiran ayam empuk, soun, tauge, kol, telur rebus, seledri, bawang goreng, jeruk nipis, dan sambal khas Mbah Bekel.",
    gambar: "sotoayam.jpg"
  },
  {
    nama: "SOTO SAPI",
    kategori: "Rekomendasi 👍",
    harga: "Rp 13.000",
    deskripsi: "Soto sapi dengan kuah rempah ringan dan daging sapi empuk yang direbus lama hingga juicy dan gurih.",
    gambar: "sotosapi.jpeg"
  },
  {
    nama: "MIE GORENG JAWA",
    kategori: "Favorit 🔥",
    harga: "Rp 13.000",
    deskripsi: "Mie goreng Jawa autentik dengan aroma smokey, rasa manis gurih, dan bumbu tradisional.",
    gambar: "mie-goreng.jpg"
  },
  {
    nama: "ES TEH MANIS JUMBO",
    kategori: "Pelengkap 🧊",
    harga: "Rp 4.000",
    deskripsi: "Es teh manis segar ukuran jumbo, cocok untuk semua menu.",
    gambar: "es-teh.jpg"
  }
];

// ================= CONFIG =================
const WHATSAPP_NUMBER = "6285292661522";
const container = document.getElementById("menu-list");

// ================= RENDER =================
menus.forEach(item => {
  const card = document.createElement("div");
  card.className = "menu-card";

  card.innerHTML = `
    <div class="menu-image">
      <img src="${item.gambar}" alt="${item.nama}">
      <span class="badge">${item.kategori}</span>
      <div class="menu-brand">SOTO MBAH BEKEL 78</div>
    </div>

    <div class="menu-content">
      <h2>${item.nama}</h2>
      <p class="price">${item.harga}</p>
      <p>${item.deskripsi}</p>

      <a class="whatsapp-btn"
        href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          "Halo, saya ingin pesan " + item.nama
        )}"
        target="_blank">
        Pesan Sekarang via WhatsApp
      </a>
    </div>
  `;

  container.appendChild(card);
});

