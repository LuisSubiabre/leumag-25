import { title, subtitle } from "@/components/primitives";

import DefaultLayout from "@/layouts/default";
import { Divider } from "@heroui/react";
import Noticias from "@/components/noticias";
import experimentalin from "@/assets/img/experimentalin.png";
import hero from "@/assets/img/hero.png";
import IndexCard from "@/components/index-card";

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
        {/* <div className="flex gap-3 justify-center mb-6">
            <Link
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href="/centro-padres"
            >
              Centro de Padres
            </Link>
            <Link
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href="/centro-alumnos"
            >
              Centro de Alumnos
            </Link>
          </div> */}
      </section>

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-2 mt-[560px]">
        <div className="mt-2">
          <IndexCard />

          {/* <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet> */}
        </div>

        <Divider className="w-full max-w-lg" />

        <Noticias />
      </section>
    </DefaultLayout>
  );
}
