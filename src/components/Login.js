import styled from "styled-components";
import { connect } from "react-redux";
import { signInAPI } from "../actions";
import { Redirect } from "react-router";

const Login = (props) => {
  return (
    <Container>
      {props.user && <Redirect to="/home" />}
      <Nav>
        <a href="">
          <img src="" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>

      <Section>
        <Hero>
          <h1>Get started</h1>
          <img src="/images/login-hero.svg" />
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img src={"/images/google.svg"} />
            Sign in with google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};
//come back to 24:05
const Container = styled.div`
  padding: 8px;
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;
//"media()" applies to phones
const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  //COLOUR TO USE?
  color: ();
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px lime;
  color: green;
  border-radius: 20px;
  padding: 10px 24px;
  cursor: pointer;
  transition-duration: 2ms;
  font-size: 16px;
  font-weight: 100;
  line-height: 40px;
  text-align: center;
  &:hover {
    background-color: lightgreen;
  }
`;
const Section = styled.section`
  display: flex;
  align-content: flex-start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;
const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 50px;
    color: #2977c9;
    font-weight: 200;
    line-height: 78px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    //z-index: -1;
    width: 700px;
    position: absolute;
    height: 670px;
    bottom: -2px;
    right: -150px;
    border-radius: 50%;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;
const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  img {
    width: 20px;
    height: 20px;
  }
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 50px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 66%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0%);
  cursor: pointer;
  vertical-align: middle;
  transition-duration: 157ms;
  z-index: 0;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

const mapStateToProps = (state) => {
  return {
    //This sets who the user is going to be
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
