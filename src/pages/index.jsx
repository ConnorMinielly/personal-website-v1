import Head from 'next/head';
import List from 'components/List';
import ListItem from 'components/ListItem';
import styled from 'styled-components';

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`;
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Connor Minielly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>Connor Minielly's site is coming soon!</Title>
        <List>
          <ListItem href="https://github.com/ConnorMinielly">
            👨🏽‍💻 github 👩🏻‍💻
          </ListItem>
          <ListItem href="https://www.linkedin.com/in/connor-minielly/">
            👨‍💼 linkedIn 👩‍💼
          </ListItem>
        </List>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
