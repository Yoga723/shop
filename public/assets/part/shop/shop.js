function checkout() {
  const popup = document.getElementById("checkout");
  const confirmation = confirm(
    "Apakah Anda yakin ingin melanjutkan ke halaman checkout?"
  );
  if (confirmation) {
    // Kode untuk melanjutkan ke halaman checkout
    popup.style.display = "block";
  } else {
    // Kode jika pengguna membatalkan checkout
    alert("Checkout dibatalkan.");
    popup.style.display = "none";
    // ... tambahkan tindakan lain yang sesuai jika checkout dibatalkan
  }
}

function hidePopup() {
  const popup = document.getElementById("checkout");
  popup.style.display = "none";
}