"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const albums = [
    {
      id: 1,
      title: "Zeytinburnu Zaferspor - Spor Okulu Antrenmanı",
      date: "Eylül 2026",
      coverImage: "/sporokulu/sporokulu1.jpg",
      colSpan: "col-span-1 md:col-span-2 md:row-span-2",
      photos: [
        "/sporokulu/sporokulu1.jpg", "/sporokulu/sporokulu2.jpg", "/sporokulu/sporokulu3.jpg",
        "/sporokulu/sporokulu4.jpg", "/sporokulu/sporokulu5.jpg", "/sporokulu/sporokulu6.jpg",
        "/sporokulu/sporokulu7.jpg", "/sporokulu/sporokulu8.jpg", "/sporokulu/sporokulu9.jpg",
        "/sporokulu/sporokulu10.jpg", "/sporokulu/sporokulu11.jpg", "/sporokulu/sporokulu12.jpg"
      ]
    },
    {
      id: 2,
      title: "U14 Zeytinburnu Zaferspor - İdman Kareleri",
      date: "Eylül 2026",
      coverImage: "/u14zaferidman/u14zaferidman1.jpg",
      colSpan: "col-span-1",
      photos: [
        "/u14zaferidman/u14zaferidman1.jpg", "/u14zaferidman/u14zaferidman2.jpg", "/u14zaferidman/u14zaferidman3.jpg",
        "/u14zaferidman/u14zaferidman4.jpg", "/u14zaferidman/u14zaferidman5.jpg", "/u14zaferidman/u14zaferidman6.jpg",
        "/u14zaferidman/u14zaferidman7.jpg"
      ]
    },
    {
      id: 3,
      title: "U14 Zeytinburnu Zaferspor - Arnavutköy Bld. Spor",
      date: "Eylül 2026",
      coverImage: "/u14zaferarnavutkoy/u14zaferarnavutkoy1.jpg",
      colSpan: "col-span-1",
      photos: [
        "/u14zaferarnavutkoy/u14zaferarnavutkoy1.jpg", "/u14zaferarnavutkoy/u14zaferarnavutkoy2.jpg", "/u14zaferarnavutkoy/u14zaferarnavutkoy3.jpg",
        "/u14zaferarnavutkoy/u14zaferarnavutkoy4.jpg", "/u14zaferarnavutkoy/u14zaferarnavutkoy5.jpg", "/u14zaferarnavutkoy/u14zaferarnavutkoy6.jpg",
        "/u14zaferarnavutkoy/u14zaferarnavutkoy7.jpg", "/u14zaferarnavutkoy/u14zaferarnavutkoy8.jpg"
      ]
    },
    {
      id: 4,
      title: "U11 Zeytinburnu Zaferspor - Selvi Hazırlık Maçı",
      date: "Eylül 2026",
      coverImage: "/u11zaferselvi/u11zaferselvi1.jpg",
      colSpan: "col-span-1",
      photos: [
        "/u11zaferselvi/u11zaferselvi1.jpg", "/u11zaferselvi/u11zaferselvi2.jpg", "/u11zaferselvi/u11zaferselvi3.jpg",
        "/u11zaferselvi/u11zaferselvi4.jpg", "/u11zaferselvi/u11zaferselvi5.jpg", "/u11zaferselvi/u11zaferselvi6.jpg",
        "/u11zaferselvi/u11zaferselvi7.jpg", "/u11zaferselvi/u11zaferselvi8.jpg", "/u11zaferselvi/u11zaferselvi9.jpg",
        "/u11zaferselvi/u11zaferselvi10.jpg", "/u11zaferselvi/u11zaferselvi11.jpg", "/u11zaferselvi/u11zaferselvi12.jpg"
      ]
    },
    {
      id: 5,
      title: "U12 Zeytinburnu Zaferspor - Selvi Hazırlık Maçı",
      date: "Eylül 2026",
      coverImage: "/u12zaferselvi/u12zaferselvi1.jpg",
      colSpan: "col-span-1 md:col-span-2",
      photos: [
        "/u12zaferselvi/u12zaferselvi1.jpg", "/u12zaferselvi/u12zaferselvi2.jpg", "/u12zaferselvi/u12zaferselvi3.jpg",
        "/u12zaferselvi/u12zaferselvi4.jpg", "/u12zaferselvi/u12zaferselvi5.jpg", "/u12zaferselvi/u12zaferselvi6.jpg",
        "/u12zaferselvi/u12zaferselvi7.jpg", "/u12zaferselvi/u12zaferselvi8.jpg"
      ]
    },
    {
      id: 6,
      title: "Spor Okulu Antrenmanı (Bölüm 1)",
      date: "Eylül 2026",
      coverImage: "/1sporokulu/1sporokulu1.jpg",
      colSpan: "col-span-1",
      photos: [
        "/1sporokulu/1sporokulu1.jpg", "/1sporokulu/1sporokulu2.jpg", "/1sporokulu/1sporokulu3.jpg",
        "/1sporokulu/1sporokulu4.jpg", "/1sporokulu/1sporokulu5.jpg", "/1sporokulu/1sporokulu6.jpg",
        "/1sporokulu/1sporokulu7.jpg", "/1sporokulu/1sporokulu8.jpg", "/1sporokulu/1sporokulu9.jpg",
        "/1sporokulu/1sporokulu10.jpg"
      ]
    },
    {
      id: 7,
      title: "Spor Okulu Antrenmanı (Bölüm 2)",
      date: "Eylül 2026",
      coverImage: "/2sporokulu/2sporokulu1.jpg",
      colSpan: "col-span-1",
      photos: [
        "/2sporokulu/2sporokulu1.jpg", "/2sporokulu/2sporokulu2.jpg", "/2sporokulu/2sporokulu3.jpg",
        "/2sporokulu/2sporokulu4.jpg", "/2sporokulu/2sporokulu5.jpg", "/2sporokulu/2sporokulu6.jpg",
        "/2sporokulu/2sporokulu7.jpg", "/2sporokulu/2sporokulu8.jpg", "/2sporokulu/2sporokulu9.jpg",
        "/2sporokulu/2sporokulu10.jpg"
      ]
    },
    {
      id: 8,
      title: "Spor Okulu Antrenmanı (Bölüm 3)",
      date: "Eylül 2026",
      coverImage: "/3sporokulu/3sporokulu1.jpg",
      colSpan: "col-span-1",
      photos: [
        "/3sporokulu/3sporokulu1.jpg", "/3sporokulu/3sporokulu2.jpg", "/3sporokulu/3sporokulu3.jpg",
        "/3sporokulu/3sporokulu4.jpg", "/3sporokulu/3sporokulu5.jpg", "/3sporokulu/3sporokulu6.jpg",
        "/3sporokulu/3sporokulu7.jpg", "/3sporokulu/3sporokulu8.jpg", "/3sporokulu/3sporokulu9.jpg",
        "/3sporokulu/3sporokulu10.jpg"
      ]
    }
  ];

  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (activePhotoIndex === null || !selectedAlbum) return;

    if (e.key === 'ArrowRight') {
      setActivePhotoIndex((prev) => 
        prev !== null && prev < selectedAlbum.photos.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowLeft') {
      setActivePhotoIndex((prev) => 
        prev !== null && prev > 0 ? prev - 1 : selectedAlbum.photos.length - 1
      );
    } else if (e.key === 'Escape') {
      setActivePhotoIndex(null);
    }
  }, [activePhotoIndex, selectedAlbum]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-orange-500 selection:text-white">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full z-40 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-widest uppercase">
            Samet <span className="text-orange-500">KINAZ</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
            <button 
              onClick={() => {
                const element = document.getElementById('galeri');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
            >
              Portfolyo
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('ekipman');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
            >
              Ekipman
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('iletisim');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
            >
              İletişim
            </button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/kapak.jpg" 
            alt="Futbol Sahası Kapak Fotoğrafı"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
              Sahadaki <span className="text-orange-500">Aksiyonu</span> Yakala
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto"
          >
            Amatör liglerin ruhunu, futbolun hızını ve mücadelesini profesyonel bir gözle dijitale taşıyorum.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button 
              onClick={() => {
                const element = document.getElementById('galeri');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-orange-500 text-neutral-950 font-bold rounded-full hover:bg-orange-400 transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] cursor-pointer"
            >
              Albümleri İncele
            </button>
          </motion.div>
        </div>
      </section>

      {/* GALERİ SECTION */}
      <section id="galeri" className="max-w-7xl mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Öne Çıkan Albümler</h2>
            <p className="text-neutral-500">En son eklenen maç ve idman kareleri.</p>
          </div>
          <Link href="/albumler" className="px-6 py-2 bg-orange-500 hover:bg-orange-400 text-neutral-950 text-sm font-bold rounded-full transition-colors flex items-center gap-2 shadow-lg">
            Tüm Albümleri Gör &rarr;
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {albums.slice(0, 3).map((album, index) => (
            <motion.div 
              key={album.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => {
                setSelectedAlbum(album);
                setActivePhotoIndex(null);
              }}
              className={`relative group overflow-hidden rounded-2xl bg-neutral-900 cursor-pointer w-full aspect-square ${album.colSpan}`}
            >
              <Image 
                src={album.coverImage}
                alt={album.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none">
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* ALBÜM DETAY MODAL */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-xl overflow-y-auto"
          >
            <div className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur border-b border-neutral-800 p-4 md:p-6 flex justify-between items-center">
              <div>
                <p className="text-orange-500 text-sm font-bold uppercase">{selectedAlbum.date}</p>
                <h2 className="text-xl md:text-3xl font-bold text-white">{selectedAlbum.title}</h2>
              </div>
              <button 
                onClick={() => {
                  setSelectedAlbum(null);
                  setActivePhotoIndex(null);
                }}
                className="px-6 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full font-semibold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span className="text-xl">&times;</span> Kapat
              </button>
            </div>

            <div className="p-4 md:p-8 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {selectedAlbum.photos.map((photoUrl: string, index: number) => (
                <div 
                  key={index} 
                  onClick={() => setActivePhotoIndex(index)}
                  className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 group cursor-pointer"
                >
                  <Image 
                    src={photoUrl} 
                    alt={`${selectedAlbum.title} kare ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/30 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-950/80 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                      Büyüt
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* LIGHTBOX */}
            <AnimatePresence>
              {activePhotoIndex !== null && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                >
                  <button 
                    onClick={() => setActivePhotoIndex(null)}
                    className="absolute top-6 right-6 z-50 text-neutral-400 hover:text-white text-3xl font-light p-2 cursor-pointer"
                  >
                    &times;
                  </button>

                  <div className="absolute top-6 left-6 z-50 text-neutral-400 text-sm font-semibold tracking-wider bg-neutral-900/80 px-4 py-1.5 rounded-full border border-neutral-800">
                    {activePhotoIndex + 1} / {selectedAlbum.photos.length}
                  </div>

                  <button 
                    onClick={() => setActivePhotoIndex((prev) => prev !== null && prev > 0 ? prev - 1 : selectedAlbum.photos.length - 1)}
                    className="absolute left-4 md:left-8 z-50 p-3 rounded-full bg-neutral-900/80 border border-neutral-800 text-white hover:bg-orange-500 hover:text-neutral-950 transition-colors cursor-pointer"
                  >
                    &larr;
                  </button>

                  <div className="relative w-full max-w-5xl h-[75vh] md:h-[85vh]">
                    <Image 
                      src={selectedAlbum.photos[activePhotoIndex]}
                      alt="Büyük Görsel"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  <button 
                    onClick={() => setActivePhotoIndex((prev) => prev !== null && prev < selectedAlbum.photos.length - 1 ? prev + 1 : 0)}
                    className="absolute right-4 md:right-8 z-50 p-3 rounded-full bg-neutral-900/80 border border-neutral-800 text-white hover:bg-orange-500 hover:text-neutral-950 transition-colors cursor-pointer"
                  >
                    &rarr;
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* VİZÖRÜN ARKASINDA SECTION */}
      <section id="ekipman" className="py-24 px-4 max-w-7xl mx-auto border-t border-neutral-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold tracking-widest uppercase border border-orange-500/20">
              Spor Fotoğrafçısı
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
              Vizörün Arkasında
            </h2>
            
            <p className="text-neutral-300 text-lg leading-relaxed mb-8">
              Futbol sadece 90 dakikalık bir oyun değil; içinde sevinç, hayal kırıklığı ve büyük bir mücadele barındıran bir hikaye. Sahadaki bu ham duyguları dondurup ölümsüzleştirmek en büyük tutkum.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center gap-4 transition-all hover:border-neutral-700">
                <div className="w-2 h-10 bg-orange-500 rounded-full" />
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Ana Gövde</p>
                  <p className="text-white font-bold text-lg">Canon 1200D DSLR</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center gap-4 transition-all hover:border-neutral-700">
                <div className="w-2 h-10 bg-orange-500 rounded-full" />
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Telefoto Lens</p>
                  <p className="text-white font-bold text-lg">Canon EF-S 55-250mm f/4-5.6 IS II</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative w-full rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 group"
          >
            {/* Fotoğrafın orijinal oranını koruyarak boşluk kalmadan tam oturması sağlandı */}
            <div className="relative w-full h-[450px] md:h-[520px]">
              <Image 
                src="/ben.png" 
                alt="Samet KINAZ"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent p-6 flex items-end">
              <p className="text-sm font-medium text-neutral-200 backdrop-blur-md bg-neutral-950/60 px-4 py-2 rounded-lg border border-neutral-800/50">
                📸 Samet KINAZ
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* INSTAGRAM VİTRİNİ SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="py-24 px-4 max-w-7xl mx-auto border-t border-neutral-900 text-center"
      >
        <div className="mb-12">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-fuchsia-500">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Sahadan Anlık Kareler
          </h2>
          <a 
            href="https://instagram.com/_sk.raw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-bold transition-colors text-lg md:text-xl"
          >
            @_sk.raw <span className="text-sm">&nearrow;</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="https://instagram.com/_sk.raw" target="_blank" rel="noopener noreferrer" className="relative aspect-square group overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800">
            <Image 
              src="/u14zaferidman/u14zaferidman1.jpg" 
              alt="Instagram Post 1" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm">
              <span className="text-white font-bold flex items-center gap-4 text-lg">
                <span>🤍 İncele</span>
              </span>
            </div>
          </a>

          <a href="https://instagram.com/_sk.raw" target="_blank" rel="noopener noreferrer" className="relative aspect-square group overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800">
            <Image 
              src="/u14zaferarnavutkoy/u14zaferarnavutkoy1.jpg" 
              alt="Instagram Post 2" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm">
              <span className="text-white font-bold flex items-center gap-4 text-lg">
                <span>🤍 İncele</span>
              </span>
            </div>
          </a>

          <a href="https://instagram.com/_sk.raw" target="_blank" rel="noopener noreferrer" className="relative aspect-square group overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800">
            <Image 
              src="/u12zaferselvi/u12zaferselvi1.jpg" 
              alt="Instagram Post 3" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm">
              <span className="text-white font-bold flex items-center gap-4 text-lg">
                <span>🤍 İncele</span>
              </span>
            </div>
          </a>

          <a href="https://instagram.com/_sk.raw" target="_blank" rel="noopener noreferrer" className="relative aspect-square group overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800">
            <Image 
              src="/u11zaferselvi/u11zaferselvi1.jpg" 
              alt="Instagram Post 4" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm">
              <span className="text-white font-bold flex items-center gap-4 text-lg">
                <span>🤍 İncele</span>
              </span>
            </div>
          </a>
        </div>
        
        <div className="mt-10">
           <a href="https://instagram.com/_sk.raw" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border border-neutral-700 hover:border-orange-500 text-neutral-300 hover:text-white rounded-full transition-colors text-sm font-semibold">
             Daha fazlası için Instagram'a git
           </a>
        </div>
      </motion.section>

      {/* FOOTER & ÇEKİM TALEP FORMU */}
      <footer id="iletisim" className="border-t border-neutral-900 bg-neutral-900/10 py-24 text-neutral-400">
        <div className="max-w-4xl mx-auto px-4">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2">İletişim & Rezervasyon</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Birlikte Çalışalım</h2>
            <p className="text-lg max-w-xl mx-auto">
              Maç akreditasyonları, özel kulüp çekimleri ve projeleriniz için aşağıdaki formu doldurarak doğrudan bana ulaşabilirsiniz.
            </p>
          </motion.div>

          {/* ÇEKİM TALEP FORMU KARTI */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-neutral-900/80 border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-xl"
          >
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                const club = (form.elements.namedItem('club') as HTMLInputElement).value;
                const service = (form.elements.namedItem('service') as HTMLSelectElement).value;
                const date = (form.elements.namedItem('date') as HTMLInputElement).value;
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

                const whatsappNumber = "905432254662"; 
                const text = `Merhaba Samet, web siten üzerinden ulaşıyorum.%0A%0A*İsim/Kulüp:* ${name} (${club})%0A*Hizmet:* ${service}%0A*Tarih:* ${date}%0A*Mesaj:* ${message}`;
                
                window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Adınız / Yetkili</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Örn: Ahmet Yılmaz" 
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Kulüp / Kurum Adı</label>
                  <input 
                    type="text" 
                    name="club" 
                    required 
                    placeholder="Örn: Zeytinburnu Zaferspor" 
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Çekim Türü</label>
                  <select 
                    name="service" 
                    required
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors text-sm cursor-pointer"
                  >
                    <option value="" disabled selected>Seçiniz...</option>
                    <option value="Maç Günü / Karşılaşma Çekimi">Maç Günü / Karşılaşma Çekimi</option>
                    <option value="Spor Okulu / İdman Çekimi">Spor Okulu / İdman Çekimi</option>
                    <option value="Özel Oyuncu Portresi">Özel Oyuncu Portresi</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Planlanan Tarih</label>
                  <input 
                    type="date" 
                    name="date" 
                    required 
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors text-sm cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Detaylar / Mesajınız</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  required 
                  placeholder="Maç sahası, saat veya özel isteklerinizi belirtebilirsiniz..."
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 transition-colors text-sm resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-orange-500 text-neutral-950 font-extrabold rounded-xl hover:bg-orange-400 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.2)] cursor-pointer tracking-wider uppercase text-sm"
              >
                Çekim Talebi Gönder &rarr;
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
              <a 
                href="https://instagram.com/_sk.raw" 
                target="_blank" 
                rel="noreferrer" 
                className="text-orange-500 hover:text-orange-400 font-semibold transition-colors flex items-center gap-2"
              >
                📸 @_sk.raw üzerinden mesaj at
              </a>
              <span className="hidden sm:inline text-neutral-700">•</span>
              <a 
                href="mailto:iletisim@sametkinaz.com" 
                className="text-neutral-300 hover:text-white font-semibold transition-colors"
              >
                ✉️ iletisim@sametkinaz.com
              </a>
            </div>
          </motion.div>

          <div className="mt-16 text-center text-neutral-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Samet KINAZ. Tüm hakları saklıdır.</p>
          </div>

        </div>
      </footer>
    </main>
  );
}