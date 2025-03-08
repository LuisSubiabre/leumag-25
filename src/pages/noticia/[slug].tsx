import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card, CardHeader, Image } from "@nextui-org/react";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetch("/noticias/n25.json")
        .then((res) => res.json())
        .then((data) => {
          const noticiaEncontrada = data.find((n: Noticia) => n.slug === slug);
          setNoticia(noticiaEncontrada || null);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error cargando la noticia:", error);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!noticia) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Noticia no encontrada</h1>
        <Button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white"
        >
          Volver al inicio
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Button
          onClick={() => navigate("/")}
          className="mb-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white"
          size="sm"
        >
          ← Volver
        </Button>

        <Card className="w-full overflow-hidden bg-white shadow-xl">
          <div className="relative h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-blue-500/40 z-10" />
            <Image
              alt={noticia.title}
              className="z-0 w-full h-full object-cover"
              src={noticia.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-20" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
              <p className="text-sm text-white/80 uppercase font-bold mb-2">
                {noticia.fecha}
              </p>
              <h1 className="text-4xl font-bold text-white">{noticia.title}</h1>
            </div>
          </div>

          <div className="p-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {noticia.content}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NoticiaDetalle;
