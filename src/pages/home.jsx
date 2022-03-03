import picture from '../pic.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import picture1 from '../innovation.png';
import picture2 from '../safety.png';
import picture3 from '../network.png';

function Home() {
    return (
      <main style={{ padding: "0px" }}>
        <div>
          <img src={picture} width="100%" height="50%" />
        </div>
        <div className="container">
          <div className="row">
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  img src ={picture1} width="100%" height="50%" 
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hasslefree Shipment
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We provide hasslefree shipping and seamless logistics
                    solutions for all your shipping needs, whether big or small,
                    to all parts of India.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              sx={{ maxWidth: 345 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  img src ={picture2} width="100%" height="50%"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Leading Edge Technology{" "}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our adoption of technology, proven expertise and networks
                    brings us to the forefront in bringing automation to tailor
                    our solutions for your logistics needs.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              sx={{ maxWidth: 345 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  img src ={picture3} width="100%" height="50%"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Safety & Reliability
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We drive reliability and safety in logistics through
                    effective implementation of security tools and technologies
                    to drive efficiency and operational excellence.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </main>
    );
}

export default Home;
