"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AlbumlerSayfasi() {
  const allAlbums = [
    {
      id: 1,
      title: "Zeytinburnu Zaferspor - Spor Okulu Antrenmanı",
      date: "13 Eylül 2026",
      coverImage: "/sporokulu/sporokulu1.jpg",
      colSpan: "col-span-1",
      photos: [
        "/sporokulu/sporokulu1.jpg", "/sporokulu/sporokulu2.jpg", "/sporokulu/sporokulu3.jpg",
        "/sporokulu/sporokulu4.jpg", "/sporokulu/sporokulu5.jpg", "/sporokulu/sporokulu6.jpg",
        "/sporokulu/sporokulu7.jpg", "/sporokulu/sporokulu8.jpg", "/sporokulu/sporokulu9.jpg",
        "/sporokulu/sporokulu10.jpg", "/sporokulu/sporokulu11.jpg", "/sporokulu/sporokulu12.jpg"
      ]
    },
    {
      id: 2,
      title: "U11 Zeytinburnu Zaferspor - Selvi Hazırlık Maçı",
      date: "13 Eylül 2026",
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
      id: 3,
      title: "Zeytinburnu Zaferspor - Spor Okulu Antrenmanı",
      date: "12 Eylül 2026",
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
      id: 4,
      title: "U12 Zeytinburnu Zaferspor - Selvi Hazırlık Maçı",
      date: "12 Eylül 2026",
      coverImage: "/u12zaferselvi/u12zaferselvi1.jpg",
      colSpan: "col-span-1",
      photos: [
        "/u12zaferselvi/u12zaferselvi1.jpg", "/u12zaferselvi/u12zaferselvi2.jpg", "/u12zaferselvi/u12zaferselvi3.jpg",
        "/u12zaferselvi/u12zaferselvi4.jpg", "/u12zaferselvi/u12zaferselvi5.jpg", "/u12zaferselvi/u12zaferselvi6.jpg",
        "/u12zaferselvi/u12zaferselvi7.jpg"
      ]
    },
    {
      id: 5,
      title: "Zeytinburnu Zaferspor - Spor Okulu Antrenmanı",
      date: "06 Eylül 2026",
      coverImage: "/2sporokulu/2sporokulu1.jpg",
      colSpan: "col-span-1",
      photos: [
        "/2sporokulu/2sporokulu1.jpg", "/2sporokulu/2sporokulu2.jpg", "/2sporokulu/2sporokulu3.jpg",
        "/2sporokulu/2sporokulu4.jpg", "/2sporokulu/2sporokulu5.jpg", "/2sporokulu/2sporokulu6.jpg",
        "/2sporokulu/2sporokulu7.jpg"
      ]
    },
    {
      id: 6,
      title: "U14 Zeytinburnu Zaferspor - İdman",
      date: "04 Eylül 2026",
      coverImage: "/u14zaferidman/u14zaferidman1.jpg",
      colSpan: "col-span-1",
      photos: [
        "/u14zaferidman/u14zaferidman1.jpg", "/u14zaferidman/u14zaferidman2.jpg", "/u14zaferidman/u14zaferidman3.jpg",
        "/u14zaferidman/u14zaferidman4.jpg", "/u14zaferidman/u14zaferidman5.jpg", "/u14zaferidman/u14zaferidman6.jpg",
        "/u14zaferidman/u14zaferidman7.jpg"
      ]
    },
    {
      id: 7,
      title: "U14 Zeytinburnu Zaferspor - Arnavutköy Hazırlık Maçı",
      date: "03 Eylül 2026",
      coverImage: "/u14zaferarnavutkoy/u14zaferarnavutkoy1.jpg",
      colSpan: "col-span-1",
      photos: [
        "/u14zaferarnavutkoy/u14zaferarnavutkoy1.jpg", "/u14zaferarnavutkoy/u14zaferarnavutkoy2.jpg", "/u14zaferarnavutkoy/u14zaferarnavutkoy3.jpg",
        "/u14zaferarnavutkoy/u14zaferarnavutkoy4.jpg", "/u14zaferarnavutkoy/u14zaferarnavutkoy5.jpg", "/u14zaferarnavutkoy/u14zaferarnavutkoy6.jpg",
        "/u14zaferarnavutkoy/u14zaferarnavutkoy7.jpg", "/u14zaferarnavutkoy/u14zaferarnavutkoy8.jpg", "/u14zaferarnavutkoy/u14zaferarnavutkoy9.jpg",
        "/u14zaferarnavutkoy/u14zaferarnavutkoy10.jpg"
      ]
    },
    {
      id: 8,
      title: "Zeytinburnu Zaferspor - Spor Okulu Antrenmanı",
      date: "01 Eylül 2026",
      coverImage: "/3sporokulu/3sporokulu1.jpg",
      colSpan: "col-span-1",
      photos: [
        "/3sporokulu/3sporokulu1.jpg", "/3sporokulu/3sporokulu2.jpg", "/3sporokulu/3sporokulu3.jpg",
        "/3sporokulu/3sporokulu4.jpg", "/3sporokulu/3sporokulu5.jpg", "/3sporokulu/3sporokulu6.jpg",
        "/3sporokulu/3sporokulu7.jpg", "/3sporokulu/3sporokulu8.jpg", "/3sporokulu/3sporokulu9.jpg"
      ]
    }
  ];

  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-orange-500 selection:text-white pt-24 pb-24">
      
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

      {/* 3 sütunlu kusursuz eşit kare grid yapısı */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {allAlbums.map((album) => (
          <div 
            key={album.id} 
            onClick={() => setSelectedAlbum(album)}
            className="relative group overflow-hidden rounded-2xl bg-neutral-900 cursor-pointer w-full aspect-square shadow-xl border border-neutral-800/60"
          >
            <Image 
              src={album.coverImage}
              alt={album.title}
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-105 p-3"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none">
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-orange-400 text-xs font-bold tracking-wider mb-1 uppercase">{album.date}</p>
                    <h3 className="text-white text-lg font-medium">{album.title}</h3>
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

          <div className="p-4 md:p-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedAlbum.photos.map((photoUrl: string, index: number) => (
              <div key={index} className="relative aspect-square w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 flex items-center justify-center p-2">
                <Image 
                  src={photoUrl} 
                  alt={`${selectedAlbum.title} kare ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}