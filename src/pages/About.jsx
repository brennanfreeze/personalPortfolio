import { Box, Container } from '@mui/system';
import TopMenu from '../components/TopMenu';
import LinksAndCopyright from '../components/LinksAndCopyright';

function About() {
  return (
    <>
      <TopMenu />
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          width: '50%',
          height: '80vh',
          backgroundColor: 'darkblue',
          marginBottom: '10vh',
          marginTop: '10vh',
        }}
      >
        <Box>Hello!</Box>
      </Container>
      <LinksAndCopyright />
    </>
  );
}

export default About;
