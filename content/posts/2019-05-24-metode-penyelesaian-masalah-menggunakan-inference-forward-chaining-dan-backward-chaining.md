---
title: >-
  Metode Penyelesaian Masalah Menggunakan Inference Forward Chaining dan
  Backward Chaining
date: 2019-05-24 05:12:17
tags: ['Engineering']
---

Dalam kehidupan sehari-hari, kita biasa dihadapkan pada persoalan yang menuntut penalaran (reasoning). Setiap persoalan memiliki solusi jika dilakukan penalaran dengan baik. Penalaran berbeda dengan pencarian. Pada pencarian, kita berfokus pada kelengkapan data. Sementara pada penalaran, kita berfokus pada solusi. Teknik penyelesaian masalah dengan penalaran yaitu dengan cara merepresentasikan masalah ke dalam basis pengetahuan (knowledge base) menggunakan logika. Basis pengetahuan ini bisa berupa sekumpulan relasi atau aturan.

<!-- more -->

Sebelum melangkah ke penggunaan inferensi forward chaining dan backward chaining, mari lihat contoh knowledge base tentang karakteristik cuaca berikut.

| No | IF : Kondisi                  | THEN : Implikasi      |
| -- | ----------------------------- | --------------------- |
| 1  | Suhu < 20 & udara lembab      | Kemungkinan hujan     |
| 2  | Langit berawan & udara dingin | Suhu < 20             |
| 3  | Udara agak berat              | udara lembab          |

## Inference Forward Chaining
Forward chaining merupakan metode yang berdasarkan data (data driven) untuk mencapai tujuan berdasarkan knowledge base yang dicocokan dengan fakta yang ada. Biasanya digunakan untuk menyelesaikan permasalahan "Apa yang akan terjadi berikutnya?" Sehingga hasil dari inferensi forward chaining adalah kesimpulan sebagai solusi permasalahan.

Contohnya jika kita cocokan tabel di atas tadi dengan fakta-fakta berikut:

1. Langit berawan
2. Udara agak berat dan dingin

**Chain#1**
Karena langit berawan dan udara dingin, maka fakta baru ditambahkan yaitu suhu < 20.

**Chain#2**
Karena udara agak berat, maka fakta baru ditambahkan yaitu udara lembab.

**Chain#3**
Karena suhu < 20 dan udara lembab, maka fakta baru ditambahkan yaitu "kemungkinan hujan."

**Conclusion**
Hasilnya dari fakta-fakta terebut bisa dinyatakan kemungkinan hujan.

## Inference Backward Chaining
Backward chaining merupakan metode yang berdasarkan tujuan (goal driven) untuk mendapatkan fakta-fakta yang ada dengan memanfaatkan knowledge base. Singkatnya backward chaining adalah kebalikan dari forward chaining.  Biasanya digunakan untuk mengetahui "Mengapa bisa terjadi?"

Anggaplah kita belum tau forward chaining di atas. Lalu kita asumsikan hari ini "hujan." Kemudian mari kita coba mencari penyebabnya menggunakan inferensi backward chaining.

**Chain#1**
Faktanya sedang hujan, maka fakta baru ditambahkan yaitu <u>suhu < 20</u> dan <u>udara lembab</u>.

**Chain#2**
Faktanya suhu < 20, maka fakta baru ditambahkan yaitu langit berawan dan udara dingin.

**Chain#3**
Faktanya udara lembab, maka fakta baru ditambahkan yaitu udara agak berat.

**Causes**
Karena sudah tidak ada yang bisa dichain lagi, maka fakta-fakta yang tersisa:

1. langit berawan
2. udara dingin
3. udara agak berat

---

## Referensi
Photo by bruce mars on [Unsplash](https://unsplash.com/photos/xj8qrWvuOEs)
[Forward Backward Chaining](https://www.slideshare.net/quratarmy/forward-backward-chaining-60997177) oleh Qau Islamabad dari Pakistan.
Buku Artificial Intelegence (Rev 2), Bab Reasoning oleh Suyanto. Penerbit Informatika.
