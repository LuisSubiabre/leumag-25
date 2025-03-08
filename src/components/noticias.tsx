import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Image,
  Divider,
} from "@heroui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    fetch("/noticias/n25.json")
      .then((res) => res.json())
      .then((data) => setNoticias(data.slice(0, 2)))
      .catch((error) => console.error("Error cargando noticias:", error));

    fetch("/noticias/n25.json")
      .then((res) => res.json())
      .then((data) => setNoticiasMore(data.slice(2, 6)))
      .catch((error) => console.error("Error cargando noticias:", error));
  }, []);

  return (
    <div className="px-4 py-8 space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {noticias.map((noticia, index) => (
          <div
            key={index}
            className="transform transition-transform hover:scale-102"
          >
            <Card
              isFooterBlurred
              className="w-full h-[320px] col-span-12 sm:col-span-7 overflow-hidden group"
            >
              <CardHeader className="absolute z-20 top-0 flex-col items-start p-5 w-full bg-gradient-to-b from-black/90 via-black/60 to-transparent h-[150px]">
                <p className="text-tiny text-white/80 uppercase font-bold">
                  {noticia.fecha}
                </p>
                <h4 className="text-white font-bold text-2xl mt-2 group-hover:text-purple-200 transition-colors">
                  {noticia.title}
                </h4>
              </CardHeader>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-blue-500/40 z-10" />
              <Image
                alt={noticia.title}
                className="z-0 w-full h-full object-cover transform transition-transform group-hover:scale-110"
                src={noticia.image}
              />
              <CardFooter className="absolute bg-black/50 bottom-0 z-20 border-t-1 border-white/20 backdrop-blur-md">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <p className="text-white/90 text-sm">
                      {noticia.content.substring(0, 50)}...
                    </p>
                  </div>
                </div>
                <Button
                  radius="full"
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600"
                  onClick={() => navigate(`/noticia/${noticia.slug}`)}
                >
                  Leer Noticia
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>

      <Divider className="w-full max-w-full opacity-50" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {noticiasMore.map((noticia, index) => (
          <div
            key={index}
            className="transform transition-transform hover:scale-102"
          >
            <Card
              className="col-span-12 sm:col-span-4 h-[300px] overflow-hidden group cursor-pointer"
              onClick={() => navigate(`/noticia/${noticia.slug}`)}
            >
              <CardHeader className="absolute z-20 top-0 flex-col !items-start p-4 w-full bg-gradient-to-b from-black/90 via-black/60 to-transparent h-[120px]">
                <p className="text-tiny text-white/80 uppercase font-bold">
                  {noticia.fecha}
                </p>
                <h4 className="text-white font-bold text-lg mt-2 group-hover:text-purple-200 transition-colors">
                  {noticia.title}
                </h4>
              </CardHeader>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-blue-500/40 z-10" />
              <Image
                alt={noticia.title}
                className="z-0 w-full h-full object-cover transform transition-transform group-hover:scale-110"
                src={noticia.image}
              />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noticias;
