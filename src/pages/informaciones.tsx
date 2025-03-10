import DefaultLayout from "@/layouts/default";
import banner from "@/assets/img/footbanner.jpg";
import docRIE from "../assets/docs/RIE.pdf";
import docPISE from "../assets/docs/PISE.pdf";
import docEvaluacion from "../assets/docs/reglamento2024.pdf";
// import docConvivencia from '../assets/docs/convivencia.pdf';
import docCAA from "../assets/docs/reglamentoCAA.pdf";
import docBecas from "../assets/docs/becas.pdf";
import { Link } from "@heroui/link";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
        {/* Header con imagen de fondo */}
        <div
          className="w-full py-24 px-4 rounded-lg relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-blue-800/90 dark:from-blue-900/95 dark:to-blue-950/45" />
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Información General
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 dark:text-blue-50">
              Liceo Experimental UMAG
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Documentos Oficiales</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <Link isBlock href={docRIE} color="primary">
                Reglamento Interno Escolar
              </Link>
            </li>
            <li>
              <Link isBlock href={docPISE} color="primary">
                PISE
              </Link>
            </li>
            <li>
              <Link isBlock href={docEvaluacion} color="primary">
                Reglamento de Evaluacion
              </Link>
            </li>
            <li>
              <Link isBlock href={docCAA} color="primary">
                Reglamento Centro de Alumnos
              </Link>
            </li>
            <li>
              <Link isBlock href={docBecas} color="primary">
                Reglamento General Becas 2025r
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Reuniones de Apoderados</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reunión 1</li>
            <li>Reunión 2</li>
            <li>Reunión 3</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Comunicados</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Comunicado 1</li>
            <li>Comunicado 2</li>
            <li>Comunicado 3</li>
          </ul>
        </div>
      </section>
    </DefaultLayout>
  );
}
