export default function NoticiaNotFound() {
  return (
    <div className="pt-32 pb-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Notícia não encontrada</h1>
      <p className="text-gray-600 mb-8">
        A notícia que você procura não existe ou foi removida.
      </p>
      <a
        href="/noticias"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Ver todas as notícias
      </a>
    </div>
  );
}
