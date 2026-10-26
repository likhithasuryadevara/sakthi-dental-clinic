import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-content">
        <span className="eyebrow">404 — PAGE NOT FOUND</span>

        <div className="not-found-number">404</div>

        <h1>Oops! Lost your way?</h1>

        <p>
          The page you're looking for doesn't exist,
          may have been moved, or the link might be incorrect.
        </p>

        <Link to="/" className="primary-button">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;