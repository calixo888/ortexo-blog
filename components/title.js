import Link from "next/link";
import { siteMeta } from "../blog.config";

const Title = ({ path }) => (
  <>
    {path === "/" ? (
      <h1>
        <a href={siteMeta.siteUrl}>
          <img style={{ width: "200px" }} src="/static/logo.png" alt="" />
        </a>
      </h1>
    ) : (
      <p>
        <Link href="/">
          <a rel="me">
            <img style={{ width: "200px" }} src="/static/logo.png" alt="" />
          </a>
        </Link>
      </p>
    )}
    <style jsx>{`
      h1 {
        margin-top: 0;
      }

      a {
        color: #333;
        text-decoration: none;
      }

      p {
        font-size: 1.3em;
        font-weight: bold;
      }
    `}</style>
  </>
);

export default Title;
