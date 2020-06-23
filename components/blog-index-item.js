import Link from "next/link";
import PublishedAt from "./utils/published-at";

const Post = ({ title, summary, date, path, image }) => (
  <article>
    <div className="post-grid">
      <img className="post-image" src={image} alt={title} />
      <div>
        <header>
          <h2>
            <Link href={path}>
              <a>{title}</a>
            </Link>
          </h2>

          <PublishedAt link={path} date={date} />
        </header>
        <div className="post-summary">{summary}</div>
      </div>
    </div>
    <style jsx>{`
      article {
        margin-bottom: 2em;
      }

      .post-grid {
        display: grid;
        grid-template-columns: 200px 1fr;
        grid-gap: 30px;
        align-items: center;
        overflow: hidden;
      }

      .post-image {
        width: 100%;
      }

      a {
        text-decoration: none;
      }

      .post-summary {
        margin-top: 1em;
      }
    `}</style>
  </article>
);

export default Post;
