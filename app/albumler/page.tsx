"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AlbumlerSayfasi() {
  // --- BÜTÜN ALBÜM ARŞİVİNİ BURAYA EKLEYEBİLİRSİN ---
  // Burası 10-20 albüm olsa da sorun olmaz, aşağı doğru listelenir.
  const allAlbums = [
    {
      id: 1,
      title: "Zeytinburnu Zaferspor - Lig Mücadelesi",
      date: "14 Eylül 2026",
      coverImage: "https://images.unsplash.com/photo-1600250395222-6b944208a099?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1 md:col-span-2",
      photos: [
        "https://images.unsplash.com/photo-1600250395222-6b944208a099?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518605368461-1e1252281146?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Arnavutköy Belediye Spor",
      date: "10 Eylül 2026",
      coverImage: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1",
      photos: [
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Taktik İdman & Hazırlık",
      date: "05 Eylül 2026",
      coverImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1",
      photos: [
        "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    // Yeni bir albüm eklemek istersen virgül koyup aşağıya ekleyebilirsin
    {
      id: 4,
      title: "Özel Çekim: Kaleci Antrenmanı",
      date: "01 Eylül 2026",
      coverImage: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1 md:col-span-2",
      photos: [
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop"
      ]
    }
  ];

  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-orange-500 selection:text-white pt-24 pb-24">
      
      {/* ÜST BAR */}
      <header className="fixed top-0 w-full z-40 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-widest uppercase">
            Samet <span className="text-orange-500">Kınaz</span>
          </div>
          <Link href="/" className="text-sm font-semibold text-neutral-400 hover:text-white flex items-center gap-2">
            &larr; Ana Sayfaya Dön
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 mt-12 mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Tüm Albümler</h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl">
          Sezon boyunca saha kenarından yakaladığım tüm maç, idman ve özel çekim arşivleri.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
        {allAlbums.map((album) => (
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

      {/* ALBÜM DETAYI (MODAL) */}
      {selectedAlbum && (
        <div className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-xl overflow-y-auto">
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
    </main>
  );
}