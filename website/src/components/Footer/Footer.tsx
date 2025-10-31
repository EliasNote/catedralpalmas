"use client";

import Image from "next/image";
import { CATEDRAL_INFO } from "@/constants/catedral";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Footer({ className }: { className: string }) {
  const title = "text-[22px] font-bold text-left mb-1";
  const iconSize1 = 20;
  const iconSize2 = 23;

  return (
    <section
      className={`w-full flex flex-col items-center gap-[50px] my-4 mt-15 ${className}`}
    >
      <div className="block xl:hidden">
        <Image
          src="/brasao.png"
          alt="Brasão"
          width={150}
          height={150}
          quality={100}
          className="rounded-full w-[150px] h-[150px]"
        />
      </div>
      <div className={`flex gap-[40px] max-w-[1280px] ${className}`}>
        <div className="hidden xl:block min-w-[150px] min-h-[150px]">
          <Image
            src="/brasao.png"
            alt="Brasão"
            width={150}
            height={150}
            quality={100}
            className="rounded-full w-[150px] h-[150px]"
          />
        </div>
        <div className="flex items-center gap-[40px] w-fit">
          <div
            className={`flex flex-col flex-wrap sm:flex-row gap-[30px] w-fit justify-center`}
          >
            <div className="w-70">
              <h2 className={title}>{CATEDRAL_INFO.name}</h2>
              <p>
                {CATEDRAL_INFO.address.street} -{" "}
                {CATEDRAL_INFO.address.district}
              </p>
              <p>{CATEDRAL_INFO.address.poBox}</p>
              <p>{CATEDRAL_INFO.address.zip}</p>
              <p>
                {CATEDRAL_INFO.address.city} - {CATEDRAL_INFO.address.state}
              </p>
            </div>
            <div className="w-50">
              <h2 className={title}>Atendimento</h2>
              <div>
                {CATEDRAL_INFO.serviceHours.office.map((h, i) => (
                  <p key={i}>
                    {h}
                    <br />
                  </p>
                ))}
              </div>
            </div>
            <div className="w-70">
              <h2 className={title}>Contato</h2>
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-2">
                  <FaWhatsapp size={iconSize2} />
                  {CATEDRAL_INFO.contacts.whatsapp}
                </span>
                <span className="flex items-center gap-2">
                  <FaPhone size={iconSize1} />
                  {CATEDRAL_INFO.contacts.phone}
                </span>
                <span className="flex items-center gap-2">
                  <FaEnvelope size={iconSize1} />
                  <a
                    href={`mailto:${CATEDRAL_INFO.contacts.email}`}
                    className="underline hover:text-blue-700"
                  >
                    {CATEDRAL_INFO.contacts.email}
                  </a>
                </span>
              </div>
            </div>
            <div className="w-50">
              <h2 className={title}>Redes Sociais</h2>
              <div className="flex flex-col gap-2 mt-2">
                <a
                  href={CATEDRAL_INFO.socialMedia.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:underline flex items-center gap-2"
                >
                  <span style={{ maxHeight: iconSize2 + "px" }}>
                    <FaFacebook size={iconSize2} />
                  </span>
                  {CATEDRAL_INFO.socialMedia.facebook.name}
                </a>
                <a
                  href={CATEDRAL_INFO.socialMedia.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:underline flex items-center gap-2"
                >
                  <span style={{ maxHeight: iconSize2 + "px" }}>
                    <FaInstagram size={iconSize2} />
                  </span>
                  {CATEDRAL_INFO.socialMedia.instagram.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mx-4">
        ® 2025 - Catedral do Senhor Bom Jesus da Coluna - Palmas - PR.
      </p>
    </section>
  );
}
