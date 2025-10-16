# 📱 React Native Navigation (Stack & Tab)

**Nama:** R. TB. MOH. RIZQI WIJAYA  
**Mata Kuliah:** Pemrograman Perangkat Mobile  
**Tugas:** Implementasi Navigasi Antar Halaman Menggunakan React Navigation

---

## 🧭 Deskripsi

Project ini merupakan implementasi **dua jenis navigasi** pada aplikasi **React Native**, yaitu:

1. **Stack Navigation** → Navigasi bertumpuk, memungkinkan pengguna berpindah dan kembali antar layar.  
2. **Tab Navigation** → Navigasi dengan menu tab di bagian bawah aplikasi.

Tujuan dari project ini adalah memahami dan mengimplementasikan navigasi pada aplikasi mobile menggunakan **React Navigation**.

---

## ⚙️ Instalasi & Persiapan

1️⃣ Pastikan sudah menginstal **React Native CLI** dan emulator Android.  
2️⃣ Install dependensi berikut:

```bash
npm install @react-navigation/native
npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context
npm install react-native-gesture-handler react-native-reanimated
npm install @react-native-community/masked-view
```

3️⃣ Jalankan aplikasi:

```bash
npx react-native run-android
```

---

## 🔹 File `App.js`

Gunakan file ini untuk memilih navigasi yang ingin dijalankan dengan cara mengubah import/export:

```javascript
// ==== Pilih Navigasi ====

// 👉 Untuk menjalankan Stack Navigation:
import AppStack from './AppStack';
export default AppStack;

// 👉 Untuk menjalankan Tab Navigation:
// import AppTab from './AppTab';
// export default AppTab;
```

> 💡 Cukup ubah satu baris `import` untuk berganti antara Stack dan Tab Navigation.

---

## 💬 Kesimpulan

Dengan menggunakan **React Navigation**, kita dapat membuat aplikasi mobile dengan navigasi yang **mudah, fleksibel, dan interaktif**.  
Kombinasi **Stack dan Tab Navigation** sangat umum digunakan pada aplikasi modern untuk pengalaman pengguna yang lebih baik.  

---

**Dibuat oleh:**  
👨‍💻 R. TB. MOH. RIZQI WIJAYA  
📘 Mata Kuliah: Pemrograman Perangkat Mobile  
📅 Tahun: 2025

