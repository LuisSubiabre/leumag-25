import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

const noticias = [
  {
    id: 1,
    titulo: "Inicio del Año Escolar 2024",
    fecha: "2024-03-01",
    descripcion:
      "Bienvenidos a un nuevo año académico. Información importante para el regreso a clases.",
    imagen:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000",
    categoria: "Institucional",
  },
  {
    id: 2,
    titulo: "Logros Académicos Destacados",
    fecha: "2024-03-15",
    descripcion:
      "Nuestros estudiantes obtuvieron reconocimientos en olimpiadas de matemáticas y ciencias.",
    imagen:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1000",
    categoria: "Académico",
  },
  {
    id: 3,
    titulo: "Actividades Extracurriculares",
    fecha: "2024-03-20",
    descripcion:
      "Nuevos talleres y actividades disponibles para el desarrollo integral de nuestros estudiantes.",
    imagen:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000",
    categoria: "Actividades",
  },
];

export default function NoticiasPage() {
  return (
    <DefaultLayout>
      <section className="relative min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className={title()}>Noticias y Eventos</h1>
            <p className="text-default-600 mt-4">
              Mantente informado sobre las últimas novedades del Liceo
              Experimental UMAG
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {noticias.map((noticia) => (
              <Card
                key={noticia.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader className="p-0">
                  <img
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-tiny text-default-500">
                      {noticia.fecha}
                    </span>
                    <span className="text-tiny bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {noticia.categoria}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{noticia.titulo}</h2>
                  <p className="text-default-500">{noticia.descripcion}</p>
                </CardBody>
                <CardFooter>
                  <Link
                    href={`/noticias/${noticia.id}`}
                    className={buttonStyles({
                      color: "primary",
                      variant: "flat",
                      size: "sm",
                    })}
                  >
                    Leer más
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="#"
              className={buttonStyles({
                color: "primary",
                variant: "shadow",
                size: "lg",
              })}
            >
              Ver todas las noticias
            </Link>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
