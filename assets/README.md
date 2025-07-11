# Assets Folder

Folder ini berisi aset-aset statis yang digunakan oleh aplikasi API Optik Livina.

## 📁 Struktur Folder

```
assets/
└── wilayah/
    ├── provinces.csv     # Data 34 provinsi di Indonesia
    ├── regencies.csv     # Data 514 kabupaten/kota
    ├── districts.csv     # Data 7,214 kecamatan
    └── villages.csv      # Data 80,533 desa/kelurahan
```

## 📊 Data Wilayah Indonesia

Folder `wilayah/` berisi data administratif wilayah Indonesia dalam format CSV:

### provinces.csv
- **Format:** `id,name`
- **Jumlah:** 34 provinsi
- **Contoh:** `11,ACEH`

### regencies.csv
- **Format:** `id,province_id,name`
- **Jumlah:** 514 kabupaten/kota
- **Contoh:** `1101,11,KABUPATEN SIMEULUE`

### districts.csv
- **Format:** `id,regency_id,name`
- **Jumlah:** 7,214 kecamatan
- **Contoh:** `1101010,1101,TEUPAH SELATAN`

### villages.csv
- **Format:** `id,district_id,name`
- **Jumlah:** 80,533 desa/kelurahan
- **Contoh:** `1101010001,1101010,LATIUNG`

## 🔄 Penggunaan

Data ini digunakan oleh:
- **Controller:** `controllers/wilayahController.js`
- **Routes:** `routes/wilayahRoutes.js`
- **API Endpoints:** `/api/wilayah/*`

## 📝 Sumber Data

Data wilayah diambil dari:
- **Sumber:** Badan Pusat Statistik (BPS)
- **Standar:** Kode wilayah Kemendagri
- **Format:** CSV (Comma Separated Values)

## ⚠️ Catatan Penting

1. **Jangan hapus** file CSV di folder ini karena diperlukan untuk API wilayah
2. **Jangan ubah** format atau struktur file CSV
3. File CSV di-load saat aplikasi startup
4. Data di-cache untuk performa optimal

## 🔧 Maintenance

Untuk update data wilayah:
1. Download data terbaru dari BPS
2. Konversi ke format CSV yang sesuai
3. Replace file yang ada dengan data baru
4. Restart aplikasi untuk reload data

---

**Terakhir diupdate:** 2024  
**Versi data:** BPS 2024