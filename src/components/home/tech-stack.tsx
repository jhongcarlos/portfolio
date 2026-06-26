"use client";

import { motion } from "framer-motion";
import {
  siWordpress, siNextdotjs, siReact, siPhp, siLaravel,
  siWebflow, siWix, siSquarespace, siFramer, siUmbraco,
  siCloudflare, siGit, siGodaddy, siClaude, siGoogleanalytics, siSemrush,
  siTailwindcss,
} from "simple-icons";

interface Tech {
  name: string;
  svg: string;
  color: string;
}

const TECHS: Tech[] = [
  { name: "WordPress",   svg: siWordpress.svg,    color: "#21759B" },
  { name: "Next.js",     svg: siNextdotjs.svg,    color: "#ffffff" },
  { name: "React",       svg: siReact.svg,        color: "#61DAFB" },
  { name: "PHP",         svg: siPhp.svg,          color: "#777BB4" },
  { name: "Laravel",     svg: siLaravel.svg,      color: "#FF2D20" },
  { name: "Webflow",     svg: siWebflow.svg,      color: "#4353FF" },
  { name: "Wix",         svg: siWix.svg,          color: "#FAAD05" },
  { name: "Squarespace", svg: siSquarespace.svg,  color: "#ffffff" },
  { name: "Framer",      svg: siFramer.svg,       color: "#0055FF" },
  { name: "Umbraco",     svg: siUmbraco.svg,      color: "#3544B1" },
  { name: "AWS",         svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.064.056.128.056.184 0 .08-.048.16-.152.24l-.504.336c-.072.048-.144.072-.208.072-.08 0-.16-.04-.24-.112a2.49 2.49 0 0 1-.288-.376 6.212 6.212 0 0 1-.248-.472c-.624.736-1.408 1.104-2.352 1.104-.672 0-1.208-.192-1.6-.576-.392-.384-.592-.896-.592-1.536 0-.68.24-1.232.728-1.648.488-.416 1.136-.624 1.96-.624.272 0 .552.024.848.064.296.04.6.104.92.176v-.584c0-.608-.128-1.032-.376-1.28-.256-.248-.688-.368-1.304-.368-.28 0-.568.032-.864.104-.296.072-.584.16-.864.272-.128.056-.224.088-.28.104-.056.016-.096.024-.128.024-.112 0-.168-.08-.168-.248v-.392c0-.128.016-.224.056-.28.04-.056.112-.112.224-.168.28-.144.616-.264 1.008-.36a4.84 4.84 0 0 1 1.24-.152c.944 0 1.632.216 2.072.648.432.432.656 1.088.656 1.968v2.592zm-3.24 1.208c.264 0 .536-.048.824-.144.288-.096.544-.272.76-.512.128-.152.224-.32.272-.512.048-.192.08-.424.08-.696v-.336a6.69 6.69 0 0 0-.736-.136 6.039 6.039 0 0 0-.752-.048c-.536 0-.928.104-1.192.32-.264.216-.392.52-.392.92 0 .376.096.656.296.848.192.2.472.296.84.296zm6.44.88c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.312L7.78 6.604a1.419 1.419 0 0 1-.072-.32c0-.128.064-.2.192-.2h.784c.152 0 .256.024.312.08.064.048.112.16.16.312l1.336 5.272 1.24-5.272c.04-.16.088-.264.152-.312a.51.51 0 0 1 .32-.08h.64c.16 0 .264.024.32.08.064.048.12.16.152.312l1.256 5.336 1.376-5.336c.048-.16.104-.264.16-.312a.51.51 0 0 1 .312-.08h.744c.128 0 .2.064.2.2 0 .04-.008.08-.016.128-.008.048-.024.112-.056.2l-1.72 5.528c-.048.16-.104.264-.168.312a.46.46 0 0 1-.304.08h-.688c-.16 0-.264-.024-.32-.08-.064-.056-.12-.16-.152-.32l-1.232-5.168-1.224 5.16c-.04.16-.088.264-.152.32-.064.056-.168.08-.32.08h-.688zm9.184.192c-.416 0-.832-.048-1.232-.144-.4-.096-.712-.2-.92-.32-.128-.072-.216-.152-.248-.224a.563.563 0 0 1-.048-.224v-.408c0-.168.064-.248.184-.248.048 0 .096.008.144.024.048.016.12.048.2.08.272.12.568.216.888.28.328.064.648.096.976.096.52 0 .92-.088 1.2-.264a.86.86 0 0 0 .424-.764.778.778 0 0 0-.212-.556c-.144-.152-.416-.288-.808-.416l-1.16-.36c-.584-.184-1.016-.456-1.288-.816a1.953 1.953 0 0 1-.408-1.2c0-.344.072-.648.216-.912.144-.264.336-.496.584-.688.248-.2.528-.344.856-.448a3.4 3.4 0 0 1 1.072-.152c.184 0 .376.008.56.032.192.024.368.056.536.096.16.04.312.088.456.136.144.048.256.096.336.144.112.064.192.128.24.2a.448.448 0 0 1 .072.264v.376c0 .168-.064.256-.184.256-.064 0-.168-.032-.304-.096a3.676 3.676 0 0 0-1.528-.312c-.472 0-.84.072-1.096.224-.256.152-.384.384-.384.704 0 .216.08.4.24.552.16.152.456.304.88.44l1.136.36c.576.184.992.44 1.24.768.248.328.368.704.368 1.12 0 .352-.072.672-.208.952-.144.28-.336.528-.592.728-.256.208-.56.36-.92.472a3.857 3.857 0 0 1-1.192.168zm2.848 3.304c-3.36 2.48-8.24 3.8-12.44 3.8-5.88 0-11.176-2.176-15.184-5.792-.312-.28-.032-.664.344-.448 4.328 2.52 9.672 4.032 15.192 4.032 3.728 0 7.824-.776 11.6-2.376.568-.24 1.04.376.488.784zm1.392-1.584c-.432-.552-2.848-.264-3.936-.128-.328.04-.376-.248-.08-.464 1.92-1.352 5.072-.96 5.44-.504.368.456-.096 3.608-1.896 5.112-.28.232-.544.112-.416-.2.4-1.008 1.312-3.264.888-3.816z"/></svg>`, color: "#FF9900" },
  { name: "GoHighLevel", svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm0 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"/></svg>`, color: "#F26722" },
  { name: "Tailwind CSS",  svg: siTailwindcss.svg,  color: "#06B6D4" },
  { name: "Cloudflare",      svg: siCloudflare.svg,      color: "#F38020" },
  { name: "Git",             svg: siGit.svg,             color: "#F05032" },
  { name: "GoDaddy",         svg: siGodaddy.svg,         color: "#1BDBDB" },
  { name: "Claude",          svg: siClaude.svg,          color: "#D97757" },
  { name: "Google Analytics",svg: siGoogleanalytics.svg, color: "#E37400" },
  { name: "SEMrush",         svg: siSemrush.svg,         color: "#FF642D" },
  { name: "Canva",           svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.309 15.006c-.39.44-.81.7-1.35.7-.51 0-.87-.27-1.35-.81-.72.6-1.56.93-2.43.93-1.98 0-3.42-1.56-3.42-3.69 0-2.31 1.62-4.11 3.78-4.11.69 0 1.32.21 1.83.57V8.1a.45.45 0 0 1 .45-.45h.93c.252 0 .45.198.45.45v5.46c0 .54.21.75.45.75.18 0 .36-.12.57-.36l.57.696zM11.4 13.77c.42 0 .84-.15 1.17-.42v-2.52a1.83 1.83 0 0 0-1.17-.42c-.99 0-1.71.84-1.71 1.95s.66 1.41 1.71 1.41z"/></svg>`, color: "#00C4CC" },
  { name: "Gemini",          svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.304 14.304 0 0 0 12 12 14.304 14.304 0 0 0-12 12z"/></svg>`, color: "#8E75B2" },
];

const ALL = [...TECHS, ...TECHS];

function TechIcon({ svg, color, name }: { svg: string; color: string; name: string }) {
  return (
    <span
      className="w-4 h-4 flex-shrink-0"
      style={{ color }}
      dangerouslySetInnerHTML={{
        __html: svg.replace("<svg ", `<svg fill="currentColor" width="16" height="16" `),
      }}
      aria-label={name}
    />
  );
}

export default function TechStack() {
  return (
    <section className="py-14 border-y border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest text-center">
          Technologies &amp; Platforms I Work With
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex gap-3 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {ALL.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card shadow-sm text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 hover:shadow-md transition-all whitespace-nowrap cursor-default select-none"
            >
              <TechIcon svg={tech.svg} color={tech.color} name={tech.name} />
              {tech.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
