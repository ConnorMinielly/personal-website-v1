import Link from "next/link";
import Image from "next/image";
import List from "components/List";
import ListItem from "components/ListItem";
import { explanation } from "./books.module.scss";
import {
  container,
  altTitle,
  main,
  title,
  backgroundImage,
} from "./index.module.scss";

export default function Home() {
  return (
    <div className={container}>
      <main className={main}>
        <div style={{ zIndex: 100 }}>
          <h1 className={title}>
            <span className={altTitle}>Connor</span> Minielly
          </h1>
          <p className={explanation}>
            So I needed more content on this website for google to take me
            seriously, so I added excerpts from some classic, public domain,
            books.
          </p>
          <List>
            <Link href="/books/alice">
              <ListItem href="/books/alice">alice in wonderland →</ListItem>
            </Link>
            <Link href="/books/ulysses">
              <ListItem href="/books/ulysses">ulysses →</ListItem>
            </Link>
            <Link href="/">
              <ListItem href="/">← back to home</ListItem>
            </Link>
          </List>
        </div>
        <div className={backgroundImage}>
          <Image
            src="/pinky-promise.png"
            alt="Line art of a pinky promise"
            width={1018}
            height={800}
            layout="responsive"
          />
        </div>
      </main>
    </div>
  );
}
