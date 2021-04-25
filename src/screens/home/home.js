import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Header from "../../common/header/header";
import "./home.css";
import userImage from "../../assets/download.png";
import moment from "moment";
import { Favorite, FavoriteBorder } from "@material-ui/icons";

const Home = props => {
  const [homeDetails, setHomeData] = useState([]);

  useEffect(() => {
    // check if valid auth
    const auth = sessionStorage.userAuth;
    if (auth) {
      //   fetch(
      //     `https://graph.instagram.com/me/media?fields=id,caption&access_token=${auth}`
      //   )
      //     .then(
      //       rsp => {
      //         if (rsp.status === 200) {
      //           rsp.json().then(res => {
      //             console.log(res);
      //             const promises = res.data.map(item =>
      //               fetch(
      //                 `https://graph.instagram.com/${item.id}?fields=id,media_type,media_url,username,timestamp&access_token=${auth}`
      //               )
      //             );
      //             Promise.all(promises)
      //               .then(
      //                 responses => {
      //                   return Promise.all(
      //                     responses.map(function(response) {
      //                       return response.json();
      //                     })
      //                   );
      //                 },
      //                 err => console.log(err)
      //               )
      //               .then(
      //                 function(data) {
      //                   data.forEach((item, i) => {
      //                     const { caption } = res.data[i];
      //                     const hashIndex = caption ? caption.indexOf("#") : -1;
      //                     if (hashIndex > -1) {
      //                       item.caption = caption.substring(0, hashIndex);
      //                       item.hashtag = caption.substring(hashIndex);
      //                     } else {
      //                       item.caption = caption;
      //                     }
      //                     item = {
      //                       ...item,
      //                       isLiked: i % 4 === 0,
      //                       likeCount: i % 3,
      //                       comments: [],
      //                       comment: ""
      //                     };
      //                   });
      //                   localStorage.dataSetMain = JSON.stringify(data);
      //                   setHomeData(data);
      //                 },
      //                 err => console.log(err)
      //               )
      //               .catch(err => console.log(err));
      //           });
      //         }
      //       },
      //       err => console.log(err)
      //     )
      //     .catch(err => console.log(err));
    } else {
      props.history.push("/");
    }

    setHomeData(JSON.parse(localStorage.dataSetMain));
  }, []);

  useEffect(() => {
    localStorage.dataSetMain = JSON.stringify(homeDetails);
  }, [homeDetails]);

  const updateComment = (value, index) => {
    setHomeData(state => {
      state[index].comment = value;
      return [...state];
    });
  };

  const addComment = index => {
    setHomeData(state => {
      state[index].comments.push(state[index].comment);
      state[index].comment = "";
      return [...state];
    });
  };

  const toggleLike = index => {
    setHomeData(state => {
      state[index].isLiked = !state[index].isLiked;
      state[index].likeCount = state[index].isLiked
        ? state[index].likeCount + 1
        : state[index].likeCount - 1;
      return [...state];
    });
  };

  return (
    <>
      <Header isHome props={props} />
      <Grid container justify="center">
        {homeDetails.map((item, index) => (
          <Grid item sm="6" lg="4" className="post">
            <Card>
              <CardHeader
                avatar={<img className="user-img" src={userImage} />}
                title={
                  <Typography gutterBottom>
                    <b>{item.username}</b>
                  </Typography>
                }
                subheader={moment(item.timestamp).format("DD/MM/YYYY HH:mm:ss")}
              />
              <CardContent>
                <div className="post-details">
                  <img src={item.media_url} />
                  <Divider className="m-btm" />
                  <Typography variant="body1">{item.caption}</Typography>
                  <Typography variant="body1" className="hashtag">
                    {item.hashtag}
                  </Typography>
                </div>
              </CardContent>
              <CardActions>
                <Grid container direction="column" style={{ padding: "8px" }}>
                  <Grid container alignItems="center">
                    <span
                      onClick={() => toggleLike(index)}
                      className="like-post"
                    >
                      {item.isLiked ? (
                        <Favorite style={{ color: "red" }} />
                      ) : (
                        <FavoriteBorder />
                      )}
                    </span>
                    {item.likeCount ? (
                      <span>
                        {item.likeCount === 1
                          ? "1 like"
                          : `${item.likeCount} likes`}
                      </span>
                    ) : null}
                  </Grid>
                  <Grid item xs="12">
                    {item &&
                      item.comments &&
                      item.comments.map(comment => (
                        <Typography gutterBottom>
                          <b>custom_user:</b> {comment}
                        </Typography>
                      ))}
                  </Grid>
                  <Grid container alignItems="flex-end">
                    <TextField
                      label="Add a comment"
                      value={item.comment}
                      onChange={e =>
                        updateComment(e.currentTarget.value, index)
                      }
                      style={{ marginRight: "5px", width: "80%" }}
                    />
                    <Button
                      color="primary"
                      onClick={() => addComment(index)}
                      variant="contained"
                    >
                      Add
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
