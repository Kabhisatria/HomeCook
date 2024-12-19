document.getElementById('formsaran').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Ambil data dari form
    let nama = document.getElementById('name').value.trim();
    let tipemakanan = document.getElementById('foodType').value;
    let saran = document.getElementById('suggestion').value.trim();

    // Validasi data
    if (!nama || !tipemakanan || !saran) {
        alert('Mohon lengkapi semua data sebelum mengirimkan saran.');
        return;
    }

    // Prompt untuk informasi tambahan
    let infotambahan = prompt("Apakah ada tambahan lagi? (Optional)");

    // Konfirmasi data dengan user
    if (confirm(`Apakah kamu ingin mengirim saran?\n\nNama: ${nama}\nTipe Makanan: ${tipemakanan}\nSaran: ${saran}\nInfo tambahan: ${infotambahan || "none"}`)) {
        alert('Terima Kasih untuk Sarannya!');
        console.log("Saran Terkirim:", { nama, tipemakanan, saran, infotambahan });

        // Reset form setelah konfirmasi pengiriman
        document.getElementById('formsaran').reset();
    } else {
        alert('Pengiriman dibatalkan.');
    }
});

// Fungsi untuk tombol "Kembali"
document.getElementById('backButton').addEventListener('click', function() {
    history.back(); // Kembali ke halaman sebelumnya
});
