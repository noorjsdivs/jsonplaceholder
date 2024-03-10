import { postsData } from "@/data";
import { NextResponse } from "next/server";

export const GET = async () => {
  const singlePosts = postsData.find((item) => item?.id === 1);
  return NextResponse.json({
    message: "Connection established successfully!",
    success: true,
    data: singlePosts,
  });
};
