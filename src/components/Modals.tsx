"use client";

import { useState } from "react";

interface ModalsProps {
  isRegisterOpen: boolean;
  isExpoOpen: boolean;
  onCloseRegister: () => void;
  onCloseExpo: () => void;
}

export default function Modals({
  isRegisterOpen,
  isExpoOpen,
  onCloseRegister,
  onCloseExpo,
}: ModalsProps) {
  // ── Project Expo modal state ──────────────────────────────────────────────
  const [expoSubmitted, setExpoSubmitted] = useState(false);
  const [expoForm, setExpoForm] = useState({
    teamLead: "",
    email: "",
    projectTitle: "",
    category: "Hardware & IoT",
  });

  const handleExpoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setExpoSubmitted(true);
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          REGISTRATION MODAL — Registrations Closed
      ════════════════════════════════════════════════════════════════════ */}
      {isRegisterOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Registration modal"
        >
          <div className="relative w-full max-w-sm sm:max-w-md bg-[#1F0E05] rounded-3xl shadow-2xl border-2 border-[#B85D2A]/30 max-h-[calc(100dvh-2rem)] overflow-y-auto">
            <div className="p-5 sm:p-8">
              {/* Close Button */}
              <button
                onClick={onCloseRegister}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF6F0] flex items-center justify-center text-sm transition-colors cursor-pointer z-10"
                aria-label="Close registration modal"
              >
                ✕
              </button>

              {/* Badge */}
              <div className="flex justify-center mb-4">
                <span className="inline-flex items-center gap-1.5 bg-[#B85D2A]/20 text-[#E8C5A8] border border-[#B85D2A]/30 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  SYNORA 2026 · Registration
                </span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#B85D2A]/20 border border-[#B85D2A]/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#E8C5A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 className="font-heading font-black text-xl sm:text-2xl text-[#FAF6F0] uppercase tracking-tight text-center leading-tight mb-1">
                Registrations
              </h3>
              <h3 className="font-heading font-black text-xl sm:text-2xl text-[#E8C5A8] uppercase tracking-tight text-center leading-tight mb-5">
                Closed
              </h3>

              {/* Notice Card */}
              <div className="bg-[#2B1408] border border-[#B85D2A]/30 rounded-2xl px-5 py-5 mb-6 space-y-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#E8C5A8] animate-pulse shrink-0" />
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#E8C5A8]/70">Important Notice</p>
                </div>
                <p className="text-sm text-[#FAF6F0]/90 leading-relaxed">
                  Registration for{" "}
                  <span className="text-[#E8C5A8] font-semibold">SYNORA 2026</span>{" "}
                  is now closed. Thank you for the overwhelming response.
                </p>
                <p className="text-sm text-[#FAF6F0]/90 leading-relaxed">
                  Stay tuned to our channels for further updates and event details.
                </p>
              </div>

              {/* Close / Acknowledged button */}
              <button
                onClick={onCloseRegister}
                className="w-full font-heading font-black py-2.5 sm:py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider border-2 bg-[#E8C5A8] hover:bg-[#DDB896] text-[#2B1408] border-[#2B1408] active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(232,197,168,0.2)] transition-all"
              >
                Got It
              </button>

              <p className="mt-4 text-center text-[10px] text-[#A88C78]/60 font-mono uppercase tracking-wider">
                Oct 30–31, 2026 · SJCET Palai, Kottayam
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          PROJECT EXPO MODAL  — unchanged
      ════════════════════════════════════════════════════════════════════ */}
      {isExpoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm sm:max-w-md bg-[#1F0E05] rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl border-2 border-[#B85D2A]/30 text-center max-h-[calc(100dvh-2rem)] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={onCloseExpo}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF6F0] flex items-center justify-center text-sm transition-colors cursor-pointer"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Icon */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#B85D2A]/20 border border-[#B85D2A]/30 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#E8C5A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#B85D2A]/20 text-[#E8C5A8] border border-[#B85D2A]/30 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 sm:mb-4">
              SYNORA 2026 · Project Expo
            </div>

            <h3 className="font-heading font-black text-xl sm:text-2xl md:text-3xl text-[#FAF6F0] uppercase tracking-tight leading-tight mb-3">
              Registrations<br />Opening Soon
            </h3>

            <p className="text-xs sm:text-sm text-[#A88C78] leading-relaxed mb-5 sm:mb-6">
              Project Expo registration for SYNORA 2026 will open shortly. Review the guidelines and stay tuned for the submission portal announcement.
            </p>

            <div className="bg-[#3E1C0D] rounded-2xl px-4 py-3 sm:px-5 sm:py-4 border border-[#B85D2A]/20 mb-5 sm:mb-6 text-left space-y-1">
              <p className="text-[10px] text-[#E8C5A8]/50 font-mono uppercase tracking-widest">Competition Details</p>
              <p className="text-xs text-[#FAF6F0] font-semibold">SYNORA 2026 · Hardware Project Expo</p>
              <p className="text-xs text-[#A88C78]">Total Prize Pool: ₹15,000/- · SJCET Palai</p>
            </div>

            <div className="space-y-3">
              <a
                href="https://drive.google.com/file/d/1tEGeEfOEEJVMwRdlByApqYHThNH9IbQh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block bg-transparent hover:bg-white/5 text-[#E8C5A8] border border-[#B85D2A]/40 font-heading font-bold py-2 sm:py-2.5 rounded-full text-xs uppercase tracking-wider transition-colors"
              >
                View Expo Guidance ↗
              </a>
              <button
                onClick={onCloseExpo}
                className="w-full bg-[#E8C5A8] hover:bg-[#DDB896] text-[#2B1408] font-heading font-black py-2.5 sm:py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider border-2 border-[#2B1408] active:scale-95 transition-all cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Suppress unused warnings for expo form state (kept for future use) */}
      {void [expoSubmitted, expoForm, setExpoForm, handleExpoSubmit]}
    </>
  );
}