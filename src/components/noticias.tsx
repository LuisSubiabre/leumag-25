import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Image,
  Divider,
} from "@heroui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeartFilledIcon } from "./icons";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Noticias = () => {
  const navigate = useNavigate();

  interface Noticia {
    title: string;
    content: string;
    image: string;
    slug: string;
    fecha?: string;
  }

  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [noticiasMore, setNoticiasMore] = useState<Noticia[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const res = await fetch("/noticias/n25.json");
        const data = await res.json();
        setNoticias(data.slice(0, 2));
        setNoticiasMore(data.slice(2, 6));
      } catch (error) {
        console.error("Error cargando noticias:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="px-6 py-12 space-y-12 max-w-7xl mx-auto">
      {/* Sección de noticias principales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {noticias.map((noticia, index) => (
          <div
            key={index}
            className="transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
          >
            <Card
              isFooterBlurred
              className="w-full h-[340px] col-span-12 sm:col-span-7 overflow-hidden group relative"
            >
              <CardHeader className="absolute z-20 top-0 flex-col items-start p-6 w-full bg-gradient-to-b from-black/90 via-black/60 to-transparent h-[180px]">
                <p className="text-sm text-white/90 uppercase font-bold tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {noticia.fecha}
                </p>
                <h4 className="text-white font-bold text-2xl leading-tight group-hover:text-purple-200 transition-colors duration-300">
                  {noticia.title}
                </h4>
              </CardHeader>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 z-10 group-hover:opacity-75 transition-opacity duration-300" />
              <Image
                alt={noticia.title}
                className="z-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                src={noticia.image}
              />
              <CardFooter className="absolute bg-black/60 bottom-0 z-20 border-t-1 border-white/20 backdrop-blur-md">
                <div className="flex flex-grow gap-3 items-center">
                  <div className="flex flex-col">
                    <p className="text-white/90 text-sm line-clamp-2">
                      {noticia.content.substring(0, 40)}...
                    </p>
                  </div>
                </div>
                <Button
                  radius="full"
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-purple-500/50 hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  onPress={() => navigate(`/noticia/${noticia.slug}`)}
                >
                  Leer Noticia
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>

      <Divider className="w-full max-w-full opacity-30" />

      {/* Sección de noticias secundarias */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {noticiasMore.map((noticia, index) => (
          <Link to={`/noticia/${noticia.slug}`}>
            <div
              key={index}
              className="transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
            >
              <Card
                className="h-[280px] overflow-hidden group relative cursor-pointer"
                onPress={() => navigate(`/noticia/${noticia.slug}`)}
              >
                <CardHeader className="absolute z-20 top-0 flex-col !items-start p-5 w-full bg-gradient-to-b from-black/90 via-black/60 to-transparent h-[140px]">
                  <p className="text-xs text-white/90 uppercase font-bold tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {noticia.fecha}
                  </p>
                  <h4 className="text-white font-bold text-lg leading-tight group-hover:text-purple-200 transition-colors duration-300">
                    {noticia.title}
                  </h4>
                </CardHeader>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 z-10 group-hover:opacity-75 transition-opacity duration-300" />
                <Image
                  isBlurred
                  height={280}
                  width={280}
                  alt={noticia.title}
                  className="z-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  src={noticia.image}
                />
              </Card>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-end">
        <Button
          color="primary"
          variant="ghost"
          onPress={() => navigate("/noticias")}
          startContent={<ArrowRightIcon className="w-4 h-4" />}
        >
          Ver más Noticias
        </Button>
      </div>
    </div>
  );
};

export default Noticias;
