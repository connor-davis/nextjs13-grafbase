"use client";

import { useEffect, useState } from "react";
import { GetPostsQuery } from "./queries";
import { useAuth } from "@clerk/nextjs";

const fetchProjects = async (token) =>
  fetch(`${process.env.NEXT_PUBLIC_GRAFBASE_API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + token,
    },
    body: JSON.stringify({ query: GetPostsQuery }),
  }).then((response) => response.json());

const Posts = () => {
  const [data, setData] = useState();
  const { getToken } = useAuth();

  const getData = async () => {
    const token = await getToken({ template: "grafbase" });

    await fetchProjects(token).then(({ data, errors }) =>
      setData({ data, errors })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div>{JSON.stringify({ ...data }, null, 2)}</div>
    </div>
  );
};

export default Posts;
