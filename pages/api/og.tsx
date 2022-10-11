import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "@vercel/og";
import { dataUri } from "../../josias.data";

export const config = {
    runtime: "experimental-edge"
};

export default function returnOgImage(req: NextRequest, res: NextResponse) {
    // console.log(req.query);
    // res.send(`Hello ${req.query.msg}`)
    const message = req.url.split("=")[1];
    // console.log(message);
    return new ImageResponse(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundSize: "400px 400px",
            backgroundColor: "white",
            backgroundSize: "100px 100px",
            backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',

        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: "100%",
                backgroundSize: "400px 400px"
            }}>
                <h1 style={{
                    fontSize: "100px",
                    fontFamily: "sans-serif",
                    textAlign: "center",
                    maxWidth: "350px"
                }}>
                    {message}
                </h1>

                <span style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "flex-end"
                }}>
                    <h2>— Josias 🛠️</h2>
                    <img
                        src={dataUri}
                        height={50}
                        width={50}
                        alt="Josias"
                        style={{ borderRadius: "50%", margin: "1em" }}
                    />
                </span>
            </div>
        </div>
    );
}