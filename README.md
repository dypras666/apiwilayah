# API Wilayah Indonesia

API untuk mengakses data wilayah Indonesia yang mencakup Provinsi, Kabupaten/Kota, Kecamatan, dan Desa/Kelurahan.

## 🚀 Instalasi

1. Clone atau download project ini
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan server:
   ```bash
   npm start
   ```
   Atau untuk development:
   ```bash
   npm run dev
   ```

## 📋 Endpoints

### Base URL
```
http://localhost:3000
```

### 1. Provinsi

#### Mendapatkan Semua Provinsi
```
GET /api/wilayah/provinces
```

**Response:**
```json
{
  "code": "200",
  "message": "Data provinsi berhasil diambil",
  "data": [
    {
      "id": "11",
      "name": "ACEH"
    },
    {
      "id": "12",
      "name": "SUMATERA UTARA"
    }
  ],
  "total": 34,
  "response_time": "5ms"
}
```

#### Mendapatkan Provinsi Berdasarkan ID
```
GET /api/wilayah/provinces/{id}
```

**Response:**
```json
{
  "code": "200",
  "message": "Data provinsi 11 berhasil diambil",
  "data": {
    "id": "11",
    "name": "ACEH"
  },
  "response_time": "3ms"
}
```

### 2. Kabupaten/Kota

#### Mendapatkan Kabupaten/Kota Berdasarkan ID Provinsi
```
GET /api/wilayah/provinces/{province_id}/regencies
```

**Response:**
```json
{
  "code": "200",
  "message": "Data kabupaten/kota untuk provinsi 11 berhasil diambil",
  "data": [
    {
      "id": "1101",
      "province_id": "11",
      "name": "KABUPATEN SIMEULUE"
    }
  ],
  "total": 23,
  "province_id": "11",
  "response_time": "4ms"
}
```

### 3. Kecamatan

#### Mendapatkan Kecamatan Berdasarkan ID Kabupaten/Kota
```
GET /api/wilayah/regencies/{regency_id}/districts
```

**Response:**
```json
{
  "code": "200",
  "message": "Data kecamatan untuk kabupaten/kota 1101 berhasil diambil",
  "data": [
    {
      "id": "1101010",
      "regency_id": "1101",
      "name": "TEUPAH SELATAN"
    }
  ],
  "total": 8,
  "regency_id": "1101",
  "response_time": "3ms"
}
```

### 4. Desa/Kelurahan

#### Mendapatkan Desa/Kelurahan Berdasarkan ID Kecamatan
```
GET /api/wilayah/districts/{district_id}/villages
```

**Response:**
```json
{
  "code": "200",
  "message": "Data desa/kelurahan untuk kecamatan 1101010 berhasil diambil",
  "data": [
    {
      "id": "1101010001",
      "district_id": "1101010",
      "name": "LATIUNG"
    }
  ],
  "total": 13,
  "district_id": "1101010",
  "response_time": "2ms"
}
```

## 🔍 Endpoints Tambahan

### Root Endpoint
```
GET /
```
Menampilkan informasi API dan dokumentasi endpoint.

### Health Check
```
GET /health
```
Memeriksa status kesehatan API.

## 📊 Response Format

Semua response menggunakan format JSON dengan struktur:

```json
{
  "code": "200",
  "message": "Pesan deskriptif",
  "data": {},
  "total": 0,
  "response_time": "Xms"
}
```

### Error Response
```json
{
  "code": "404",
  "message": "Data tidak ditemukan",
  "error": "Not Found",
  "response_time": "Xms"
}
```

## 🛡️ Fitur Keamanan

- **CORS**: Diaktifkan untuk semua origin
- **Helmet**: Security headers
- **Compression**: Response compression
- **Request Logging**: Semua request dicatat dengan IP address
- **Error Handling**: Comprehensive error handling

## 📁 Struktur Data

Data wilayah disimpan dalam format CSV di folder `assets/wilayah/`:
- `provinces.csv` - Data provinsi
- `regencies.csv` - Data kabupaten/kota
- `districts.csv` - Data kecamatan
- `villages.csv` - Data desa/kelurahan

## 🚀 Deployment

API ini siap untuk deployment ke berbagai platform:
- Heroku
- Vercel
- Railway
- VPS/Cloud Server

## 📝 License

MIT License - Bebas digunakan untuk keperluan publik.

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan buat pull request atau laporkan issue.

---

**Catatan**: API ini dibuat untuk keperluan publik tanpa proteksi khusus. Pastikan untuk menambahkan rate limiting dan authentication jika diperlukan untuk production.