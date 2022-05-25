import '../styles/globals.css'
import Layout from '../components/layout'
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { ChakraProvider } from '@chakra-ui/react'
import { createGlobalStyle, ThemeProvider } from "styled-components";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

export var client_id = "244344d193a6458884254bd22be214b5";
export var client_secret = "4ea9f358a9d945c1a88bc431a88e9e5a;
export var redirect_url = "http://localhost:3000/spotify_dashboard";

const SpotifyStrategy = require('passport-spotify').Strategy;

passport.use(
  new SpotifyStrategy(
    {
      clientID: client_id,
      clientSecret: client_secret,
      callbackURL: redirect_url
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      User.findOrCreate({ spotifyId: "erikand7" }, function(err, user) {
        return done(err, user);
      });
    }
  )
);



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout >
      <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
