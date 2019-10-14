---
title: >-
  Menggunakan Naive Bayes Classifier untuk Menentukan Apakah Saya Terkena Flu 😅
date: 2019-02-24 22:30:08
tags: ['Engineering']
---

Jadi kebetulan deadline tugas hari ini adalah tentang Teorema Bayes. Setelah searching sedikit-sedikit tentang si bayes ini, saya akhirnya kepikiran untuk mendiagnosa apakah saya kena pilek? 🤣 Padahal udah kena emang 🤒 Secara umum sebenarnya teorema bayes ini merupakan penyelesaian kemungkinan yang kondisional (Conditional Probability). Yah hasilnya nanti dalam persen yang nantinya menentukan apakah saya "Flu" atau "Tidak flu".
<!-- more -->

## Datasets

Okeh jadi ceritanya kita sudah punya data hasil dari para dokter (gatau bener ga 😏), hasilnya seperti berikut:

| Kedinginan | Ingusan | Sakit Kepala | Demam | Apakah Flu? |
| ---------- | ------- | ------------ | ----- | ----------- |
| Y          | T       | Lumayan      | Y     | T           |
| Y          | Y       | Tidak        | T     | Y           |
| Y          | T       | Kuat         | Y     | Y           |
| T          | Y       | Lumayan      | Y     | Y           |
| T          | T       | Tidak        | T     | T           |
| T          | Y       | Kuat         | Y     | Y           |
| T          | Y       | Kuat         | T     | T           |
| Y          | Y       | Lumayan      | Y     | Y           |

Mari kita convert ke datasets program:
```js
const id = [
  'kedinginan',
  'ingusan',
  'sakit kepala',
  'demam',
  'apakah flu'
]

const data = [
  ['Y', 'T', 'Lumayan', 'Y', 'T'],
  ['Y', 'Y', 'Tidak'  , 'T', 'Y'],
  ['Y', 'T', 'Kuat'   , 'Y', 'Y'],
  ['T', 'Y', 'Lumayan', 'Y', 'Y'],
  ['T', 'T', 'Tidak'  , 'T', 'T'],
  ['T', 'Y', 'Kuat'   , 'Y', 'Y'],
  ['T', 'Y', 'Kuat'   , 'T', 'T'],
  ['Y', 'Y', 'Lumayan', 'Y', 'Y'],
]
```

> Saya pakai bahasa JavaScript 🤖

## Naive Bayes Classifier

Kemudian kita hitung kemungkinan Flu secara keseluruhan P(Flu=Ya) yaitu 5/8 dan P(Flu=Tidak) yaitu 3/8. Implementasi programnya sebagai berikut:

```js
const fluYes = data.filter(r => r[id.indexOf('apakah flu')] === 'Y').length / data.length
const fluNo  = data.filter(r => r[id.indexOf('apakah flu')] === 'T').length / data.length
```

Setelah itu kita hitung kemungkinan parameter lain, yang jika terjadi gejala tersebut maka flu dan tidak flu.

```js
// Gejala yang terjadi pada saya
const syntomps = {
  'kedinginan': 'Y',
  'ingusan': 'Y',
  'sakit kepala': 'Lumayan',
  'demam': 'T',
}

const inferYes = Object
  .keys(syntomps)
  // Kalkulasi semua perbandingan (gejala => flu=y) / (gejala)
  .map(s => data.filter(r => r[id.indexOf(s)] === syntomps[s])
                .filter(r => r[id.indexOf('apakah flu')] === 'Y')
                .length
          / data.filter(r => r[id.indexOf(s)] === syntomps[s])
                .length)
  // Mengalikan semua hasilnya
  .reduce((t, c) => t * c)

const inferNo = Object
  .keys(syntomps)
  // Kalkulasi semua perbandingan (gejala => flu=t) / (gejala)
  .map(s => data.filter(r => r[id.indexOf(s)] === syntomps[s])
                .filter(r => r[id.indexOf('apakah flu')] === 'T')
                .length
          / data.filter(r => r[id.indexOf(s)] === syntomps[s])
                .length)
  // Mengalikan semua hasilnya
  .reduce((t, c) => t * c)
```

Kemudian mengalikan yes dengan yes, no dengan no:

```js
const resultFluYes = fluYes * inferYes
const resultFluNo = fluNo * inferNo
```

Dari situlah kita bisa membandingkan kemungkinan saya terkena flu atau tidak dengan melihat mana yang lebih besar antara terkena flu (resultFluYes) dan tidak (resultFluNo). Yah sudah bisa ditebak saya flu 🤒 Jika menggunakan Bayesian Theorem maka disesuaikan dengan persamaan berikut:

```js
// P(flu=y|syntomps) =               P(syntomps|flu=y) * P(flu=y)
//                     ---------------------------------------------------------
//                    P(syntomps|flu=y) * P(flu=y) + P(syntomps|flu=t) * P(flu=t)

const bayesResult = inferYes * fluYes / (inferYes * fluYes + inferNo * fluNo)
```

Jadi ~ 95% kemungkinan saya terkena flu.

Lihat di:

https://beta.observablehq.com/@arsfiqball/menggunakan-naive-bayes-classifier-untuk-menentukan-apak

untuk mencoba kalkulasi dan main-main dikit sama datanya 😉

---

Referensi:
[Naive bayesian classification](https://www.slideshare.net/dipalimeher/naive-bayesian-classification) oleh Dipali Maher
