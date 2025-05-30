"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/favicon/Made with insMind-web-app-manifest-512x512.png";

export function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="bg-[#001F3F] shadow-md fixed top-0 left-0 w-full z-30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            src={logo}
            alt="Logo do escritório"
            height={64}
            width={64}
            className="object-contain cursor-pointer"
          />
        </Link>

        <button
          className="lg:hidden z-40 p-2 rounded transition hover:bg-[#c8a96a]/20"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? (
            <svg
              className="w-6 h-6 text-[#f5f1e6]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-[#f5f1e6]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>

        <nav className="hidden lg:block">
          <ul className="flex space-x-8 text-[#f5f1e6] font-medium">
            <li>
              <a
                href="#About"
                className="hover:text-[#c8a96a] transition duration-600"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#Areas"
                className="hover:text-[#c8a96a] transition duration-600"
              >
                Áreas de Atuação
              </a>
            </li>
            <li>
              <a
                href="#Contato"
                className="hover:text-[#c8a96a] transition duration-600"
              >
                Contato Rapido
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out 
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        style={{
          backdropFilter: open ? "blur(8px)" : "none",
          background: open ? "rgba(0,31,63,0.93)" : "rgba(0,31,63,0)",
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-5 py-5">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image
                src={logo}
                alt="Logo do escritório"
                height={45}
                className="object-contain cursor-pointer"
              />
            </Link>
            <button
              className="z-40 p-2 rounded hover:bg-[#c8a96a]/20 transition"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
            >
              <svg
                className="w-10 h-10 text-[#f5f1e6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center">
            <ul className="space-y-10 text-2xl font-semibold text-[#f5f1e6] text-center">
              <li>
                <a
                  href="#About"
                  className="hover:text-[#c8a96a] transition"
                  onClick={() => setOpen(false)}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#Areas"
                  className="hover:text-[#c8a96a] transition"
                  onClick={() => setOpen(false)}
                >
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a
                  href="#Contato"
                  className="hover:text-[#c8a96a] transition"
                  onClick={() => setOpen(false)}
                >
                  Contato Rapido
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
