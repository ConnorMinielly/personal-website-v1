import Link from "next/link";
import { title, altTitle } from "../pages/index.module.scss";
import { bookPageHeader, darkTitle, backLink } from "./BooksHeader.module.scss";

const BookPageHeader = () => {
  return (
    <header className={bookPageHeader}>
      <h1 className={`${title} ${darkTitle}`}>
        <span className={altTitle}>Connor</span> Minielly
      </h1>
      <Link href="/books">
        <a href="/books" className={backLink}>
          ← Back To Books
        </a>
      </Link>
    </header>
  );
};

export default BookPageHeader;
