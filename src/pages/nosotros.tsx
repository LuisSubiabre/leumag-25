import { Image } from "@heroui/react";
import {
  EyeIcon,
  FlagIcon,
  AcademicCapIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  SparklesIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import hero from "@/assets/img/hero.png";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
        {/* Header con imagen de fondo */}
        <div
          className="w-full py-24 px-4 rounded-lg relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://liceoexperimental.cl/assets/hero-DBwSpYCd.png")',
          }}
        >
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-blue-800/90 dark:from-blue-900/95 dark:to-blue-950/45" />
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Nosotros
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 dark:text-blue-50">
              Liceo Experimental UMAG
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4">
          {/* Columna izquierda */}
          <div className="flex flex-col gap-8">
            {/* Información General */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <h2 className={title({ size: "sm", color: "blue" })}>
                Información General
              </h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <AcademicCapIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>
                    <strong>RBD:</strong> 24327
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <MapPinIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>
                    <strong>Director:</strong> Nelson Patricio Bravo Jorquera
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <BuildingOfficeIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <p>
                        <strong>Dependencia:</strong> Particular Subvencionado
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserGroupIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <p>
                        <strong>Niveles:</strong> Pre-Kinder - IV Medio
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <SparklesIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <p>
                        <strong>Orientación:</strong> Laica
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IdentificationIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <p>
                        <strong>Uniforme:</strong> Uniforme propio
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Misión */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <FlagIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className={title({ size: "sm" })}>Nuestra Misión</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Educar a niños/as y jóvenes de la sociedad magallánica a través
                de la construcción de conocimiento científico-humanista y de
                valores universales: ambientalistas, de solidaridad, respeto y
                honestidad, de manera de formar personas íntegras que aporten al
                desarrollo de la sociedad, con capacidad para enfrentar los
                desafíos del mundo actual.
              </p>
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Nos enfocamos en la formación integral, privilegiando la
                  calidad y el equilibrio entre la formación valórica y el
                  desarrollo intelectual.
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col gap-8">
            {/* Imagen */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
              <Image
                alt="Liceo Experimental Umag"
                className="object-cover rounded-xl shadow-lg w-full h-[300px]"
                src="https://liceoexperimental.cl/assets/logo-CQ2zdpGO.png"
              />
            </div>

            {/* Visión */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <EyeIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className={title({ size: "sm" })}>Nuestra Visión</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                El Liceo Experimental UMAG espera: &ldquo;Llegar a ser en la
                Región de Magallanes la institución educativa de excelencia,
                formando niños/as y jóvenes a través de una educación humana y
                académica, para que éstos al alcanzar su madurez, sean un real
                aporte a la sociedad chilena&rdquo;.
              </p>
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Aspiramos a la excelencia académica y al desarrollo integral
                  de nuestros estudiantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
