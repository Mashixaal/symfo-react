import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/tools/navbar";

const URL = "https://jsonplaceholder.typicode.com/users/";
const URL_ = "http://localhost:8000/api/users/";

const Home = () => {
  const [posts, getAllPosts] = useState([]);
  const [postsSymfony, getAllUsersSymfony] = useState([]);

  const getUsersSymfony = async () => {
    await axios
      .get(`${URL_}`)
      .then((response) => {
        getAllUsersSymfony(response.data["hydra:member"]);
      })
      .catch((error) => {
        error;
      });
  };

  const getUsers = async () => {
    await axios
      .get(`${URL}`)
      .then((response) => {
        getAllUsers(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getUsersSymfony();
    getUsers();
  }, []);

  return (
    <>
      <Navbar />
      {postsSymfony.map((post) => {
        return (
          <div key={post.id}>
            <ul>
              <li>Votre nom est : {post.name}</li>
              <li>Vous avez {post.age} ans !</li>
            </ul>
          </div>
        )
      })}
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <ul>
              <li>Le titre du post : {post.title}</li>
              <li>Le corps du message : {post.body}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Home;