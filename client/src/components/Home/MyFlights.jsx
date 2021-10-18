import React from "react";
import { CDBCarousel, CDBCarouselItem, CDBCarouselInner, CDBView, CDBContainer } from "cdbreact";
import { Container } from "react-bootstrap";

const MyFlights = () => {
  return (
    <Container>
      <CDBContainer>
        <CDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
          slide
        >
          <CDBCarouselInner>
            <CDBCarouselItem itemId="1">
              <CDBView>
                VIEW3
              </CDBView>
            </CDBCarouselItem>
            <CDBCarouselItem itemId="2">
              <CDBView>
                VIEW4
              </CDBView>
            </CDBCarouselItem>
            <CDBCarouselItem itemId="3">
              <CDBView>
                VIEW5
              </CDBView>
            </CDBCarouselItem>
          </CDBCarouselInner>
        </CDBCarousel>
      </CDBContainer>
    </Container>

  )
}

export default MyFlights;