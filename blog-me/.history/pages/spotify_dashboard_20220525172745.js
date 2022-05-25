import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/body.module.css'
import Layout from '../components/layout'
import Link from 'next/link'
import {fetchAPI, getAccessToken} from '../lib/api'


export default function Home({spotify_artsits, spotify_tracks}) {
  // console.log(fetchAPI("me/top/artists"))
    return (
      <>
      <h1 style={{textAlign: "center", marginTop: "5rem"}}> My Spotify Dashboard </h1>
      <div style={{ display: "flex", justifyContent: "space-evenly"}}>
        <div style={{ alginSelf: "flex-start"}}>
            <h2> Top Artists this Month </h2>
            {spotify_artsits.items 
              && spotify_artsits.items.map((artist, index) => (
                <div  key={artist.id}>
                        <p className={styles.myPostDesc}> {index+1}. {artist.name} </p>
                  </div>
              ))}
          </div>
          <div style={{ alginSelf: "flex-end", marginLeft: "5rem"}}>
          <h2> Top Tracks this Month </h2>
          {spotify_tracks.items 
             && spotify_tracks.items.map((track, index) => (
               <div  key={track.id}>
                      <p className={styles.myPostDesc}> {index+1}. {track.name} {track.artists.name} </p>
                </div>
            ))}
          </div>
      </div>
    </>
    )
  }
  
//what I want to do: use spotify's api to display my top artists and top songs of the month
//what i need: spotify API
//need to: make a GET REQUEST TO THESE ENDPOINTS:
  //	https://api.spotify.com/v1/me/top/artists
  // 	https://api.spotify.com/v1/me/top/tracks
  // need to use OAuth to get access
  // also need: clinet_id, client_secret, redirect_url
  export async function getStaticProps() {
    const access_token = await getAccessToken();
    // console.log(access_token)
    const spotify_artsits = await fetchAPI("me/top/artists?time_range=short_term", access_token.access_token);
    const spotify_tracks = await fetchAPI("me/top/tracks?time_range=short_term", access_token.access_token);

    console.log(spotify_artsits);
    console.log(spotify_tracks);
    return {
      props: {spotify_artsits, spotify_tracks}
    }
  }