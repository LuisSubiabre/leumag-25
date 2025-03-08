import { Link } from "@heroui/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-default-100 dark:bg-default-50 mt-16">
      {/* Sección principal del footer */}
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Menú Principal */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold mb-6 text-primary">Principal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  color="foreground"
                  className="hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-default-400 group-hover:bg-primary transition-colors duration-200"></span>
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  color="foreground"
                  className="hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-default-400 group-hover:bg-primary transition-colors duration-200"></span>
                  Noticias
                </Link>
              </li>
              <li>
                <Link
                  href="/estamentos"
                  color="foreground"
                  className="hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-default-400 group-hover:bg-primary transition-colors duration-200"></span>
                  Estamentos
                </Link>
              </li>
              <li>
                <Link
                  href="/comunicados"
                  color="foreground"
                  className="hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-default-400 group-hover:bg-primary transition-colors duration-200"></span>
                  Comunicados
                </Link>
              </li>
            </ul>
          </div>

          {/* Accesos */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold mb-6 text-primary">Accesos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/funcionarios"
                  color="foreground"
                  className="hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-default-400 group-hover:bg-primary transition-colors duration-200"></span>
                  Funcionarios
                </Link>
              </li>
              <li>
                <Link
                  href="/estudiantes"
                  color="foreground"
                  className="hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-default-400 group-hover:bg-primary transition-colors duration-200"></span>
                  Estudiantes
                </Link>
              </li>
              <li>
                <Link
                  href="https://correo.umag.cl"
                  isExternal
                  color="foreground"
                  className="hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-default-400 group-hover:bg-primary transition-colors duration-200"></span>
                  Correo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 opacity-75"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Ubicaciones */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold mb-6 text-primary">Ubicaciones</h3>
            <div className="space-y-6">
              <div className="bg-default-50 dark:bg-default-100 p-4 rounded-lg transition-transform duration-200 hover:scale-[1.02]">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Establecimiento
                </h4>
                <p className="text-default-600 mb-1">Angamos 17</p>
                <Link
                  href="mailto:leumag@liceoexperimental.cl"
                  color="foreground"
                  className="hover:text-primary transition-colors duration-200 flex items-center gap-2 mb-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                  leumag@liceoexperimental.cl
                </Link>
                <p className="text-default-600 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  61 2454270
                </p>
              </div>
              <div className="bg-default-50 dark:bg-default-100 p-4 rounded-lg transition-transform duration-200 hover:scale-[1.02]">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Administración
                </h4>
                <p className="text-default-600 mb-1">Angamos 131</p>
                <Link
                  href="mailto:administracion@liceoexperimental.cl"
                  color="foreground"
                  className="hover:text-primary transition-colors duration-200 flex items-center gap-2 mb-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                  administracion@liceoexperimental.cl
                </Link>
                <p className="text-default-600 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  61 2240075
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Redes Sociales y Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-default-200">
          <p className="text-default-600 text-sm mb-4 md:mb-0 hover:text-primary transition-colors duration-200">
            Desarrollado por Liceo Experimental Umag
          </p>
          <div className="flex space-x-6">
            <Link
              href="https://facebook.com"
              isExternal
              className="text-default-600 hover:text-primary transition-colors duration-200 transform hover:scale-110"
              aria-label="Visita nuestro Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </Link>
            <Link
              href="https://youtube.com"
              isExternal
              className="text-default-600 hover:text-primary transition-colors duration-200 transform hover:scale-110"
              aria-label="Visita nuestro canal de YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M21.582 7.15c-.239-1.007-.982-1.802-1.912-2.053C18.044 4.75 12 4.75 12 4.75s-6.044 0-7.67.347c-.93.251-1.673 1.046-1.912 2.053C2.071 8.92 2.071 12 2.071 12s0 3.08.347 4.85c.239 1.007.982 1.802 1.912 2.053C5.956 19.25 12 19.25 12 19.25s6.044 0 7.67-.347c.93-.251 1.673-1.046 1.912-2.053.347-1.77.347-4.85.347-4.85s0-3.08-.347-4.85z" />
                <path fill="white" d="M9.75 15.25l5.5-3.25-5.5-3.25v6.5z" />
              </svg>
            </Link>
            <Link
              href="https://instagram.com"
              isExternal
              className="text-default-600 hover:text-primary transition-colors duration-200 transform hover:scale-110"
              aria-label="Visita nuestro Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
