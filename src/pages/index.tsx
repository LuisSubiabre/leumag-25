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

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="animate-bounce-slow">
          <img
            src={experimentalin}
            alt="Experimentalin LEUMAG"
            className="w-[200px] h-[200px] mb-6"
          />
        </div>
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Liceo&nbsp;</span>
          <span className={title({ color: "blue" })}>Experimental&nbsp;</span>
          <span className={title()}>Umag&nbsp;</span>
          <br />

          <div className={subtitle({ class: "mt-4" })}>
            La verdad a través de la razón
          </div>
        </div>

        <div className="flex gap-3">
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
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
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
