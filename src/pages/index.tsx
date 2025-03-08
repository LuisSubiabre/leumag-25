import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Divider } from "@heroui/react";
import Noticias from "@/components/noticias";
import experimentalin from "@/assets/img/experimentalin.png";
import hero from "@/assets/img/hero.png";

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section
        className="absolute top-16 left-0 w-full min-h-[600px] flex flex-col items-center justify-center gap-4 py-8 md:py-10"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />{" "}
        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="relative z-10">
          <div className="animate-bounce-slow flex justify-center items-center">
            <img
              src={experimentalin}
              alt="Experimentalin LEUMAG"
              className="w-[200px] h-[200px] mb-6"
            />
          </div>
          <div className="inline-block text-center justify-center">
            <span className={title({ class: "text-white" })}>Liceo&nbsp;</span>
            <span className={title({ color: "blue" })}>Experimental&nbsp;</span>
            <span className={title({ class: "text-white" })}>Umag&nbsp;</span>
            <br />

            <div className={subtitle({ class: "mt-4 text-white" })}>
              La verdad a través de la razón
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-2 mt-[560px]">
        <div className="mt-2">
          {/* 
          <div className="flex gap-3 justify-center mt-6">
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href={siteConfig.links.docs}
            >
              Documentos Oficiales
            </Link>
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href={siteConfig.links.docs}
            >
              Reuniones
            </Link>
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href={siteConfig.links.docs}
            >
              Lista de Materiales
            </Link>
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href={siteConfig.links.docs}
            >
              Horarios
            </Link>
            <Link
              isExternal
              className={buttonStyles({
                variant: "bordered",
                radius: "full",
                className: "text-white border-white hover:bg-white/20",
              })}
              href={siteConfig.links.github}
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
          </div> */}
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>

        <Divider className="w-full max-w-lg" />
        <Noticias />
      </section>
    </DefaultLayout>
  );
}
