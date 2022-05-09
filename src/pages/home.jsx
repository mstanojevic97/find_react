import picture from '../pic.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import picture1 from '../pic1.png';
import picture2 from '../pic2.png';
import picture3 from '../pic3.png';
import picture5 from '../pic5.png';
import picture6 from '../pic6.png';
import picture7 from '../pic7.png';
import picture8 from '../pic8.png';
import picture4 from '../background.png';
import { Container, Row, Col } from 'react-grid-system';
import { IoFastFood } from "react-icons/io5";
import { MdRecycling } from "react-icons/md";
import { FaGasPump } from "react-icons/fa";
import { GoPackage } from "react-icons/go";

function Home() {
    return (
      <main style={{ padding: "0px" }}>
        <div style={{ backgroundImage: `url(${picture4})` }}>
          <div>
            <img src={picture} width="100%" height="50%" alt="lala"/>

            <div className="container">
              <div className="row" style={{display:"flex", justifyContent: "center"}}>
                <Card
                  id="card"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  sx={{ maxWidth: 425 }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      img
                      src={picture1}
                      width="100%"
                      height="50%"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Hasslefree Shipment
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        We provide hasslefree shipping and seamless logistics
                        solutions for all your shipping needs, whether big or
                        small, to all parts of India.
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
                  sx={{ maxWidth: 425 }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      img
                      src={picture2}
                      width="100%"
                      height="50%"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Leading Edge Technology{" "}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Our adoption of technology, proven expertise and
                        networks brings us to the forefront in bringing
                        automation to tailor our solutions for your logistics
                        needs.
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
                  sx={{ maxWidth: 425 }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      img
                      src={picture3}
                      width="100%"
                      height="50%"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Safety & Reliability
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        We drive reliability and safety in logistics through
                        effective implementation of security tools and
                        technologies to drive efficiency and operational.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "25px" }} className="text-center">
          <h2 id="offer">
            <b>What we offer</b>
          </h2>
          <p>TAILORED LOGISTIC SERVICES</p>
        </div>
        <div className="text-center">
          <Container>
            <Row>
              <Col sm={4}>
                <img
                  component="img"
                  img
                  src={picture5}
                  width="50%"
                  height="50%"
                  alt="lala"
                />
                <h4>Contract logistics</h4>
                <p>
                  Need custom logistic service? We got it covered. From
                  overland, air, rail and sea transportation. Fast, safe and
                  accurate shipment provided all over the globe.
                </p>
              </Col>
              <Col sm={4}>
                <img
                  component="img"
                  img
                  src={picture6}
                  width="50%"
                  height="50%"
                  alt="lala"
                />
                <h4>Contract logistics</h4>
                <p>
                  Need custom logistic service? We got it covered. From
                  overland, air, rail and sea transportation. Fast, safe and
                  accurate shipment provided all over the globe.
                </p>
              </Col>
              <Col sm={4}>
                <img
                  component="img"
                  img
                  src={picture7}
                  width="50%"
                  height="50%"
                  alt="lala"
                />
                <h4>Contract logistics</h4>
                <p>
                  Need custom logistic service? We got it covered. From
                  overland, air, rail and sea transportation. Fast, safe and
                  accurate shipment provided all over the globe.
                </p>
              </Col>
            </Row>
          </Container>
          <Container style={{ backgroundColor: "#2c3741", maxWidth: "2000px" }}>
            <Row>
              <Col sm={6}>
                <div
                  style={{
                    paddingTop: "50px",
                    paddingBottom: "10px",
                  }}
                >
                  <h3
                    id="about"
                    style={{
                      color: "#fff",
                      fontFamily: "Raleway",
                      lineHeight: "24px",
                      fontStyle: "bold",
                      fontSize: "21px",
                      opacity: "1",
                      visibility: "visible",
                    }}
                  >
                    INDUSTRY SECTORS COVERAGE
                  </h3>
                </div>
                <div>
                  <p
                    style={{
                      marginLeft: "50px",
                      color: "#fff",
                      fontFamily: "Open Sans",
                      lineHeight: "22px",
                      fontWeight: "normal",
                      fontSize: "13px",
                    }}
                  >
                    We cover different industry sectors, from food and beverage,
                    chemical, retail, durable goods and more.
                  </p>
                </div>
                <ul>
                  <div>
                    <h5
                      style={{
                        color: "#fff",
                        fontFamily: "Open Sans",
                        paddingBottom:"5px"
                      }}
                    >
                      <IoFastFood /> Food and Beverage
                    </h5>
                  </div>

                  <div>
                    <h5
                      style={{
                        color: "#fff",
                        fontFamily: "Open Sans",
                        paddingBottom:"5px"
                      }}
                    >
                      <MdRecycling /> Chemical Goods
                    </h5>
                  </div>

                  <div>
                    <h5
                      style={{
                        color: "#fff",
                        fontFamily: "Open Sans",
                        paddingBottom:"5px"
                      }}
                    >
                      <GoPackage /> Consumer Packaged Goods
                    </h5>
                  </div>

                  <div>
                    <h5
                      style={{
                        color: "#fff",
                        fontFamily: "Open Sans",
                      }}
                    >
                      <FaGasPump /> Energy, Oil and Gas
                    </h5>
                  </div>
                </ul>
              </Col>
              <Col sm={6}>
                <img
                  component="img"
                  img
                  src={picture8}
                  width="102%"
                  height="100%"
                  alt="lala"
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container style={{ backgroundColor: "#5D707F", maxWidth: "2000px",color:"white"}}>
         <Row>
          <Col sm={4}>
          <p style={{display:"flex",justifyContent:"center"}}>Richers truck bodies</p>
           <p style={{display:"flex",justifyContent:"center"}}>Pcinjska 13</p>
           <p style={{display:"flex",justifyContent:"center"}}>Vladicin Han 17510</p>
          
          </Col>
          <Col sm={4}>
          <p style={{display:"flex",justifyContent:"center"}}>Phone:(381)621660-803</p>
           <p style={{display:"flex",justifyContent:"center"}}>Text Message:(381)637029-286</p>
           <p style={{display:"flex",justifyContent:"center"}}>Email:misko@gmail.com</p>
          
          </Col>
          <Col sm={4}>
          <p style={{display:"flex",justifyContent:"center"}}>Copyright © 2019-2022 Riechers Truck Bodies.</p>
          <p style={{display:"flex",justifyContent:"center"}}>All rights reserved.  Sitemap  |  Privacy Policy</p>
          
          </Col>
          </Row>
          <div style={{
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
          }}>
            <a style={{align:"center", color:"white"}} href='#top'>Back to top</a>
          </div>
          </Container>
        </div>
      </main>
    );
}

export default Home;
