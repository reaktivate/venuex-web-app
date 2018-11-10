import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import defaultLogo from 'assets/default-logo.png';
import { getLogoThunk } from 'reducers/VenueConfig';


const Container = styled.div`
  display: flex;
`;


const LogoImage = styled.img`
  height: 100px;
  object-fit: contain;
  margin:auto;
`;


class Logo extends PureComponent {
  state = {};

  componentWillMount() {
    this.props.getLogo();
  }

  render() {
      return (
        <Container >
          <LogoImage src={(this.props.config && this.props.config.logo) ? this.props.config.logo : defaultLogo} alt="Home" />
        </Container>
      );
  }
}

const mapStateToProps = (state) => ({
    config: state.venueConfig
  });

const mapDispatchToProps = (dispatch) => ({
    // same effect
    getLogo: () => dispatch(getLogoThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
