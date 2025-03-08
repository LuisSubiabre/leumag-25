import DefaultLayout from "@/layouts/default";
import { equipoDirectivo } from "@/data/directivos.ts";
import { equipoParvulos } from "@/data/parvulos.ts";
import { equipoBasica } from "@/data/basica.ts";
import { equipoMedia } from "@/data/media.ts";
import { equipoDocenteAdministrativo } from "@/data/docentes.ts";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { equipoAsistentes } from "./asistentes";
import { equipoAuxiliar } from "./auxiliares";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/react";

export default function DocsPage() {
  // Función para scroll suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col min-h-screen">
        {/* Header con imagen de fondo */}
        <div
          className="w-full py-24 px-4 rounded-lg relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: 'url("/src/assets/img/heroParallax.png")',
          }}
        >
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-blue-800/90 dark:from-blue-900/95 dark:to-blue-950/45" />
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Estamentos
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 dark:text-blue-50">
              Liceo Experimental UMAG
            </p>
          </div>
        </div>

        {/* Navegación mejorada */}
        <nav className="py-4 z-[100]">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4">
            <Button
              size="sm"
              color="primary"
              className="mx-4 dark:!bg-warning dark:border-warning whitespace-nowrap"
              variant="ghost"
              onPress={() => scrollToSection("equipo-directivo")}
            >
              Equipo Directivo
            </Button>
            <Button
              size="sm"
              color="primary"
              className="mx-4 dark:!bg-warning dark:border-warning whitespace-nowrap"
              variant="ghost"
              onPress={() => scrollToSection("educacion-parvularia")}
            >
              Educación Parvularia
            </Button>
            <Button
              size="sm"
              color="primary"
              className="mx-4 dark:!bg-warning dark:border-warning whitespace-nowrap"
              variant="ghost"
              onPress={() => scrollToSection("educacion-basica")}
            >
              Educación Básica
            </Button>
            <Button
              size="sm"
              color="primary"
              className="mx-4 dark:!bg-warning dark:border-warning whitespace-nowrap"
              variant="ghost"
              onPress={() => scrollToSection("educacion-media")}
            >
              Educación Media
            </Button>
            <Button
              size="sm"
              color="primary"
              className="mx-4 dark:!bg-warning dark:border-warning whitespace-nowrap"
              variant="ghost"
              onPress={() => scrollToSection("docentes-administrativos")}
            >
              Docentes Administrativos
            </Button>
            <Button
              size="sm"
              color="primary"
              className="mx-4 dark:!bg-warning dark:border-warning whitespace-nowrap"
              variant="ghost"
              onPress={() => scrollToSection("asistentes-educacion")}
            >
              Asistentes de la Educación
            </Button>
            <Button
              size="sm"
              color="primary"
              className="mx-4 dark:!bg-warning dark:border-warning whitespace-nowrap"
              variant="ghost"
              onPress={() => scrollToSection("equipo-mantencion")}
            >
              Equipo de Mantención
            </Button>
          </div>
        </nav>

        {/* Contenedor principal */}
        <main className="flex-grow">
          <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
            <div id="equipo-directivo" className="scroll-mt-48">
              <h2 className="text-4xl py-4">Equipo Directivo</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4">
                {equipoDirectivo.map((directivo) => (
                  <Card
                    className="py-4 hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-yellow-200/50 transition-shadow hover:rotate-1"
                    key={directivo.correo}
                  >
                    <CardBody className="overflow-visible py-2 flex justify-center items-center">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={directivo.img}
                        width={270}
                      />
                    </CardBody>

                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                      <h4 className="font-bold text-large text-center">
                        {directivo.nombre}
                      </h4>
                      <p className="text-tiny uppercase font-bold text-center">
                        {directivo.dpto}
                      </p>
                      <small className="text-default-500 text-center">
                        {directivo.correo}
                      </small>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
            <Divider className="my-4" />

            <div id="educacion-parvularia" className="scroll-mt-32">
              <h2 className="text-4xl py-4">Educación Parvularia</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4">
                {equipoParvulos.map((parvulos) => (
                  <Card
                    className="py-4 hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-yellow-200/50 transition-shadow hover:rotate-1"
                    key={parvulos.correo}
                  >
                    <CardBody className="overflow-visible py-2 flex justify-center items-center">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={parvulos.img}
                        width={270}
                      />
                    </CardBody>

                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                      <h4 className="font-bold text-large text-center">
                        {parvulos.nombre}
                      </h4>
                      <p className="text-tiny uppercase font-bold text-center">
                        {parvulos.dpto}
                      </p>
                      <p className="text-tiny uppercase font-bold text-center">
                        {parvulos.more}
                      </p>
                      <small className="text-default-500 text-center">
                        {parvulos.correo}
                      </small>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
            <Divider className="my-4" />
            <div id="educacion-basica" className="scroll-mt-32">
              <h2 className="text-4xl py-4">Docentes Enseñanza Básica</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4">
                {equipoBasica.map((basica) => (
                  <Card
                    className="py-4 hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-yellow-200/50 transition-shadow hover:rotate-1"
                    key={basica.correo}
                  >
                    <CardBody className="overflow-visible py-2 flex justify-center items-center">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={basica.img}
                        width={270}
                      />
                    </CardBody>

                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                      <h4 className="font-bold text-large text-center">
                        {basica.nombre}
                      </h4>
                      <p className="text-tiny uppercase font-bold text-center">
                        {basica.dpto}
                      </p>
                      <p className="text-tiny uppercase font-bold text-center">
                        {basica.more}
                      </p>
                      <p className="text-tiny uppercase font-bold text-center">
                        {basica.asignatura}
                      </p>
                      <small className="text-default-500 text-center">
                        {basica.correo}
                      </small>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
            <Divider className="my-4" />
            <div id="educacion-media" className="scroll-mt-32">
              <h2 className="text-4xl py-4">Educación Media</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4">
                {equipoMedia.map((media) => (
                  <Card
                    className="py-4 hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-yellow-200/50 transition-shadow hover:rotate-1"
                    key={media.correo}
                  >
                    <CardBody className="overflow-visible py-2 flex justify-center items-center">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={media.img}
                        width={270}
                      />
                    </CardBody>

                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                      <h4 className="font-bold text-large text-center">
                        {media.nombre}
                      </h4>
                      <p className="text-tiny uppercase font-bold text-center">
                        {media.dpto}
                      </p>
                      <p className="text-tiny uppercase font-bold text-center">
                        {media.more}
                      </p>
                      <p className="text-tiny uppercase font-bold text-center">
                        {media.asignatura}
                      </p>
                      <small className="text-default-500 text-center">
                        {media.correo}
                      </small>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
            <Divider className="my-4" />
            <div id="docentes-administrativos" className="scroll-mt-32">
              <h2 className="text-4xl py-4">Docentes Administrativos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4">
                {equipoDocenteAdministrativo.map((docente) => (
                  <Card
                    className="py-4 hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-yellow-200/50 transition-shadow hover:rotate-1"
                    key={docente.correo}
                  >
                    <CardBody className="overflow-visible py-2 flex justify-center items-center">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={docente.img}
                        width={270}
                      />
                    </CardBody>

                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                      <h4 className="font-bold text-large text-center">
                        {docente.nombre}
                      </h4>
                      <p className="text-tiny uppercase font-bold text-center">
                        {docente.dpto}
                      </p>
                      <p className="text-tiny uppercase font-bold text-center">
                        {docente.more}
                      </p>

                      <small className="text-default-500 text-center">
                        {docente.correo}
                      </small>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <Divider className="my-4" />
            <div id="asistentes-educacion" className="scroll-mt-32">
              <h2 className="text-4xl py-4">Asistentes de la Educación</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4">
                {equipoAsistentes.map((asistentes) => (
                  <Card
                    className="py-4 hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-yellow-200/50 transition-shadow hover:rotate-1"
                    key={asistentes.correo}
                  >
                    <CardBody className="overflow-visible py-2 flex justify-center items-center">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={asistentes.img}
                        width={270}
                      />
                    </CardBody>

                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                      <h4 className="font-bold text-large text-center">
                        {asistentes.nombre}
                      </h4>
                      <p className="text-tiny uppercase font-bold text-center">
                        {asistentes.dpto}
                      </p>

                      <small className="text-default-500 text-center">
                        {asistentes.correo}
                      </small>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <Divider className="my-4" />
            <div id="equipo-mantencion" className="scroll-mt-32">
              <h2 className="text-4xl py-4">Equipo de Mantención y Auxiliar</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4">
                {equipoAuxiliar.map((auxiliares) => (
                  <Card
                    className="py-4 hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-yellow-200/50 transition-shadow hover:rotate-1"
                    key={auxiliares.correo}
                  >
                    <CardBody className="overflow-visible py-2 flex justify-center items-center">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={auxiliares.img}
                        width={270}
                      />
                    </CardBody>

                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                      <h4 className="font-bold text-large text-center">
                        {auxiliares.nombre}
                      </h4>
                      <p className="text-tiny uppercase font-bold text-center">
                        {auxiliares.dpto}
                      </p>

                      <small className="text-default-500 text-center">
                        {auxiliares.correo}
                      </small>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
}
