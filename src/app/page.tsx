"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Briefcase, User, Mail, ChevronDown, Sparkles } from "lucide-react";

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <div className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-neutral-950 text-neutral-50 relative">
      
      {/* Animated Background - Green & Blue Tones */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] -left-[10%] w-[50vw] h-[50vw] bg-emerald-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-teal-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      {/* SECTION 1: HOME (Hero & Small Cards) */}
      <section id="home" className="snap-start w-full min-h-screen flex flex-col justify-center items-center relative z-10 px-6 py-20">
        <div className="max-w-4xl w-full flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="w-28 h-28 md:w-32 md:h-32 rounded-full mb-8 relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500 to-blue-500 blur-md opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300&q=80" 
              alt="Profile" 
              className="w-full h-full object-cover rounded-full border-2 border-neutral-800 relative z-10"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-sm text-emerald-400 mb-6 shadow-lg shadow-emerald-500/10"
          >
            <Sparkles size={16} />
            <span>Dijital Deneyimler Yaratıyorum</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Merhaba, ben <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Serdar</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12"
          >
            Kullanıcı dostu, modern ve yüksek performanslı web uygulamaları geliştiriyorum. 
            Aşağıdaki ufak kartlara tıklayarak detaylara inebilirsin.
          </motion.p>

          {/* Small Navigation Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl"
          >
            <button onClick={() => scrollTo("hakkimda")} className="group p-8 py-10 rounded-[2rem] bg-neutral-900/50 border border-neutral-800 hover:border-emerald-500/50 hover:bg-neutral-800/80 transition-all flex flex-col items-center gap-4 backdrop-blur-sm shadow-xl">
              <div className="p-4 bg-emerald-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                <User size={32} className="text-emerald-400" />
              </div>
              <span className="font-semibold text-lg tracking-wide text-neutral-200">Hakkımda</span>
            </button>
            
            <button onClick={() => scrollTo("deneyim")} className="group p-8 py-10 rounded-[2rem] bg-neutral-900/50 border border-neutral-800 hover:border-teal-500/50 hover:bg-neutral-800/80 transition-all flex flex-col items-center gap-4 backdrop-blur-sm shadow-xl">
              <div className="p-4 bg-teal-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                <Code size={32} className="text-teal-400" />
              </div>
              <span className="font-semibold text-lg tracking-wide text-neutral-200">Yetenekler</span>
            </button>

            <button onClick={() => scrollTo("projeler")} className="group p-8 py-10 rounded-[2rem] bg-neutral-900/50 border border-neutral-800 hover:border-blue-500/50 hover:bg-neutral-800/80 transition-all flex flex-col items-center gap-4 backdrop-blur-sm shadow-xl">
              <div className="p-4 bg-blue-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                <Briefcase size={32} className="text-blue-400" />
              </div>
              <span className="font-semibold text-lg tracking-wide text-neutral-200">Projeler</span>
            </button>

            <button onClick={() => scrollTo("iletisim")} className="group p-8 py-10 rounded-[2rem] bg-neutral-900/50 border border-neutral-800 hover:border-cyan-500/50 hover:bg-neutral-800/80 transition-all flex flex-col items-center gap-4 backdrop-blur-sm shadow-xl">
              <div className="p-4 bg-cyan-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                <Mail size={32} className="text-cyan-400" />
              </div>
              <span className="font-semibold text-lg tracking-wide text-neutral-200">İletişim</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 flex flex-col items-center cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
            onClick={() => scrollTo("hakkimda")}
          >
            <span className="text-xs tracking-widest text-neutral-400 mb-2 uppercase">Kaydır</span>
            <ChevronDown size={28} className="text-neutral-500 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: HAKKIMDA (Detailed Large Card) */}
      <section id="hakkimda" className="snap-start w-full min-h-screen flex items-center justify-center relative z-10 px-6 py-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={sectionVariants}
          className="max-w-6xl w-full"
        >
          <div className="p-10 md:p-20 rounded-[3rem] bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md relative overflow-hidden group shadow-2xl">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
            
            <div className="flex items-center gap-6 mb-12 relative z-10">
               <div className="p-5 rounded-[2rem] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-inner">
                 <User size={48} />
               </div>
               <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Hakkımda</h2>
            </div>
            
            <div className="space-y-8 text-xl md:text-2xl text-neutral-300 leading-relaxed relative z-10 font-light">
              <p>
                Merhaba! Ben Serdar. Yazılıma olan tutkum, problemleri zarif ve etkili kodlarla çözme arzusuyla başladı. Her projede sadece çalışan bir sistem değil, aynı zamanda harika bir kullanıcı deneyimi sunan estetik arayüzler inşa etmeye odaklanıyorum.
              </p>
              <p>
                Modern web teknolojilerini sürekli takip etmek, açık kaynak dünyasına katkıda bulunmak ve yeni şeyler denemek beni çok heyecanlandırıyor. Hayalimdeki ürünleri gerçeğe dönüştürürken, kod yazmayı bir sanat dalı olarak görüyorum.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: YETENEKLER/DENEYİM (Detailed Large Card) */}
      <section id="deneyim" className="snap-start w-full min-h-screen flex items-center justify-center relative z-10 px-6 py-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={sectionVariants}
          className="max-w-7xl w-full"
        >
          <div className="p-10 md:p-20 rounded-[3rem] bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md relative overflow-hidden group shadow-2xl">
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] group-hover:bg-teal-500/20 transition-colors duration-700"></div>
            
            <div className="flex items-center gap-6 mb-16 relative z-10">
               <div className="p-5 rounded-[2rem] bg-teal-500/10 border border-teal-500/20 text-teal-400 shadow-inner">
                 <Code size={48} />
               </div>
               <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Yetenekler & Deneyim</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-20 relative z-10">
              <div>
                <h3 className="text-3xl font-semibold mb-10 flex items-center gap-4 text-neutral-100">
                  <span className="w-3 h-10 rounded-full bg-teal-400"></span> Teknolojiler
                </h3>
                <div className="flex flex-wrap gap-4">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'UI/UX Design', 'Git'].map((skill, index) => (
                    <span key={index} className="px-6 py-3.5 rounded-2xl bg-neutral-800/80 hover:bg-neutral-800 text-neutral-200 font-medium border border-neutral-700/50 hover:border-teal-500/50 transition-colors shadow-sm text-lg tracking-wide">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-semibold mb-10 flex items-center gap-4 text-neutral-100">
                  <span className="w-3 h-10 rounded-full bg-teal-400"></span> Kariyer Yolu
                </h3>
                <ul className="space-y-12">
                  <li className="relative pl-10 border-l-2 border-neutral-800">
                    <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-neutral-900 border-2 border-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.5)]"></span>
                    <h4 className="text-2xl font-bold text-neutral-100">Kıdemli Front-end Geliştirici</h4>
                    <p className="text-base font-medium text-teal-400 mb-4 mt-2">Tech Solutions • 2022 - Günümüz</p>
                    <p className="text-lg text-neutral-400 leading-relaxed font-light">E-ticaret ve SaaS ürünleri için modern web sistemleri tasarlayıp geliştirdim. Performans ve erişilebilirlik optimizasyonlarını yürüttüm.</p>
                  </li>
                  <li className="relative pl-10 border-l-2 border-neutral-800">
                    <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-neutral-900 border-2 border-neutral-600"></span>
                    <h4 className="text-2xl font-bold text-neutral-100">Web Geliştirici</h4>
                    <p className="text-base font-medium text-neutral-500 mb-4 mt-2">Digital Ajans • 2020 - 2022</p>
                    <p className="text-lg text-neutral-400 leading-relaxed font-light">Onlarca başarılı kurumsal web projesinin arayüz programlamasını tek başıma sıfırdan hayata geçirdim.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 4: PROJELER (Detailed Large Cards) */}
      <section id="projeler" className="snap-start w-full min-h-screen flex items-center justify-center relative z-10 px-6 py-20">
         <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={sectionVariants}
          className="max-w-7xl w-full"
        >
          <div className="flex items-center gap-6 mb-16">
             <div className="p-5 rounded-[2rem] bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-inner">
               <Briefcase size={48} />
             </div>
             <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Projelerim</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Project Card 1 */}
            <div className="group rounded-[3rem] overflow-hidden border border-neutral-800/80 bg-neutral-900/60 backdrop-blur-md hover:border-blue-500/40 transition-all shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full">
              <div className="h-80 md:h-[28rem] bg-neutral-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10 opacity-80"></div>
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?fit=crop&w=1200&q=80" alt="Proje 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
              </div>
              <div className="p-10 md:p-12 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-5 group-hover:text-blue-400 transition-colors">E-Ticaret Platformu</h3>
                  <p className="text-lg text-neutral-400 mb-10 leading-relaxed font-light">Yeni nesil teknolojiler kullanılarak (Next.js, Tailwind, Stripe) geliştirilmiş, milisaniyeler içinde yüklenen ve olağanüstü pürüzsüz bir deneyime sahip e-ticaret altyapısı.</p>
                </div>
                <button className="flex items-center gap-3 text-lg font-semibold text-neutral-100 hover:text-blue-400 transition-colors self-start pb-2 border-b-2 border-transparent hover:border-blue-400">
                  Siteyi Ziyaret Et <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group rounded-[3rem] overflow-hidden border border-neutral-800/80 bg-neutral-900/60 backdrop-blur-md hover:border-emerald-500/40 transition-all shadow-2xl hover:shadow-emerald-500/10 flex flex-col h-full">
              <div className="h-80 md:h-[28rem] bg-neutral-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10 opacity-80"></div>
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=1200&q=80" alt="Proje 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
              </div>
              <div className="p-10 md:p-12 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-5 group-hover:text-emerald-400 transition-colors">Finans Dashboard</h3>
                  <p className="text-lg text-neutral-400 mb-10 leading-relaxed font-light">Karmaşık Excel tablolarını ve verileri basite indirgeyen, gerçek zamanlı istatistik grafikleriyle desteklenen gelişmiş yönetim paneli uygulaması.</p>
                </div>
                <button className="flex items-center gap-3 text-lg font-semibold text-neutral-100 hover:text-emerald-400 transition-colors self-start pb-2 border-b-2 border-transparent hover:border-emerald-400">
                  Siteyi Ziyaret Et <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 5: İLETİŞİM */}
      <section id="iletisim" className="snap-start w-full min-h-screen flex items-center justify-center relative z-10 px-6 py-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={sectionVariants}
          className="text-center"
        >
          <div className="inline-flex p-5 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-10 shadow-inner">
            <Mail size={48} />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Birlikte çalışalım!</h2>
          <p className="text-xl text-neutral-400 mb-12 max-w-xl mx-auto leading-relaxed font-light">
            Yeni bir proje fikriniz mi var veya ekibiniz için harika işler çıkaracak birine mi ihtiyacınız var? Sadece bir e-posta uzağınızdayım.
          </p>
          <a href="mailto:hello@example.com" className="group inline-flex items-center gap-4 px-10 py-5 rounded-full bg-neutral-100 hover:bg-white text-neutral-950 transition-all hover:scale-105 active:scale-95 font-bold text-lg shadow-xl shadow-white/10">
            Bana E-posta Gönder
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </section>

    </div>
  );
}
