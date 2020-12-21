import Head from 'next/head';
import List from 'components/List';
import ListItem from 'components/ListItem';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.5)),
    url(https://source.unsplash.com/user/connorminielly/likes/1600x900);
  background-size: cover;
`;

const Main = styled.main`
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ConnorSpan = styled.span`
  font-family: 'Zilla Slab Highlight', serif;
`;

const Title = styled.h1`
  color: white;
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`;
export default function Home() {
  return (
    <Container>
      <Head>
        <title>Connor Minielly</title>
        <link rel="icon" href="/icon.png" />
        <script data-ad-client="ca-pub-3849203916954418" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>

      <Main>
        <Title>
          <ConnorSpan>Connor</ConnorSpan> Minielly
        </Title>
        <List>
          <ListItem href="https://github.com/ConnorMinielly">github →</ListItem>
          <ListItem href="https://www.linkedin.com/in/connor-minielly/">
            linkedIn →
          </ListItem>
          <ListItem href="https://www.youtube.com/watch?v=Xd2CNn0Xw-o">
            Animation Fundamentals Talk →
          </ListItem>
        </List>
      </Main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Zilla+Slab+Highlight:wght@400;700&family=Zilla+Slab:wght@400;700&display=swap');
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Zilla Slab', 'Zilla Slab Highlight', -apple-system,
            BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
            Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Container>
  );
}
