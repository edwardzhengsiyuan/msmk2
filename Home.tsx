import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="w-full bg-background min-h-[calc(100vh-80px)]">
      {/* Hero Banner - full viewport */}
      <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden bg-black flex group">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-75 transition-transform duration-[20000ms] ease-linear group-hover:scale-105"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80")' }}
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 md:px-8 cursor-default">
          <div className="max-w-5xl p-8 md:p-16 rounded-[2rem] flex flex-col items-center animate-fade-in">

            {/* Chinese version: two lines, no overflow */}
            {language === 'zh' ? (
              <h1
                className="font-extrabold text-white tracking-wider mb-4 drop-shadow-lg leading-tight
                           flex flex-col items-center gap-2
                           transition-all duration-[1400ms] ease-out
                           group-hover:text-accent group-hover:scale-105
                           group-hover:drop-shadow-[0_0_32px_rgba(123,188,185,0.5)]"
              >
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">每时每刻</span>
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/90 font-bold tracking-[0.15em]">
                  生物科技
                </span>
              </h1>
            ) : (
              <h1
                className="font-extrabold text-white tracking-widest mb-4 drop-shadow-lg leading-tight
                           text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                           transition-all duration-[1400ms] ease-out
                           group-hover:text-accent group-hover:scale-105
                           group-hover:drop-shadow-[0_0_32px_rgba(123,188,185,0.5)]"
              >
                MOMENTIS BIOTECH
              </h1>
            )}

            {/* Divider line - grows on hover */}
            <div
              className="h-[3px] w-20 mx-auto mb-8 rounded-full
                         bg-white/60
                         transition-all duration-[1400ms] ease-out
                         group-hover:w-56 group-hover:bg-accent"
            />

            {/* Tagline */}
            <h2
              className="text-base md:text-xl lg:text-2xl uppercase tracking-[0.25em] font-semibold
                         text-white/85 drop-shadow mb-4
                         transition-all duration-[1400ms] ease-out
                         group-hover:tracking-[0.4em] group-hover:text-white"
            >
              {language === 'zh' ? '以科技提升健康价值' : 'Better Health, Every Moment'}
            </h2>

            {/* Company full name */}
            <p
              className="text-sm md:text-base text-white/50 tracking-widest font-light
                         transition-all duration-[1400ms] ease-out
                         group-hover:text-white/75"
            >
              {language === 'zh'
                ? '每时每刻生物科技（深圳）有限公司'
                : 'Momentis Biotech (Shenzhen) Co., Ltd.'}
            </p>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* Brand intro strip */}
      <section className="py-20 bg-card border-b border-border relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-4 text-center relative z-10 group/intro cursor-default">
          <div className="inline-flex items-center space-x-6 mb-7 text-secondary group-hover/intro:text-accent transition-colors duration-700">
            <span className="w-14 h-[2px] bg-current opacity-30 group-hover/intro:opacity-60 group-hover/intro:w-20 transition-all duration-700" />
            <h3 className="text-xl md:text-2xl font-extrabold tracking-[0.2em] uppercase">
              {language === 'zh' ? '天然 · 科学 · 健康' : 'NATURAL · SCIENCE · HEALTH'}
            </h3>
            <span className="w-14 h-[2px] bg-current opacity-30 group-hover/intro:opacity-60 group-hover/intro:w-20 transition-all duration-700" />
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-loose font-light">
            {language === 'zh'
              ? '以"成为全球领先的全周期健康科技服务商"为愿景，将天然成分与前沿技术相结合，为健康产业带来具有深远价值的革新解决方案。'
              : 'Aspiring to set the global standard for integrated health technology across the lifespan, combining natural ingredients with cutting-edge science to deliver transformative health solutions.'}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;