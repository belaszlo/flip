import { useState, useEffect } from 'react';
import NewArticleForm from './NewArticleForm';
import fetchGetArticles from '../../fetchGetArticles';
import './News.scss';

export default function News() {
  const [showForm, setShowForm] = useState(false);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  async function getArticles() {
    try {
      setArticles(await fetchGetArticles());
    } catch (err) {
      setError(
        'Valami hiba történt! A hiba elhárításáig szíves türelmét kérjük! Kérjük, látogasson vissza később!',
      );
    }
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="container admin-article">
      {error ? (
        <div>{error}</div>) : articles.length > 0 ? (
          <div className="container article-list">
            <h1 className="text-center">Hírek</h1>
            <div className="container row row-cols-1 gy-1">
              {articles.map((article) => (
                <div key={article.id}>
                  <div className="card h-100 admin-cards text-center bg-light">
                    <div className="card-body">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text">
                        {article.content}
                      </p>
                    </div>
                    <div className="card-body">
                      <button type="submit" className="btn btn-primary text-light mx-2 my-4">Szerkesztés/Törlés</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-2">
              <button
                onClick={showFormHandler}
                type="submit"
                className="btn btn-secondary text-light"
              >
                Új hír hozzáadása
              </button>
            </div>
          </div>
      ) : (
        <div className="mt-2">
          <p>Nincsenek híreink</p>
          <button
            onClick={showFormHandler}
            type="submit"
            className="btn btn-secondary text-light"
          >
            Új hír hozzáadása
          </button>
        </div>
      )}
      {showForm && (
        <NewArticleForm
          hideFormHandler={hideFormHandler}
          showForm={showForm}
          setShowForm={setShowForm}
          getArticles={getArticles}
        />
      )}
    </div>
  );
}
