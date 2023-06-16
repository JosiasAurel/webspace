import { NextRequest } from "next/server";
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export const dataUri = "";
 

export default async function returnOgImage(req: NextRequest) {
  // console.log(req.query);
  // res.send(`Hello ${req.query.msg}`)
  const { searchParams } = new URL(req.url);
  const title = searchParams.has("msg") ? searchParams.get("msg") : "NO TITLE";
  // console.log(title);
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          backgroundSize: "100px 100px",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundSize: "400px 400px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <h1
              style={{
                fontSize: "100px",
                fontWeight: "700",
                fontFamily: "sans-serif",
                textAlign: "center",
                maxWidth: "90%",
                alignSelf: "center",
                padding: "1em",
              }}
            >
              {title}
            </h1>
          </div>

          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "flex-end",
              position: "absolute",
              bottom: "1em",
            }}
          >
            <h2 style={{ fontWeight: "bold"}}>— Josias Aurel ⚡</h2>
            <img
              src="https://josiasw.dev/josias-pfp.png"
              height={50}
              width={50}
              alt="Josias"
              style={{ borderRadius: "50%", margin: "1em" }}
            />
          </span>
        </div>
      </div>
    )
  );
}
