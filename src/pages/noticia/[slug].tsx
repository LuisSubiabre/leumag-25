import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Image, Button, Spinner, Divider } from "@heroui/react";
import DefaultLayout from "@/layouts/default";
import { ArrowLeftIcon, ShareIcon } from "@heroicons/react/24/outline";
import { title } from "@/components/primitives";

interface Noticia {
  title: string;
  content: string;
  image: string;
  slug: string;
  fecha?: string;
}

const NoticiaDetalle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNoticia = async () => {
      try {
        const res = await fetch("/noticias/n25.json");
        const noticias = await res.json();
        const noticiaEncontrada = noticias.find(
          (n: Noticia) => n.slug === slug
        );

        if (noticiaEncontrada) {
          setNoticia(noticiaEncontrada);
        } else {
          setError("Noticia no encontrada");
        }
      } catch (error) {
        setError("Error al cargar la noticia");
        console.error("Error cargando la noticia:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNoticia();
  }, [slug]);

  if (isLoading) {
    return (
      <DefaultLayout>
        <div className="flex justify-center items-center min-h-[400px]">
          <Spinner size="lg" className="text-blue-600" />
        </div>
      </DefaultLayout>
    );
  }

  if (error || !noticia) {
    return (
      <DefaultLayout>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Card className="p-6 text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20">
            <h2 className="text-2xl font-bold text-red-500 mb-4">{error}</h2>
            <Button
              color="primary"
              variant="ghost"
              onClick={() => navigate("/noticias")}
              startContent={<ArrowLeftIcon className="w-4 h-4" />}
            >
              Volver a Noticias
            </Button>
          </Card>
        </div>
      </DefaultLayout>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: noticia.title,
          text: noticia.content.substring(0, 100) + "...",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error compartiendo:", error);
      }
    }
  };

  return (
    <DefaultLayout>
      <section
        className="absolute top-16 left-0 w-full min-h-[600px] flex flex-col items-center justify-center gap-4 py-8 md:py-10"
        style={{
          backgroundImage: `url(${noticia.image})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />{" "}
        {/* Overlay oscuro para mejorar legibilidad */}
      </section>

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-2 mt-[360px]">
        {/* Título de la sección */}
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Noticias</h1>
        </div>

        <div className="relative w-full max-w-5xl mx-auto px-4">
          {/* Tarjeta principal */}
          <Card className="w-full overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20">
            {/* Contenido */}
            <div className="p-6">
              {/* Título de la noticia */}
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {noticia.title}
              </h2>

              {/* Barra de acciones */}
              <div className="flex justify-between items-center mb-6">
                <Button
                  color="primary"
                  variant="ghost"
                  onClick={() => navigate("/noticias")}
                  startContent={<ArrowLeftIcon className="w-4 h-4" />}
                >
                  Volver a Noticias
                </Button>
                <Button
                  color="primary"
                  variant="ghost"
                  onClick={handleShare}
                  isIconOnly
                  className="ml-2"
                >
                  <ShareIcon className="w-5 h-5" />
                </Button>
              </div>

              <Divider className="my-6" />
              <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400">
                <Image alt={noticia.title} src={noticia.image} width={480} />
              </div>
              {/* Contenido de la noticia */}
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: noticia.content }}
                />
              </div>

              {/* Pie de página */}
              <Divider className="my-6" />
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Liceo Experimental UMAG
                </p>
                <Button
                  color="primary"
                  variant="ghost"
                  onClick={handleShare}
                  startContent={<ShareIcon className="w-4 h-4" />}
                >
                  Compartir
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default NoticiaDetalle;
