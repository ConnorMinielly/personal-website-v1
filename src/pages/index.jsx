import Link from "next/link";
import Image from "next/image";
import List from "components/List";
import ListItem from "components/ListItem";
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
          <List>
            <ListItem href="https://github.com/ConnorMinielly">
              github →
            </ListItem>
            <ListItem href="https://www.linkedin.com/in/connor-minielly/">
              linkedIn →
            </ListItem>
            <ListItem href="https://www.youtube.com/watch?v=Xd2CNn0Xw-o">
              animation fundamentals talk →
            </ListItem>
            <Link href="/books">
              <ListItem href="/books">book excerpts →</ListItem>
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
