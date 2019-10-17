---
title: Cara Menggunakan Emoji Twitter di Website
date: 2017-10-21 11:07:22
tags: ['Programming']
cover_image: ./images/twemoji-site-screenshot.png
---

Pada April tahun 2014, Twitter mengumumkan bahwa Emoji Twitter ([Twemoji](https://github.com/twitter/twemoji)) mulai saat itu tersedia sebagai pustaka open source bagi komunitas developer secara umum. Setelah mendapat banyak sekali permintaan untuk menggunakan twemoji di berbagai proyek. Akhirnya, twemoji tersedia di GitHub dan bisa digunakan oleh siapapun dengan Lisensi MIT.

<!-- more -->

Seperti yang dikatakan di akun official TwitterSupport:

![Twitter Support mengumumkan Twemoji menjadi tersedia secara Opensource](/images/posts/tweet-twemoji-goes-opensource.png)

Juga dilansir di blog resmi Twitter:
> Since we’ve gotten many requests to use our emoji in various projects, as of today we’re open sourcing our emoji. We hope that the permissive licensing of this project will enable the spread of emoji adoption across platforms. To get the #twemojiparty started, we partnered with our friends at Automattic so the WordPress crowd can start using them right away.

Jadi sekarang kita bisa menggunakan Twemoji di web kita juga, seperti yang ada di web saya ini 😋

Oke langsung saja kita mulai! 🚀

#### Sisipkan pustaka JavaScript Twemoji
Yang paling mudah adalah menggunakan CDN yang sudah banyak tersedia opensource. Ini salah satunya.
```html
<script src="//twemoji.maxcdn.com/2/twemoji.min.js?2.3.0"></script>
```
Letakan kode di atas di antara tag ``<head>`` atau di bagian ``<body>`` paling bawah dari layout website kamu.

#### Parsing halaman
Kemudian parsing bagian halaman web kita.
```html
<script>
  twemoji.parse(document.body);
</script>
```
Letakan kode di atas setelah Pustaka JavaScript Twemoji.
Sebagai keterangan, ``document.body`` adalah object DOM yang akan diparsing. ``document.body`` adalah Object DOM seluruh body dari halaman web.

Oke kamu bisa coba lihat web kamu sekarang. Emoji akan diconvert ke Twemoji, tetapi dengan ukuran 32x32.

#### Memperkecil ukuran
Kita akan perkecil gambarnya ke ukuran 16 point menggunakan CSS. Juga kita akan sedikit menggesernya ke bawah dengan cara memberi margin bawah negatif.
```html
<style type="text/css">
  .emoji {
    height: 16pt;
    margin-bottom: -3pt;
  }
</style>
```
Letakan kode di atas tepat sebelum ``</head>``. Class ``emoji`` adalah class bawaan hasil proses parsing Twemoji parser. Sehingga kita tinggal memformatnya.

Oke selesaii 😁
Tulis komentar jika ada yang ingin ditanyakan 😉

