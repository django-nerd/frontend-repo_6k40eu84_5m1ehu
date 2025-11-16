import React from 'react'

function App() {
  const navItems = [
    { id: 'pengertian', label: 'Pengertian RPL' },
    { id: 'fasilitas', label: 'Fasilitas' },
    { id: 'pengajar', label: 'Pengajar' },
    { id: 'prestasi', label: 'Prestasi' },
    { id: 'keunggulan', label: 'Keunggulan' },
    { id: 'prospek', label: 'Prospek Karir' },
    { id: 'dasar', label: 'Dasar Pemrograman' },
    { id: 'kontak', label: 'Kontak' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50 text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo RPL (inline SVG) */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 grid place-items-center shadow-md">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor" aria-hidden>
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2.8 6.5h3.2a2.3 2.3 0 0 1 0 4.6h-1.8v2.4H8.8V8.5zm1.8 1.6v1.5h1.2a0.75 0.75 0 0 0 0-1.5H11zM15.2 15.5H13.6v-7h1.6v7z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs tracking-wider text-indigo-600 font-semibold">SMK MERDEKA</p>
              <h1 className="font-extrabold text-lg leading-tight">Jurusan RPL</h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-5 text-sm">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-slate-600 hover:text-indigo-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#kontak" className="ml-2 bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-indigo-500">Hubungi</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
              Rekayasa Perangkat Lunak (RPL)
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-800">
              Tempat Belajar Jadi Developer Masa Depan
            </h2>
            <p className="mt-4 text-slate-600 text-base md:text-lg">
              Di sini kamu belajar membangun aplikasi modern: dari logika pemrograman, desain antarmuka,
              basis data, hingga pengujian dan deployment. Kurikulum relevan dengan industri dan
              dipandu pengajar berpengalaman.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#fasilitas" className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-lg shadow">
                Lihat Fasilitas
              </a>
              <a href="#prospek" className="px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-white">
                Prospek Karir
              </a>
            </div>
          </div>

          {/* Logo RPL besar */}
          <div className="relative">
            <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-500 to-sky-400 p-8 shadow-xl">
              <div className="w-full h-full rounded-xl bg-white/10 backdrop-blur-sm grid place-items-center">
                <svg viewBox="0 0 200 200" className="w-48 h-48 text-white" fill="currentColor" aria-hidden>
                  <circle cx="100" cy="100" r="90" fill="currentColor" opacity="0.1" />
                  <text x="50%" y="48%" textAnchor="middle" dominantBaseline="middle" fontSize="36" fontWeight="800" fill="white">RPL</text>
                  <text x="50%" y="64%" textAnchor="middle" dominantBaseline="middle" fontSize="14" fill="white" opacity="0.9">Rekayasa Perangkat Lunak</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pengertian RPL */}
      <section id="pengertian" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">Pengertian RPL</h3>
          <p className="mt-4 text-slate-600 leading-relaxed">
            RPL (Rekayasa Perangkat Lunak) adalah bidang yang mempelajari proses merancang, membangun,
            menguji, dan memelihara perangkat lunak secara sistematis. Fokusnya pada pemecahan masalah
            menggunakan teknologi, kolaborasi tim, dan praktik pengembangan modern seperti versioning,
            testing, dan deployment.
          </p>
        </div>
      </section>

      {/* Fasilitas */}
      <section id="fasilitas" className="py-14 md:py-20 bg-white/70">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">Fasilitas RPL</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Lab Komputer Modern', desc: 'Perangkat spek tinggi, koneksi internet cepat, dan software industri terbaru.' },
              { title: 'Ruang Belajar Nyaman', desc: 'Ruang ber-AC, proyektor, sound system, dan area kolaborasi.' },
              { title: 'Perangkat Jaringan', desc: 'Switch, router, dan perangkat pendukung untuk praktik jaringan dasar.' },
              { title: 'Perpustakaan Digital', desc: 'Akses e-book, jurnal, dan tutorial resmi untuk memperkaya pembelajaran.' },
              { title: 'Studio Mini UI/UX', desc: 'Perangkat untuk desain antarmuka, prototyping, dan usability testing.' },
              { title: 'Sarana Kompetisi', desc: 'Pembinaan lomba, bootcamp internal, dan pendampingan mentor.' },
            ].map((f) => (
              <div key={f.title} className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-slate-800">{f.title}</h4>
                <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pengajar */}
      <section id="pengajar" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">Siapa Pengajarnya?</h3>
          <p className="mt-4 text-slate-600">Tim pengajar berpengalaman di industri dan pendidikan.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Ibu A. Putri, S.Kom', role: 'Pemrograman Dasar & Algoritma' },
              { name: 'Bapak B. Setiawan, M.Kom', role: 'Basis Data & Backend' },
              { name: 'Ibu C. Rahma, S.Kom', role: 'UI/UX & Frontend' },
            ].map((t) => (
              <div key={t.name} className="p-5 rounded-xl border border-slate-200 bg-white flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-bold">{t.name.split(' ')[0][0]}</div>
                <div>
                  <p className="font-semibold text-slate-800">{t.name}</p>
                  <p className="text-slate-600 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestasi */}
      <section id="prestasi" className="py-14 md:py-20 bg-white/70">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">Prestasi di Jurusan RPL</h3>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>• Juara 1 LKS Software Solutions tingkat kota</li>
            <li>• Finalis Hackathon EduTech tingkat provinsi</li>
            <li>• Aplikasi karya siswa diunduh 10.000+ kali di Play Store</li>
            <li>• Rutin meraih medali lomba UI/UX dan Web Design</li>
          </ul>
        </div>
      </section>

      {/* Keunggulan */}
      <section id="keunggulan" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">Keunggulan</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              { t: 'Kurikulum up-to-date', d: 'Materi mengikuti kebutuhan industri: Git, API, Cloud, dan Agile.' },
              { t: 'Project-based learning', d: 'Belajar melalui proyek nyata sehingga portofolio siap kerja.' },
              { t: 'Relasi industri luas', d: 'Magang dan kunjungan industri ke perusahaan teknologi.' },
              { t: 'Bimbingan karir', d: 'Kelas soft-skill, persiapan sertifikasi, dan pembinaan kompetisi.' },
            ].map((k) => (
              <div key={k.t} className="p-5 rounded-xl border border-slate-200 bg-white">
                <p className="font-semibold text-slate-800">{k.t}</p>
                <p className="text-slate-600 text-sm mt-2">{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prospek Karir */}
      <section id="prospek" className="py-14 md:py-20 bg-white/70">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">Prospek Karir lulusan RPL</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Frontend Developer',
              'Backend Developer',
              'Full-Stack Developer',
              'Mobile App Developer',
              'UI/UX Designer',
              'Quality Assurance (QA)',
              'DevOps Engineer',
              'Data Engineer Jr.',
            ].map((p) => (
              <div key={p} className="p-5 rounded-xl border border-slate-200 bg-white">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Dasar-dasar Pemrograman RPL */}
      <section id="dasar" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">Dasar-dasar Program RPL</h3>
          <ol className="mt-6 space-y-3 list-decimal list-inside text-slate-700">
            <li>Algoritma & logika pemrograman</li>
            <li>Struktur data dasar</li>
            <li>Pemrograman berorientasi objek</li>
            <li>Basis data dan SQL</li>
            <li>Pengembangan web (HTML, CSS, JavaScript, Framework)</li>
            <li>Pengembangan API dan autentikasi</li>
            <li>Pengujian perangkat lunak (unit, integration)</li>
            <li>Version control dengan Git</li>
            <li>Deployment ke server/Cloud</li>
          </ol>
        </div>
      </section>

      {/* Baju RPL Merdeka (placeholder visual) */}
      <section className="py-14 md:py-20 bg-white/70">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">Baju RPL Merdeka</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-8 bg-gradient-to-br from-slate-900 via-indigo-800 to-blue-700 text-white shadow-xl">
              <div className="text-6xl">👕</div>
              <p className="mt-4 font-semibold">Jersey Praktik</p>
              <p className="text-sm text-white/80">Desain modern, bahan nyaman, cocok untuk kegiatan harian dan lomba.</p>
            </div>
            <div className="rounded-2xl p-8 bg-white border border-slate-200">
              <p className="font-semibold text-slate-800">Seragam Identitas</p>
              <p className="text-slate-600 text-sm mt-2">
                Tersedia variasi warna resmi sekolah dengan bordir logo RPL. Visual hanya ilustrasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak & Sosial */}
      <section id="kontak" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">Kontak</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <p className="text-sm text-slate-500">Instagram SMK Merdeka</p>
              <a className="block mt-1 text-indigo-600 font-semibold hover:underline" href="https://instagram.com/smkmerdeka" target="_blank" rel="noreferrer">@smkmerdeka</a>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <p className="text-sm text-slate-500">Nomor Telepon</p>
              <p className="mt-1 font-semibold">0812-3456-7890</p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <p className="text-sm text-slate-500">Alamat</p>
              <p className="mt-1 font-semibold">Jl. Merdeka No. 123, Kota Merdeka</p>
            </div>
          </div>

          {/* Catatan logo RPL */}
          <div className="mt-8 p-5 rounded-xl border border-dashed border-indigo-300 bg-indigo-50/60">
            <p className="font-semibold text-indigo-800">Logo RPL</p>
            <p className="text-indigo-700/80 text-sm mt-1">
              Logo ilustrasi ditampilkan di bagian atas. Ganti dengan logo resmi jika tersedia.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200/70 bg-white/60">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} RPL • SMK Merdeka</p>
          <div className="flex items-center gap-4">
            <a href="#pengertian" className="hover:text-indigo-600">Tentang</a>
            <a href="#fasilitas" className="hover:text-indigo-600">Fasilitas</a>
            <a href="#kontak" className="hover:text-indigo-600">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
