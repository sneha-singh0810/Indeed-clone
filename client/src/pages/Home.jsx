import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { routePath } from '../routes/route';

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 'calc(100vh - 64px)', 
    padding: '0 80px',
    boxSizing: 'border-box',

    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        padding: '40px 20px',
        textAlign: 'center',
    }
}));

const ContentBox = styled(Box)(({ theme }) => ({
    maxWidth: 600,

    '& h1': {
        fontSize: 48,
        lineHeight: 1.3,
        fontWeight: 500,
        [theme.breakpoints.down('md')]: {
            fontSize: 36,
        }
    },

    '& button': {
        marginTop: 40,
        backgroundColor: '#2557A7',
        color: '#fff',
        textTransform: 'none',
        fontSize: 16,
        fontWeight: 'bold',
        padding: '12px 28px',
        boxShadow: '0px 2px 5px rgba(0,0,0,0.2)',

        '&:hover': {
            backgroundColor: '#1e4890',
        }
    }
}));

const ImageBox = styled(Box)(({ theme }) => ({
    '& img': {
        width: '100%',
        maxWidth: 520,
        height: 'auto',
        [theme.breakpoints.down('md')]: {
            marginTop: 40,
        }
    }
}));

const Home = () => {
    const navigate = useNavigate();

    const animatedImage = "https://images.ctfassets.net/pdf29us7flmy/5r34jiS1YfJuoRzqp3XH6y/6fba6547e16cd0ad08ae28dad306015d/Screen_Shot_2023-01-11_at_9.21.31_AM.png?w=720&q=100&fm=avif";

    return (
        <>
            <Header />
            <Container>
                <ContentBox>
                    <Typography variant="h1">
                        Let's make your next<br />great hire. Fast.
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => navigate(routePath.create)}
                    >
                        Post a job
                    </Button>
                </ContentBox>

                <ImageBox>
                    <img src={animatedImage} alt="home" />
                </ImageBox>
            </Container>
        </>
    );
};

export default Home;
