
import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  ArrowRight, 
  Wind, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Menu, 
  X, 
  Quote, 
  Flower2,
  Leaf,
  Check,
  Star,
  Sun,
  ChevronDown,
  HelpCircle
} from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O que você sente', href: '#problema' },
    { name: 'Como funciona', href: '#metodo' },
    { name: 'Sobre mim', href: '#sobre' },
    { name: 'Relatos', href: '#depoimentos' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl lg:text-2xl font-bold text-[#5B756E] serif italic leading-none">Ana Débora Lima</span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mt-1">Terapeuta TRG Online</span>
        </div>

        <div className="hidden lg:flex items-center space-x-10 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-[#D48C70] transition-colors">{link.name}</a>
          ))}
          <a href="https://wa.me/5500000000000" className="bg-[#5B756E] text-white px-8 py-3 rounded-full hover:bg-[#D48C70] transition-all shadow-md">
            Agendar Conversa
          </a>
        </div>

        <button className="lg:hidden text-[#5B756E]" onClick={() => setMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Menu Mobile */}
      <div className={`fixed inset-0 bg-[#FDFBF7] z-[110] flex flex-col transition-all duration-500 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex justify-between items-center border-b border-gray-100">
           <span className="text-xl font-bold text-[#5B756E] serif italic">Ana Débora Lima</span>
           <button onClick={() => setMenuOpen(false)} className="text-[#5B756E]"><X size={32} /></button>
        </div>
        <div className="flex flex-col space-y-8 p-12 text-3xl serif text-[#5B756E]">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)}>{link.name}</a>
          ))}
          <a href="https://wa.me/5500000000000" className="text-[#D48C70] pt-4 flex items-center gap-4 text-2xl">
             WhatsApp <ArrowRight />
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 bg-white">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 reveal active z-10">
        <div className="inline-flex items-center gap-3 bg-[#F9EBE0] px-5 py-2 rounded-full">
          <Sun size={14} className="text-[#D48C70]" />
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#D48C70] uppercase italic">Você merece voltar a ser leve</span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold text-[#3E4745] leading-[1.1] serif italic">
          Recupere o controle da sua <span className="text-[#D48C70]">vida emocional</span>.
        </h1>
        
        <p className="text-lg lg:text-xl text-gray-500 max-w-lg leading-relaxed font-light">
          Você não precisa carregar ansiedade, medos ou dores do passado sozinha(o). Com acolhimento e terapia online, é possível voltar a viver com paz.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
          <a href="https://wa.me/5500000000000" className="w-full sm:w-auto bg-[#D48C70] text-white px-12 py-6 rounded-full text-lg font-bold hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3">
            Dar o primeiro passo
            <ArrowRight size={20} />
          </a>
          <p className="text-xs text-gray-400 font-medium">Atendimento 100% Online <br/> com total privacidade.</p>
        </div>
      </div>

      <div className="relative reveal active">
        <div className="relative z-10 rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-2xl border-[10px] border-white">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" 
            alt="Ana Débora Terapeuta" 
            className="w-full aspect-square lg:aspect-[4/5] object-cover"
          />
        </div>
        {/* Quote Card - Hidden on small mobile to avoid bug, visible on larger screens */}
        <div className="hidden sm:block absolute -bottom-8 -left-8 bg-white p-8 rounded-[3rem] shadow-2xl z-20 border border-gray-50 max-w-[280px]">
           <Quote size={24} className="text-[#D48C70] mb-3 opacity-30" />
           <p className="text-[#3E4745] serif italic text-lg leading-snug">"O acolhimento é o início da sua transformação."</p>
        </div>
      </div>
    </div>
  </section>
);

const SectionProblema = () => (
  <section id="problema" className="py-24 lg:py-40 bg-[#FDFBF7]">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-20 reveal">
        <h2 className="text-4xl lg:text-6xl font-bold text-[#3E4745] serif italic mb-8">Talvez você sinta que sua <span className="text-[#8DA69F]">cabeça não desliga</span>.</h2>
        <p className="text-lg lg:text-xl text-gray-500 font-light leading-relaxed italic">
          "Eu sei o que preciso fazer, mas travo." <br/>
          "Carrego coisas do passado que ainda doem."
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <Wind />, title: "Ansiedade Constante", text: "Qualquer situação gera medo ou angústia. O corpo responde e o emocional fica exausto." },
          { icon: <Heart />, title: "Peso do Passado", text: "Você carrega experiências difíceis que ainda parecem vivas no seu dia a dia." },
          { icon: <ShieldCheck />, title: "Modo Sobrevivência", text: "Você vive apenas para dar conta do dia, sem sentir a leveza de realmente viver." }
        ].map((item, i) => (
          <div key={i} className="reveal p-10 rounded-[3rem] bg-white border border-gray-100 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-[#F9EBE0] rounded-2xl flex items-center justify-center text-[#D48C70] mb-8">
               {React.cloneElement(item.icon, { size: 28 })}
            </div>
            <h3 className="text-2xl font-bold serif italic mb-4 text-[#3E4745]">{item.title}</h3>
            <p className="text-gray-500 font-light leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Methodology = () => (
  <section id="metodo" className="py-24 lg:py-40 bg-white">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
      <div className="reveal">
        <h2 className="text-4xl lg:text-6xl font-bold text-[#5B756E] serif italic mb-8">O que é a <span className="text-[#D48C70]">TRG</span>?</h2>
        <p className="text-xl text-gray-500 leading-relaxed font-light mb-10">
          A Terapia de Reprocessamento Generativo foca em limpar as raízes emocionais de traumas e bloqueios. Diferente de terapias longas, o objetivo aqui é <strong>resultados reais</strong> e duradouros.
        </p>
        <div className="space-y-6">
           <div className="flex items-center gap-4 bg-[#FDFBF7] p-4 rounded-2xl border border-gray-50">
              <div className="text-[#D48C70]"><Check /></div>
              <p className="text-gray-600 font-medium italic">Mais calma emocional e controle da ansiedade</p>
           </div>
           <div className="flex items-center gap-4 bg-[#FDFBF7] p-4 rounded-2xl border border-gray-50">
              <div className="text-[#D48C70]"><Check /></div>
              <p className="text-gray-600 font-medium italic">Liberação de dores e traumas do passado</p>
           </div>
           <div className="flex items-center gap-4 bg-[#FDFBF7] p-4 rounded-2xl border border-gray-50">
              <div className="text-[#D48C70]"><Check /></div>
              <p className="text-gray-600 font-medium italic">Retomada do controle da própria vida</p>
           </div>
        </div>
      </div>
      
      <div className="reveal relative">
        <div className="bg-[#8DA69F]/5 p-12 lg:p-20 rounded-[4rem] text-center">
          <Leaf size={40} className="text-[#8DA69F] mx-auto mb-8" />
          <h3 className="text-3xl font-bold serif italic text-[#5B756E] mb-6">Atendimento Acolhedor</h3>
          <p className="text-gray-500 mb-10 text-lg font-light italic leading-relaxed">
            Aqui você é ouvida(o) sem julgamento. Cada sessão respeita seu tempo, sua história e suas emoções.
          </p>
          <a href="https://wa.me/5500000000000" className="inline-block bg-[#5B756E] text-white px-10 py-5 rounded-full font-bold shadow-lg hover:bg-[#D48C70] transition-all">
             Agendar atendimento online
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="depoimentos" className="py-24 lg:py-40 bg-[#FDFBF7]">
    <div className="container mx-auto px-6 text-center">
       <h2 className="text-4xl lg:text-5xl font-bold text-[#3E4745] serif italic mb-20">Relatos de Transformação</h2>
       <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            { name: "Mariana S.", text: "Eu voltei a dormir tranquila e controlar minha ansiedade." },
            { name: "Ricardo F.", text: "Senti paz emocional em poucas sessões. Mudou minha perspectiva." },
            { name: "Ana L.", text: "Hoje eu me sinto no controle da minha própria história." }
          ].map((item, i) => (
            <div key={i} className="reveal bg-white p-12 rounded-[3rem] shadow-sm relative overflow-hidden group hover:shadow-xl transition-all">
               <div className="flex text-[#D48C70] mb-6 gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
               </div>
               <p className="text-gray-500 italic font-light leading-relaxed mb-10">"{item.text}"</p>
               <span className="text-[10px] font-bold text-[#8DA69F] uppercase tracking-widest">{item.name}</span>
            </div>
          ))}
       </div>
    </div>
  </section>
);

const Bio = () => (
  <section id="sobre" className="py-24 lg:py-40 bg-white">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
       <div className="reveal">
          <img 
            src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&q=80&w=800" 
            alt="Ana Débora Lima" 
            className="rounded-[4rem] shadow-2xl w-full"
          />
       </div>
       <div className="reveal space-y-8">
          <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-[#D48C70]">Terapeuta TRG</span>
          <h2 className="text-5xl lg:text-7xl font-bold text-[#5B756E] serif italic leading-tight">Sou Ana Débora <br/> Lima da Silva.</h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed italic">
            Ajudo pessoas a lidarem com ansiedade, medos e traumas de forma acolhedora e 100% online.
          </p>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            Minha missão é guiar você em uma jornada de volta para si mesma, ressignificando dores e destravando o potencial que você sempre teve, mas que o medo escondeu.
          </p>
          <div className="pt-6">
             <a href="https://wa.me/5500000000000" className="text-[#D48C70] font-bold flex items-center gap-4 hover:gap-6 transition-all text-xl serif italic">
                Vamos conversar? <ArrowRight />
             </a>
          </div>
       </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: "O atendimento é 100% online?", a: "Sim. Você pode fazer a terapia no conforto e privacidade da sua casa, através de videochamada." },
    { q: "Em quanto tempo começo a sentir melhora?", a: "Cada pessoa tem seu ritmo, mas muitos clientes relatam alívio significativo já nas primeiras sessões." },
    { q: "Preciso saber exatamente o que falar?", a: "Não. Você será guiada(o) com acolhimento, no seu tempo e sem pressões." }
  ];

  return (
    <section className="py-24 lg:py-40 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 max-w-3xl">
         <h2 className="text-4xl font-bold text-[#3E4745] serif italic text-center mb-16">Perguntas Frequentes</h2>
         <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                 <button 
                   onClick={() => setOpen(open === i ? -1 : i)}
                   className="w-full p-8 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                 >
                    <span className="font-bold text-[#5B756E]">{faq.q}</span>
                    <ChevronDown className={`transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
                 </button>
                 <div className={`transition-all duration-300 ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <p className="p-8 pt-0 text-gray-500 font-light leading-relaxed">{faq.a}</p>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white py-20 border-t border-gray-50">
    <div className="container mx-auto px-6 text-center space-y-12">
      <div className="flex flex-col items-center">
         <span className="text-3xl font-bold text-[#5B756E] serif italic">Ana Débora Lima</span>
         <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em] mt-2">Terapeuta TRG Online</span>
      </div>
      
      <div className="flex flex-col items-center gap-8">
         <h2 className="text-4xl lg:text-6xl text-[#3E4745] serif italic leading-tight">Pronta para viver com <br/> <span className="text-[#D48C70]">mais leveza</span>?</h2>
         <a href="https://wa.me/5500000000000" className="bg-[#D48C70] text-white px-16 py-8 rounded-full text-2xl font-bold shadow-2xl hover:scale-105 transition-all">
            Agendar atendimento
         </a>
      </div>

      <div className="pt-20 text-[10px] text-gray-300 font-bold uppercase tracking-[0.3em]">
         © 2025 • Ana Débora Lima • Todos os direitos reservados
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="selection:bg-[#D48C70] selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <SectionProblema />
      <Methodology />
      <Testimonials />
      <Bio />
      <FAQ />
      <Footer />
      
      {/* Botão de WhatsApp Flutuante com Tooltip */}
      <div className="fixed bottom-8 right-8 z-[100] flex items-center gap-4 group">
        <div className="bg-white text-[#3E4745] px-6 py-3 rounded-2xl text-xs font-bold shadow-2xl opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-gray-50 hidden lg:block">
           Estou aqui para te ouvir.
        </div>
        <a 
          href="https://wa.me/5500000000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-5 rounded-full shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-90 transition-all"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </div>
  );
}

export default App;
