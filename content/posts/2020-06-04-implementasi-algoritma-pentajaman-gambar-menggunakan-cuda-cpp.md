---
title: Implementasi Algoritma Pentajaman Gambar Menggunakan CUDA C++
date: 2020-06-04 00:00:00
tags: ['Engineering']
---

CUDA merupakan engine untuk mengkompilasi dan menjalankan program berbasis
GPU pada Nvidia graphics card. Biasanya digunakan untuk melakukan komputasi
secara paralel sehingga perhitungan lebih cepat daripada menggunakan CPU
tradisional. Pada penelitian ini, saya menerapkan pemrograman CUDA berbasis
C++ untuk mengimplementasikan algoritma pentajaman gambar. Pentajaman
dilakukan dengan cara mengkonvolusikan filter pentajaman dengan gambar yang
sedikit blur, sehingga diperoleh gambar yang lebih tajam. Pada program
tersebut CUDA kernel digunakan untuk melakukan konvolusi secara paralel
**pada setiap piksel** gambar. Program untuk penelitian ini bisa dilihat
pada [link GitHub ini][1]. Sementara video penjelasan dan simulasinya bisa
dilihat pada [link YouTube ini][2].

[1]: https://github.com/Arsfiqball/image-sharpen-cpp
[2]: https://youtu.be/zU4FYQO8TJ0

<center>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/zU4FYQO8TJ0"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  >
    Loading youtube...
  </iframe>
</center>
