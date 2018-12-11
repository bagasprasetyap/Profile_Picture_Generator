import React, { Component } from "react";
import { Container, MDBInput, MDBBtn } from "mdbreact";

import "./App.css";

class App extends Component {
  state = { gambar: "", alt: "" };

  genGambar = () => {
    var alt = this.refs.img.value;
    var random = Math.floor(Math.random() * 4);
    var url = `https://robohash.org/${alt}?set=set${random}`;

    this.setState({ gambar: url });
  };

  render() {
    return (
      <div>
        <Container>
          <div>
            <MDBInput ref="img" label="Ketik nama anda..." />
            <br />
            <MDBBtn
              color="indigo"
              onClick={() => {
                this.genGambar();
              }}
            >
              Buat Profile Picture!
            </MDBBtn>
          </div>
          <br />
          <div>
            <img
              src={this.state.gambar}
              alt={this.img}
              style={{
                borderRadius: "50%",
                backgroundColor: "lightblue"
              }}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
