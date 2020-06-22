import Link from "next/link";
import { siteMeta } from "../blog.config";

const Title = () => (
  <>
    <Link href="/">
      <a rel="me">
        <img className="logo" src="/static/logo.png" alt="" />
      </a>
    </Link>
    <style jsx>{`
      .logo {
        width: 200px;
      }
    `}</style>
  </>
);

export default Title;
