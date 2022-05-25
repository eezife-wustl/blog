import '../styles/globals.css'
import Layout from '../components/layout'
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { ChakraProvider } from '@chakra-ui/react'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import passport from 'passport-spotify'

// Store Strapi Global object in context
export const GlobalContext = createContext({});

// const SpotifyStrategy = require('passport-spotify').Strategy;
// const express = require('express');
// const app = express();

// passport.use(
//   new SpotifyStrategy(
//     {
//       clientID: client_id,
//       clientSecret: client_secret,
//       callbackURL: "http://localhost:3000/auth/spotify"
//     },
//     function(accessToken, refreshToken, expires_in, profile, done) {
//       User.findOrCreate({ spotifyId: "erikand7" }, function(err, user) {
//         return done(err, user);
//       });
//     }
//   )
// );

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
