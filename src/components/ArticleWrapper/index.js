import read_date from '../../functions/read_date';
import styles from './styles.module.css';

function ArticleWrapper({
	author,
	content,
	description,
	date,
	title,
	img,
	url,
}) {
	return (
		<section className={styles.article}>
			<a href={url} target="_blank" rel="noreferrer">
				<div className={styles.date}>
					<span>{read_date(date).split(' ').slice(1, 3).join(' ')}</span>
					<span>{date.slice(11, 16).split(':').reverse().join(':')} pm</span>
				</div>
				<h1 className={styles.title}>{title}</h1>
				<div
					style={{
						backgroundImage: `url(${img})`,
					}}
					alt="#"
					className={styles.img}
				></div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
					incidunt vitae quod, at eius voluptatem ipsum eum sequi similique
					reprehenderit! Accusamus autem eos incidunt quam! Non officiis at
					labore quaerat? Lorem ipsum dolor sit amet consectetur
				</p>
				<p className={styles.description}>{description}</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
					incidunt vitae quod, at eius voluptatem ipsum eum sequi similique
					reprehenderit! Accusamus autem eos incidunt quam! Non officiis at
					labore quaerat? Lorem ipsum dolor sit amet consectetur
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
					incidunt vitae quod, at eius voluptatem ipsum eum sequi similique
					reprehenderit! Accusamus autem eos incidunt quam! Non officiis at
					labore quaerat? Lorem ipsum dolor sit amet consectetur
				</p>
				<h5>Author: {author}</h5>
			</a>
		</section>
	);
}

export default ArticleWrapper;
