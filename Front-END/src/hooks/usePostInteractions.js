import { useState } from "react";
import { http } from "../api";

export const usePostInteractions = (post) => {
  const [comments, setComments] = useState(post.comments);
  const [Likes, setLikes] = useState(post.likes);

  const HandleNewCommit = (comment) => {
    setComments(comment, ...comments);
  };

  const HandleLike = () => {
    http.post(`/blog-posts/${post.id}/like`, {}).then(() => {
      setLikes((oldState) => oldState + 1);
      console.log("implementar like");
    });
  };

  return {
    HandleNewCommit,
    HandleLike,
    comments,
    Likes,
  };
};
