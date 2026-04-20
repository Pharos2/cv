"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  Terminal, 
  UserCircle2, 
  Mail, 
  ChevronDown, 
  Cpu, 
  ExternalLink,
  Briefcase,
  Globe
} from "lucide-react";

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navCards = [
    { id: "hakkimda", title: "Kimim?", icon: <UserCircle2 size={40} />, color: "emerald", label: "Hakkımda" },
    { id: "yetenekler", title: "Neler Bilirim?", icon: <Terminal size={40} />, color: "cyan", label: "Yetenekler" },
    { id: "projeler", title: "Neler Yaptım?", icon: <Code2 size={40} />, color: "blue", label: "Projeler" },
    { id: "iletisim", title: "Konuşalım mı?", icon: <Mail size={40} />, color: "blue", label: "İletişim" },
  ];

  return (
    <main className="snap-container bg-[#030712] text-slate-100 selection:bg-neon-cyan/30">
      
      {/* Dynamic Neon Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] -left-[10%] w-[70vw] h-[70vw] bg-neon-emerald/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[30%] right-[-10%] w-[60vw] h-[60vw] bg-neon-cyan/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[80vw] h-[80vw] bg-neon-blue/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      {/* SECTION 1: HERO */}
      <section id="home" className="snap-section relative flex flex-col items-center justify-center px-6 overflow-hidden pt-12">
        <div className="max-w-5xl w-full flex flex-col items-center text-center relative z-10">
          
          {/* Profile Section - Slightly smaller to avoid overflow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-6"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full p-1 bg-white/10">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400" 
                alt="Serdar" 
                className="w-full h-full object-cover rounded-full border-2 border-[#030712]"
              />
            </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 border border-white/5 rounded-full pointer-events-none"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-xs font-semibold mb-4 backdrop-blur-md"
          >
            <Cpu size={14} className="animate-pulse" />
            <span>Bilgisayar Mühendisliği Son Sınıf</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-7xl font-black mb-4 tracking-tighter"
          >
            MERHABA, BEN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-emerald to-neon-blue">SERDAR</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-xl text-slate-400 max-w-2xl mb-10 font-light leading-relaxed"
          >
            Geleceği kodlayan, modern teknolojilere tutkulu ve öğrenmeye doymayan bir yazılımcı adayıyım. 
            Kartları keşfederek dünyama göz atabilirsin.
          </motion.p>

          {/* Large Navigation Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-8"
          >
            {navCards.map((card, idx) => (
              <button 
                key={idx}
                onClick={() => scrollTo(card.id)}
                className={`group relative p-6 h-40 md:h-52 rounded-3xl bg-glass hover:bg-white/10 transition-all duration-500 flex flex-col items-center justify-center gap-2 overflow-hidden shadow-2xl hover:scale-105 hover:-translate-y-2`}
              >
                <div className={`absolute -top-10 -right-10 w-24 h-24 bg-neon-${card.color}/10 rounded-full blur-2xl group-hover:bg-neon-${card.color}/20 transition-colors`}></div>
                <div className={`p-4 rounded-2xl bg-neon-${card.color}/10 text-neon-${card.color} group-hover:scale-110 transition-all`}>
                  {card.icon}
                </div>
                <div className="text-center">
                   <h3 className="text-sm md:text-lg font-bold text-white tracking-tight">{card.title}</h3>
                </div>
                <div className={`absolute bottom-0 left-0 h-1 bg-neon-${card.color} w-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              </button>
            ))}
          </motion.div>

          {/* Scroll text */}
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-4 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
            onClick={() => scrollTo("hakkimda")}
          >
            <span className="text-[9px] uppercase tracking-widest font-black">Kaydır</span>
            <ChevronDown size={18} />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: HAKKIMDA */}
      <section id="hakkimda" className="snap-section flex items-center justify-center p-6 relative">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl w-full bg-glass p-12 md:p-16 rounded-[3rem] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <UserCircle2 size={300} />
          </div>
          <div className="relative z-10">
            <h2 className="text-sm uppercase tracking-[0.4em] text-neon-emerald font-bold mb-6 italic">Hakkımda</h2>
            <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight">YAZILIMI BİR <span className="text-neon-emerald">SANAT</span> OLARAK GÖREN BİR ÖĞRENCİ.</h3>
            <div className="grid md:grid-cols-2 gap-10 text-slate-300 text-base md:text-lg font-light leading-relaxed">
              <p>
                İstanbul'un en iyi mühendislik fakültelerinden birinde Bilgisayar Mühendisliği son sınıf öğrencisiyim. 
                4 yıllık eğitim hayatım boyunca sadece derslerle yetinmeyip, gerçek dünya problemlerine 
                modern çözümler üretmek için kendimi geliştirdim.
              </p>
              <p>
                Özellikle Full-stack web geliştirme ve yapay zeka entegrasyonları üzerine yoğunlaştım. 
                Sizlere sadece kod değil, bir hikayesi ve kullanıcıda bıraktığı bir hissi olan 
                dijital deneyimler sunmayı hedefliyorum.
              </p>
            </div>
            <div className="mt-10 flex gap-6">
               <a href="#" className="p-3.5 rounded-xl bg-white/5 hover:bg-neon-emerald/20 hover:text-neon-emerald transition-all"><Globe size={24} /></a>
               <a href="#" className="p-3.5 rounded-xl bg-white/5 hover:bg-neon-blue/20 hover:text-neon-blue transition-all"><Briefcase size={24} /></a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: YETENEKLER */}
      <section id="yetenekler" className="snap-section flex items-center justify-center p-6 bg-[#020617]">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-6xl w-full"
        >
          <div className="text-center mb-12">
            <h2 className="text-xs uppercase tracking-[0.4em] text-neon-cyan font-bold mb-4">Stack</h2>
            <h3 className="text-4xl md:text-6xl font-black">YETENEK SETİM</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "React / Next.js", level: "90%", color: "#00f2ff" },
              { name: "TypeScript", level: "85%", color: "#3b82f6" },
              { name: "Tailwind CSS", level: "95%", color: "#10b981" },
              { name: "Node.js", level: "80%", color: "#00f2ff" },
              { name: "Python", level: "75%", color: "#3b82f6" },
              { name: "PostgreSQL", level: "70%", color: "#10b981" },
              { name: "Docker", level: "65%", color: "#00f2ff" },
              { name: "Git / CI-CD", level: "85%", color: "#3b82f6" },
            ].map((skill, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 pb-10 rounded-[2rem] bg-glass group transition-all relative overflow-hidden"
              >
                <h4 className="text-lg font-bold mb-6 text-white group-hover:text-neon-cyan transition-colors">{skill.name}</h4>
                
                <div className="relative h-2 w-full bg-white/5 rounded-full">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                    style={{ backgroundColor: skill.color, boxShadow: `0 0 15px ${skill.color}66` }}
                    className="absolute inset-y-0 left-0 rounded-full"
                  >
                    <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5 + (i * 0.1) }}
                      style={{ backgroundColor: skill.color }}
                      className="absolute -right-4 -top-8 px-2 py-1 text-[#030712] text-[10px] font-black rounded-md shadow-lg"
                    >
                      {skill.level}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 4: PROJELER */}
      <section id="projeler" className="snap-section flex items-center justify-center p-6">
        <div className="max-w-7xl w-full">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-sm uppercase tracking-[0.4em] text-neon-blue font-bold mb-4">Portfolyo</h2>
                <h3 className="text-5xl md:text-7xl font-black">PROJELERİM</h3>
              </div>
              <button className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-3 brightness-125 transition-all">
                Tümünü Gör <ExternalLink size={18} />
              </button>
           </div>

           <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  title: "AI Destekli Task Yönetimi",
                  desc: "Next.js 16 ve OpenAI API kullanılarak geliştirilen, kullanıcı alışkanlıklarını analiz ederek görevleri önceliklendiren modern bir SaaS uygulaması.",
                  tag: "Next.js • AI • Prisma",
                  img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
                  color: "blue"
                },
                {
                  title: "Blockchain Tabanlı Oylama",
                  desc: "Ethereum akıllı kontratları ile çalışan, şeffaf ve güvenli bir üniversite içi oylama sistemi. Bitirme projem için başlangıç aşamasında.",
                  tag: "Solidity • React • Ethers.js",
                  img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
                  color: "cyan"
                }
              ].map((proj, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group relative rounded-[3rem] overflow-hidden bg-[#0a0f1e] border border-white/5 shadow-2xl h-[450px] md:h-[600px]"
                >
                  <img src={proj.img} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 p-10 md:p-14 w-full">
                    <span className={`px-4 py-1.5 rounded-full bg-neon-${proj.color}/10 text-neon-${proj.color} text-xs font-bold uppercase tracking-wider mb-6 inline-block`}>
                      {proj.tag}
                    </span>
                    <h4 className="text-3xl md:text-5xl font-black mb-6 group-hover:text-neon-cyan transition-colors">{proj.title}</h4>
                    <p className="text-slate-400 text-lg md:text-xl font-light mb-8 line-clamp-3 md:line-clamp-none italic">"{proj.desc}"</p>
                    <button className="flex items-center gap-3 text-lg font-bold group/btn">
                      Detayları Gör <ArrowRight className="group-hover/btn:translate-x-3 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 5: İLETİŞİM */}
      <section id="iletisim" className="snap-section flex flex-col items-center justify-center p-6 text-center">
        <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           className="relative"
        >
          <div className="absolute -inset-10 bg-neon-cyan/20 blur-[100px] rounded-full animate-pulse"></div>
          <h2 className="text-5xl md:text-9xl font-black tracking-tighter mb-10 relative z-10">ZİRVEYE <br /> <span className="text-neon-blue">BERABER</span> ÇIKALIM.</h2>
          <p className="text-xl md:text-3xl text-slate-400 font-light max-w-2xl mx-auto mb-16 relative z-10 leading-relaxed">
            Mezuniyet sonrası ekibinize enerji ve vizyon katacak bir mühendis arıyorsanız, bir kahve içmeye ne dersiniz?
          </p>
          <a 
            href="mailto:serdar@example.com" 
            className="relative z-10 inline-flex items-center gap-6 px-12 py-6 rounded-full bg-neon-cyan text-[#030712] font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(0,242,255,0.4)]"
          >
            Bana Ulaşın <Mail size={32} />
          </a>
        </motion.div>

        <footer className="absolute bottom-10 text-slate-600 text-sm font-medium tracking-widest uppercase">
          &copy; 2026 Serdar • Software Engineering Student
        </footer>
      </section>

    </main>
  );
}
