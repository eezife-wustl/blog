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

Passport-Spotify
Passport strategy for authenticating with Spotify using the OAuth 2.0 API.

This module lets you authenticate using Spotify in your Node.js applications. By plugging into Passport, Spotify authentication can be easily and unobtrusively integrated into any application or framework that supports Connect-style middleware, including Express.

For more information about Spotify's OAuth 2.0 implementation, check their Web API Authorization Guide.

Installation
$ npm install passport-spotify
Usage
Configure Strategy
The Spotify authentication strategy authenticates users using a Spotify account and OAuth 2.0 tokens. The strategy requires a verify callback, which accepts these credentials and calls done providing a user, as well as options specifying a client ID, client secret, and callback URL.

const SpotifyStrategy = require('passport-spotify').Strategy;

passport.use(
  new SpotifyStrategy(
    {
      clientID: client_id,
      clientSecret: client_secret,
      callbackURL: 'http://localhost:8888/auth/spotify/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
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
