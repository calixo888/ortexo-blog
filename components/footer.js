function Footer() {
  return (
    <footer>
      <small>
        Proudly built by <a href="https://www.calix.dev/" target="_blank">Calix Huang</a> with Next.js, React, and MDX! Starter source code provided by <a href="https://github.com/j0lv3r4" target="_blank">j0lv3r4</a>.
      </small>
      <style jsx>{`
        footer {
          padding: 1em 0;
        }

        p {
          margin-top: 2em;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
