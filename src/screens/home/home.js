import React, { useState, useEffect } from "react";
import Header from "../../common/header/header";
import "./home.css";

const Home = props => {
  const [homeDetails, setHomeData] = useState([]);

  useEffect(() => {
    // check if valid auth
    const auth = sessionStorage.userAuth;
    if (auth) {
      fetch(
        `https://graph.instagram.com/me/media?fields=id,caption&access_token=${auth}`
      )
        .then(
          rsp => {
            if (rsp.status === 200) {
              rsp.json().then(res => {
                console.log(res);
                const promises = res.data.map(item =>
                  fetch(
                    `https://graph.instagram.com/${item.id}?fields=id,media_type,media_url,username,timestamp&access_token=${auth}`
                  )
                );
                Promise.all(promises)
                  .then(
                    responses => {
                      return Promise.all(
                        responses.map(function(response) {
                          return response.json();
                        })
                      );
                    },
                    err => console.log(err)
                  )
                  .then(
                    function(data) {
                      console.log("final data", data);     
                      setHomeData(data);
                    },
                    err => console.log(err)
                  )
                  .catch(err => console.log(err));
              });
            }
          },
          err => console.log(err)
        )
        .catch(err => console.log(err));
    } else {
      props.history.push("/");
    }
  }, []);
  return (
    <>
      <Header isUser />
      Homepage
    </>
  );
};

export default Home;
