import "@styles/custom-footer.css";

export default function CustomFooter() {
  return (
    <footer className="custom-footer">
      <p>© 2026 Tecno.3F - Rick&Morty API Browser. All rights reserved.</p>
      <p>
        {" "}
        Developed by José A. Battaglia -{" "}
        <a
          href="mailto:battagliajose@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mailto-link"
        >
          battagliajose@gmail.com
        </a>{" "}
      </p>
    </footer>
  );
}
