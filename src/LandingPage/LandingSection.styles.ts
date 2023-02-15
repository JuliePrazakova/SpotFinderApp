import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  font-family: Montserrat,serif ;
  
  .background-cover {
    background: url("/images/mainBackground.png");
    background-size: cover;
    padding: 350px 0 15% 0;
    margin: 0;
    color: white;
  }
  .title > p {
    font-size: 60px;
    font-weight: 800;
  }
  .title {
    width: fit-content;
    margin-left: 15%;
  }
  .lower-section {
    margin: auto;
    padding-top: 50px;
    display: flex;
    width: 80%;
    justify-content: space-between;
  }
  
  //styles for leaflet map
  .leaflet-container {
    height: 40vh;
    width: 40vw;
    border-radius: 30px;
  }
  #map {
    position: -webkit-sticky;
    position: sticky;
    top:20px;
  }
`
export const Grid = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
`