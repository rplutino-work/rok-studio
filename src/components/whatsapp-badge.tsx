"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppBadge() {
  return (
    <motion.a
      href="https://wa.me/5491100000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-0 hover:gap-3 transition-all duration-300"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-300 whitespace-nowrap text-sm font-medium text-white bg-[#25d366] px-0 group-hover:px-4 py-3 rounded-l-none group-hover:rounded-l-xl">
        Chateá con nosotros
      </span>
      <div className="w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-lg shadow-[#25d366]/20 hover:shadow-[#25d366]/40 transition-shadow duration-300">
        <MessageCircle size={24} className="text-white" />
      </div>
    </motion.a>
  );
}
