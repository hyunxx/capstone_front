import React, { useState, useEffect } from "react";
import axios from "axios";

const CLIENT_ID = "6096b61040be43ef965afed2d3eeaccc";
const CLIENT_SECRET = "86de24f83fe34a93a266464c58e05197";

function test() {
  const [token, setToken] = useState("");
  
  useEffect(() => {
    const fetchToken = async () => {
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        new URLSearchParams({ grant_type: "client_credentials" }),
        {
          headers: {
            Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setToken(response.data.access_token);
    };

    fetchToken();
  }, []);



  return (
    <>
    </>
  );
}

export default test;
