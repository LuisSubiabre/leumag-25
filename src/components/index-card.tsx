import { Card } from "@heroui/react";

export default function IndexCard() {
  return (
    <section className="flex flex-col gap-8">
      {/* Sección principal - Tarjetas grandes */}
      {/* <div className="grid grigid-cols-1 md:grid-cols-2 gap-6">
       <Card
          className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
          isPressable
        >
          <div className="flex p-8 items-center gap-6">
            <div className="flex justify-center p-4 rounded-full items-center bg-secondary-100/80 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="32"
                role="presentation"
                viewBox="0 0 24 24"
                width="32"
                className="transition-transform duration-300 group-hover:rotate-12"
              >
                <path
                  d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 14.5C4.33 16.18 4.33 19.82 7 21.5C10.05 23.4 15.95 23.4 19 21.5C21.67 19.82 21.67 16.18 19 14.5C15.96 12.61 10.05 12.61 7 14.5Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold group-hover:text-blue-500 transition-colors duration-300">
              Centro de Alumnos
            </h2>
          </div>
        </Card>

        <Card
          className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
          isPressable
        >
          <div className="flex p-8 items-center gap-6">
            <div className="flex justify-center p-4 rounded-full items-center bg-secondary-100/80 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="32"
                role="presentation"
                viewBox="0 0 24 24"
                width="32"
                className="transition-transform duration-300 group-hover:rotate-12"
              >
                <path
                  d="M18.0002 7.16C17.9402 7.15 17.8702 7.15 17.8102 7.16C16.4302 7.11 15.3302 5.98 15.3302 4.58C15.3302 3.15 16.4802 2 17.9102 2C19.3402 2 20.4902 3.16 20.4902 4.58C20.4802 5.98 19.3802 7.11 18.0002 7.16Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M16.9698 14.44C18.3398 14.67 19.8498 14.43 20.9098 13.72C22.3198 12.78 22.3198 11.24 20.9098 10.3C19.8398 9.59004 18.3098 9.35003 16.9398 9.59003"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 14.44C5.63 14.67 4.12 14.43 3.06 13.72C1.65 12.78 1.65 11.24 3.06 10.3C4.13 9.59004 5.66 9.35003 7.03 9.59003"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M12.0002 14.63C11.9402 14.62 11.8702 14.62 11.8102 14.63C10.4302 14.58 9.33018 13.45 9.33018 12.05C9.33018 10.62 10.4802 9.47003 11.9102 9.47003C13.3402 9.47003 14.4902 10.63 14.4902 12.05C14.4802 13.45 13.3802 14.59 12.0002 14.63Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold group-hover:text-blue-500 transition-colors duration-300">
              Centro de Padres
            </h2>
          </div>
        </Card>
      </div> */}

      {/* Sección secundaria - Tarjetas más pequeñas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
          isPressable
        >
          <div className="flex p-5 items-center gap-4">
            <div className="flex justify-center p-3 rounded-full items-center bg-secondary-100/80 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="24"
                role="presentation"
                viewBox="0 0 24 24"
                width="24"
                className="transition-transform duration-300 group-hover:rotate-12"
              >
                <path
                  d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <h2 className="text-base font-semibold group-hover:text-blue-500 transition-colors duration-300">
              Lista de Materiales
            </h2>
          </div>
        </Card>

        <Card
          className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
          isPressable
        >
          <div className="flex p-5 items-center gap-4">
            <div className="flex justify-center p-3 rounded-full items-center bg-secondary-100/80 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg
                aria-hidden="true"
                focusable="false"
                height="24"
                role="presentation"
                viewBox="0 0 24 24"
                width="24"
                className="transition-transform duration-300 group-hover:rotate-12"
              >
                <path
                  d="M21.25 12C21.25 14.4533 20.2754 16.806 18.5407 18.5407C16.806 20.2754 14.4533 21.25 12 21.25V22.75C17.937 22.75 22.75 17.937 22.75 12H21.25ZM12 21.25C9.54675 21.25 7.19397 20.2754 5.45926 18.5407C3.72455 16.806 2.75 14.4533 2.75 12H1.25C1.25 17.937 6.063 22.75 12 22.75V21.25ZM2.75 12C2.75 9.54675 3.72455 7.19397 5.45926 5.45926C7.19397 3.72455 9.54675 2.75 12 2.75V1.25C6.063 1.25 1.25 6.063 1.25 12H2.75Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-base font-semibold group-hover:text-blue-500 transition-colors duration-300">
              Horarios 2025
            </h2>
          </div>
        </Card>

        <Card
          className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
          isPressable
        >
          <div className="flex p-5 items-center gap-4">
            <div className="flex justify-center p-3 rounded-full items-center bg-secondary-100/80 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="24"
                role="presentation"
                viewBox="0 0 24 24"
                width="24"
                className="transition-transform duration-300 group-hover:rotate-12"
              >
                <path
                  d="M10 16.95H6.21c-3.37 0-4.21-.84-4.21-4.21v-6c0-3.37.84-4.21 4.21-4.21h10.53c3.37 0 4.21.84 4.21 4.21M10 21.47v-4.52M2 12.95h8M6.74 21.47H10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M22 12.8v5.71c0 2.37-.59 2.96-2.96 2.96h-3.55c-2.37 0-2.96-.59-2.96-2.96V12.8c0-2.37.59-2.96 2.96-2.96h3.55c2.37 0 2.96.59 2.96 2.96Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <h2 className="text-base font-semibold group-hover:text-blue-500 transition-colors duration-300">
              Calendario Reuniones
            </h2>
          </div>
        </Card>
      </div>
    </section>
  );
}
