/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import React from "react";

const links = [
  { label: "UTMfy", url: "https://app.utmify.com.br/dashboards/69e43570a62db66aa662c8e8/resumo/" },
  { label: "AdSparo", url: "https://adsparo.com/overview/login.php" },
  { label: "imgBB", url: "https://imgbb.com/" },
  { label: "Removedor de Marca D'água", url: "https://ezremove.ai/video-watermark-remover/" },
  { label: "Agente de Criativos", url: "https://chatgpt.com/g/g-694936786a6c8191b5b7431ce9a914dc-ideator-ia-de-criativos" },
  { label: "Agente de Prompt Scale", url: "https://chatgpt.com/g/g-68f40e6eede48191842a4842792fac53-mega-prompter-do-lona" },
  { label: "Agente de Prompt", url: "https://chatgpt.com/g/g-693e8458ca98819193c88e92b9dbe9e8-black-nexus" },
  { label: "Clonador de Páginas", url: "https://saveweb2zip.com/en" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#621114] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(239,68,68,0.3),_transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#3a080a] via-[#621114] to-[#3a080a] animate-gradient-slow opacity-80" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center space-y-2 mb-10"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            x: [0, -1, 1, -1, 0]
          }}
          transition={{ 
            duration: 0.8,
            x: { duration: 0.5, delay: 0.5 }
          }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white"
        >
          The Marketing Triad
        </motion.h1>
      </motion.div>

      <div className="z-10 w-full max-w-md space-y-4">
        {links.map((link, index) => {
          return (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="relative w-full p-4 bg-[#0a0a0a] border border-[#ef4444] rounded-xl hover:bg-[#1a1a1a] transition-colors font-medium shadow-lg hover:shadow-[#ef4444]/20 flex items-center justify-center group text-center"
            >
              <span className="flex-grow">{link.label}</span>
              <ArrowRight className="w-5 h-5 text-[#ef4444] absolute right-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
