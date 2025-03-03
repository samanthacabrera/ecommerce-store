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
    <div className="max-w-2xl mx-auto p-12">
        <h2 className="text-4xl text-center italic mb-24">
            Our Monthly Column
        </h2>
      {articles.length > 0 ? (
        <div className="flex flex-col space-y-12">
          {articles.map((article) => (
            <a
              key={article.guid}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white bg-opacity-90 text-[lightslategray] hover:scale-105 transition duration-500 ease-in-out"
            >
              <h3 className="text-lg tracking-wide">
                {article.title}
              </h3>
              <p className="text-sm opacity-60">
                {new Date(article.pubDate).toDateString()}
              </p>
            </a>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No yoga articles found.</p>
      )}
    </div>
  );
}

export default Medium;
