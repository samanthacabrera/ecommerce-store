import { useEffect, useState } from "react";

function Medium() {
  const [articles, setArticles] = useState([]);
  const mediumRSS = `https://medium.com/feed/@samantha.n.cabrera`;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${mediumRSS}`);
        const data = await response.json();

        if (data.items) {
          const filteredArticles = data.items.filter((article) =>
            article.categories.includes("yoga")
          );
          setArticles(filteredArticles);
        }
      } catch (error) {
        console.error("Error fetching Medium articles:", error);
      }
    };

    fetchArticles();
  }, []);

return (
    <div className="flex flex-col justify-center h-full w-full px-4">
      <div className="max-w-4xl mx-auto w-full space-y-12">
        <h2 className="text-4xl italic">
          Our Monthly Column
        </h2>

        {articles.length > 0 ? (
          <div className="flex flex-col space-y-6">
            {articles.map((article) => (
              <a
                key={article.guid}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-[101%]"
              >
                <h3 className="text-xl mb-2">
                  {article.title}
                </h3>
                <p className="text-white/80 text-sm opacity-80">
                  {new Date(article.pubDate).toDateString()}
                </p>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-center text-white/70">No yoga articles found.</p>
        )}

      <section className="bg-white/5 py-20 text-center px-6">
        <h2 className="text-3xl font-light mb-6">Stay Updated</h2>
        <p className="text-lg text-gray-300 mb-6">
          Join our newsletter for exclusive offers and new arrivals.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 text-black rounded-lg focus:outline-none"
          />
          <button
            type="submit"
            className=""
          >
            Subscribe
          </button>
        </form>
      </section>
      </div>
    </div>
  );
}

export default Medium;
