/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["*.html", "*.js"],
  theme: {
    extend: {
      colors: {
        prime: '#9dbdba;', // Warna utama
        txt1: ' #cee0e6;', 
        txt2:'#f8b042'
        // Warna sekunder
      },
      fontFamily: {
        paragraf: [' "Playfair Display", serif;'], // Menambahkan font ke dalam konfigurasi Tailwind
        poppins: ['"Poppins", sans-serif;'], // Menambahkan font ke dalam konfigurasi Tailwind
      },
    },
  },
  plugins: [],
}

