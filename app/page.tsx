"use client"; // Bu satır Next.js'te tıklama işlemleri (galeri açma) için şarttır

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // --- ALBÜM VERİLERİ (Bunu kendi çekimlerinle değiştirebilirsin) ---
  const albums = [
    {
      id: 1,
      title: "Zeytinburnu Zaferspor - Lig Mücadelesi",
      date: "14 Eylül 2026",
      coverImage: "https://images.unsplash.com/photo-1600250395222-6b944208a099?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1 md:col-span-2 md:row-span-2",
      photos: [
        "https://images.unsplash.com/photo-1600250395222-6b944208a099?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518605368461-1e1252281146?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1431324155629-1a6d0a11f582?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Arnavutköy Belediye Spor",
      date: "10 Eylül 2026",
      coverImage: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1",
      photos: [
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Taktik İdman & Hazırlık",
      date: "05 Eylül 2026",
      coverImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1",
      photos: [
        "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551280857-2b9bbe52cc45?q=80&w=1200&auto=format&fit=crop"
      ]
    }
  ];

  // Hangi albümün açık olduğunu tutan state
  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-orange-500 selection:text-white">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full z-40 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-widest uppercase">
            Samet <span className="text-orange-500">Kınaz</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
            <Link href="#galeri" className="hover:text-white transition-colors">Portfolyo</Link>
            <Link href="#ekipman" className="hover:text-white transition-colors">Ekipman</Link>
            <Link href="#iletisim" className="hover:text-white transition-colors">İletişim</Link>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=2000&auto=format&fit=crop" 
            alt="Futbol Sahası Arka Plan"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            Sahadaki <span className="text-orange-500">Aksiyonu</span> Yakala
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
            Amatör liglerin ruhunu, futbolun hızını ve mücadelesini profesyonel bir gözle dijitale taşıyorum.
          </p>
          <Link href="#galeri" className="px-8 py-4 bg-orange-500 text-neutral-950 font-bold rounded-full hover:bg-orange-400 transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)]">
            Albümleri İncele
          </Link>
        </div>
      </section>

      {/* ALBÜMLER (GRUP) BÖLÜMÜ */}
      <section id="galeri" className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Öne Çıkan Albümler</h2>
            <p className="text-neutral-500">En son eklenen maç ve idman kareleri.</p>
          </div>
          <Link href="/albumler" className="hidden md:flex px-6 py-2 bg-orange-500 hover:bg-orange-400 text-neutral-950 text-sm font-bold rounded-full transition-colors items-center gap-2 shadow-lg">
            Tüm Albümleri Gör &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {/* slice(0,3) ekledik ki ana sayfada hep sadece son 3 albüm görünsün */}
          {albums.slice(0, 3).map((album) => (
            <div 
              key={album.id} 
              onClick={() => setSelectedAlbum(album)}
              className={`relative group overflow-hidden rounded-2xl bg-neutral-900 cursor-pointer ${album.colSpan}`}
            >
              <Image 
                src={album.coverImage}
                alt={album.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-orange-400 text-xs font-bold tracking-wider mb-1 uppercase">{album.date}</p>
                      <h3 className="text-white text-xl font-medium">{album.title}</h3>
                    </div>
                    <div className="bg-orange-500/20 text-orange-400 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">
                      {album.photos.length} Kare
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIKLANINCA AÇILAN ALBÜM DETAYI (MODAL) */}
      {selectedAlbum && (
        <div className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-xl overflow-y-auto">
          {/* Modal Üst Bar (Kapat Butonu ve Başlık) */}
          <div className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-800 p-4 md:p-6 flex justify-between items-center">
            <div>
              <p className="text-orange-500 text-sm font-bold uppercase">{selectedAlbum.date}</p>
              <h2 className="text-xl md:text-3xl font-bold text-white">{selectedAlbum.title}</h2>
            </div>
            <button 
              onClick={() => setSelectedAlbum(null)}
              className="px-6 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full font-semibold transition-colors flex items-center gap-2"
            >
              <span className="text-xl">&times;</span> Kapat
            </button>
          </div>

          {/* Albüm İçindeki Fotoğraflar */}
          <div className="p-4 md:p-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedAlbum.photos.map((photoUrl: string, index: number) => (
              <div key={index} className="relative h-[400px] md:h-[600px] w-full rounded-xl overflow-hidden bg-neutral-900">
                <Image 
                  src={photoUrl} 
                  alt={`${selectedAlbum.title} kare ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* EKİPMAN BÖLÜMÜ */}
      <section id="ekipman" className="border-t border-neutral-900 bg-neutral-900/30 py-24">
        {/* Öncekiyle aynı ekipman bölümü... */}
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vizörün Arkasında</h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              Futbol sadece 90 dakikalık bir oyun değil; içinde sevinç, hayal kırıklığı ve büyük bir mücadele barındıran bir hikaye. Sahadaki bu ham duyguları dondurup ölümsüzleştirmek en büyük tutkum.
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-4">
                <div className="w-2 h-12 bg-orange-500 rounded-full"></div>
                <div>
                  <p className="text-sm text-neutral-500">Ana Gövde</p>
                  <p className="font-semibold">Canon 1200D DSLR</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-4">
                <div className="w-2 h-12 bg-orange-500 rounded-full"></div>
                <div>
                  <p className="text-sm text-neutral-500">Telefoto Lens</p>
                  <p className="font-semibold">Canon EF-S 55-250mm f/4-5.6 IS II</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
            <Image 
              src="https://images.unsplash.com/photo-1516331165147-380d64a5006b?q=80&w=800&auto=format&fit=crop" 
              alt="Spor Fotoğrafçısı"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="iletisim" className="border-t border-neutral-900 bg-neutral-900/10 py-16 text-center text-neutral-400">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-6">Birlikte Çalışalım</h2>
          <p className="mb-8 text-lg">Maç akreditasyonları, özel çekim talepleri ve iş birlikleri için portfolyo hesabıma ulaşabilirsiniz.</p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a 
              href="https://instagram.com/_sk.raw" 
              target="_blank" 
              rel="noreferrer" 
              className="px-8 py-4 bg-neutral-900 hover:bg-orange-500 hover:text-white text-orange-500 font-semibold rounded-full border border-neutral-800 transition-all duration-300 shadow-lg"
            >
              @_sk.raw 'a Mesaj At
            </a>
            <a 
              href="mailto:iletisim@sametkinaz.com" 
              className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-full border border-neutral-800 transition-all duration-300 shadow-lg"
            >
              E-Posta Gönder
            </a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Samet Kınaz. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </main>
  );
}