import Link from "next/link";

const Nav = () => (
  <nav>
    <img style={{ "width": "150px" }} src="/static/book_lover.svg" alt="" />
    <style jsx>{`
      nav {
        display: flex;
      }

      a:not(:last-child) {
        margin-right: 1em;
      }
    `}</style>
  </nav>
);

export default Nav;
