# BulutMD Test Projesi
BulutMD tarafından verilmiş Full Stack kabul test projesi
Yönergede yer alan tüm sistemler projede yer almaktadır 
Backend bölümü java Spring 3 kullanmaktadır
Proje Java 17 ile geliştirilmiştir
Frontend bölümü ise React.js ile geliştirilmiştir
Bootstrap gibi kütüphanelere de yer verilmiştir.
Scss tasarimları da kullanılmıştır

# React Bölümü Kulumu
Frontend bölümü bir node.js projesi olduğu için çalıştırmadan önce node paketlerinin kurulumunu yapmamız gerekmekte
Proje klasörüne girin ve cd src/main/ui/ yazın ui klasörünün içinde olduğunuza emin olun
Ui klasöründe olduğunuzdan emin olduktan sonra klasörde bir terminal başlatın
Terminale npm install yazın ve paketlerin kurulmasını bekleyin
Paketler kurulduktan sonra işletim sisteminize göre başlatma seçeneğinizi kullanabilirsiniz

# Windows Cihazlar Başlatma
Windows makinalar için start.cmd'yi calıstırmanız yeterli olacaktır
Sorun cıkarması durumunda sağ tıklayıp yönetici olarak çalıştırdığınızda sorun kalmayacaktır.
Fakat calıstırmadan önce REACT KURULUM BÖLÜMÜ'nü okuyunuz.

# MacOS Cihazlar Başlatma
MacOS Cihazlarda calıstırmak için iki farklı dosya bulunmakta
Backend bölümünü ayrı Frontend bölümünü ayrı calıstıracaksınız
Dosyalarin izinlerini ayarlamıştım fakat sorun cıkarırsa proje klasörünün içine girin
Terminali açın ve chmod +x ./FrontendStart.sh yazın bunu yazdıktan sonra direk ./FrontendStart.sh yazarak çalıştırın
Yeni bir terminal daha açın ve chmod +x ./BackendStart.sh yazın bunu yazdıktan sonra direk ./BackendStart.sh yazarak çalıştırın
Hala hata alıyor ya da başlatamıyorsanız terminale chmod +x ./mvnw yazın ve tekrardan deneyin

# Projenin Çalışma Koşulları
- Bilgisayarda Java 17 olmalı
- node.js yüklü olmalı
- LocalHostta calısabilmesi için XAMPP kurulu olmalı
- XAMPP Konsoluna giriş yapıp phpMyAdmin üzerinden 'forms' adında bir database oluşturulmalı

Tüm bunlar yapıldıktan sonra kodu her yerde çalıştırabilirsiniz.

İyi forumlar
