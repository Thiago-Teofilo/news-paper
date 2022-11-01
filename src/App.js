import { useEffect, useState } from 'react';
import api from './api';
import styles from './App.module.css';
import ArticleWrapper from './components/ArticleWrapper';
import read_date from './functions/read_date';

const API_KEY = '0f4f089e95c64ad7824443b7185a5c4b';
// OBS: API utilizada é a newsapi - https://newsapi.org/

function App() {
	const [articles, setArticles] = useState([]);
	const [total_results, setTotalResults] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		async function getArticles() {
			const { data } = await api.get(
				`everything?q=${search}&sortBy=popularity&apiKey=${API_KEY}`
			);

			setArticles(data.articles);
			setTotalResults(data.totalResults);
		}

		if (search.length === 0) {
			setArticles([]);
		}

		if (search.length > 0) {
			getArticles();
		}
	}, [search]);

	if (search.length === 0) {
		setSearch('*');
	}

	return (
		<div id="App">
			<header>
				<div>
					<input
						type="search"
						placeholder="Search"
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
			</header>
			<main className={styles.news_paper}>
				<h1 className={styles.main_title}>The Code Times</h1>

				{articles.length > 0 && (
					<div className={styles.date_journal}>
						<ul>
							<li>{total_results} Results</li>
							<li>{read_date(articles[0].publishedAt)}</li>
							<li>Thiago Edition</li>
						</ul>
					</div>
				)}

				<section id={styles.articles}>
					{articles.length > 0 && search.length > 0 ? (
						articles.map((article) => (
							<ArticleWrapper
								key={article.url}
								author={article.author}
								content={article.content}
								description={article.description}
								date={article.publishedAt}
								title={article.title}
								img={article.urlToImage}
								url={article.url}
							/>
						))
					) : (
						<>
							<h3 className={styles.mensage}>Sem Resultados</h3>
						</>
					)}
				</section>
			</main>
		</div>
	);
}

export default App;
