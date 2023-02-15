import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  font-family: Open Sans,serif ;
  
  .background-cover {
    background: url("/images/background-item1.png");
    background-size: cover;
    padding: 100px 0 120px 0;
    margin: 0;
    color: white;
  }
  
  .first-part {
    display: flex;
    margin: auto;
    width: 80%;
    padding: 80px 0 80px 0;
    
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
    height: 60vh;
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