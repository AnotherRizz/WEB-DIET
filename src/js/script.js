



function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const timeString = `${hours}:${minutes}`;
  document.getElementById("clock").textContent = timeString;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time
// updateTime();

console.log(updateTime);


 // Membuat objek Date yang mewakili waktu saat ini
 const today = new Date();

 // Mendapatkan hari dalam bentuk angka (0 untuk Minggu, 1 untuk Senin, dst.)
 const dayOfWeek = today.getDay();

 // Array yang berisi nama-nama hari dalam seminggu
 const daysOfWeek = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

 // Mendapatkan nama hari berdasarkan nilai angka yang diperoleh dari getDay()
 const dayName = daysOfWeek[dayOfWeek];

 // Mendapatkan tanggal bulan (1-31)
 const date = today.getDate();

 // Mendapatkan bulan dalam bentuk angka (0 untuk Januari, 1 untuk Februari, dst.)
 const month = today.getMonth();

 // Array yang berisi nama-nama bulan
 const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

 // Mendapatkan nama bulan berdasarkan nilai angka yang diperoleh dari getMonth()
 const monthName = months[month];

 // Menggabungkan informasi hari, tanggal, dan bulan menjadi satu string
 const dateString = dayName + ', ' + date + ' ' + monthName;

 // Memperbarui isi elemen dengan ID "date" dengan informasi tanggal yang baru saja dibuat
 document.getElementById('date').textContent = dateString;
