import { NewsService } from "@/services/newsService";
import Image from "next/image";
import { notFound } from "next/navigation";
import { formatDate } from "@/config/locale";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default async function NewsDetail({
  params,
}: {
  params: { slug: string };
}) {
  let noticia;

  try {
    noticia = await NewsService.getNewsBySlug(params.slug);
  } catch (error) {
    notFound(); // Redireciona para 404 se não encontrar
  }

  const formattedDate = formatDate(new Date(noticia.published_at));

  return (
    <article className="pt-24 sm:pt-28 md:pt-32 pb-16 px-4 sm:px-6 md:px-8 lg:px-16 max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {noticia.title}
        </h1>

        {noticia.subtitle && (
          <p className="text-lg sm:text-xl text-gray-600 mb-4">
            {noticia.subtitle}
          </p>
        )}

        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
          <span>{formattedDate}</span>
          {noticia.author && <span>Por {noticia.author}</span>}
        </div>

        {/* Tags */}
        {noticia.tags && noticia.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {noticia.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Galeria de Imagens */}
      {noticia.images && noticia.images.length > 0 && (
        <div className="mb-8">
          {noticia.images.length === 1 ? (
            // Imagem única em destaque
            <div className="relative w-full h-64 sm:h-96 rounded-lg overflow-hidden">
              <Image
                src={noticia.images[0]}
                alt={noticia.title}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            // Grid de múltiplas imagens
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {noticia.images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full h-48 sm:h-64 rounded-lg overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${noticia.title} - Imagem ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Conteúdo em Markdown */}
      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-lg">
        <ReactMarkdown>{noticia.content}</ReactMarkdown>
      </div>

      {/* Voltar */}
      <div className="mt-12">
        <Link
          href="/news"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          ← Voltar para notícias
        </Link>
      </div>
    </article>
  );
}

// Gerar metadata dinâmica (SEO)
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const noticia = await NewsService.getNewsBySlug(params.slug);

  return {
    title: noticia.title,
    description: noticia.summary,
    openGraph: {
      title: noticia.title,
      description: noticia.summary,
      images: noticia.images || [],
    },
  };
}
