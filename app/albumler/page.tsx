"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function TumAlbumler() {
  const albums = [
    {
      id: 1,
      title: "Zeytinburnu Zaferspor - Spor Okulu Antrenmanı",
      date: "Eylül 2026",
      coverImage: "/sporokulu/sporokulu1.jpg",
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
          <Link href="/" className="text-xl font-bold tracking-widest uppercase hover:text-orange-500 transition-colors">
            Samet <span className="text-orange-500">KINAZ</span>
          </Link>
          <Link 
            href="/"
            className="px-5 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-sm font-semibold rounded-full border border-neutral-800 transition-colors flex items-center gap-2"
          >
            &larr; Ana Sayfaya Dön
          </Link>
        </div>
      </header>

      {/* SAYFA BAŞLIĞI */}
      <section className="pt-36 pb-12 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2">Arşiv</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Tüm Albümler</h1>
          <p className="text-neutral-400 text-lg max-w-xl">
            Sezon boyunca sahada yakaladığım tüm maç, idman ve özel karşılaşma kareleri.
          </p>
        </motion.div>
      </section>

      {/* TÜM ALBÜMLER GRID */}
      <section className="max-w-7xl mx-auto px-4 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album, index) => (
            <motion.div 
              key={album.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              onClick={() => {
                setSelectedAlbum(album);
                setActivePhotoIndex(null);
              }}
              className="relative group overflow-hidden rounded-2xl bg-neutral-900 cursor-pointer w-full aspect-square border border-neutral-800"
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

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 bg-neutral-900/10 py-12 text-center text-neutral-400">
        <p className="text-sm">&copy; {new Date().getFullYear()} Samet KINAZ. Tüm hakları saklıdır.</p>
      </footer>
    </main>
  );
}