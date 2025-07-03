#[macro_use]
extern crate rocket;
use markdown_parser;
use rocket::fs::FileServer;
use serde::{Deserialize, Serialize};
use serde_json::Value;
use std::{fs, io};

#[get("/")]
async fn index() -> Result<rocket::fs::NamedFile, std::io::Error> {
    rocket::fs::NamedFile::open("./index.html").await
}

#[get("/")]
fn rss_feed() -> String {
    build_rss().unwrap()
}

#[derive(Debug, Serialize, Deserialize)]
struct MyFrontMatter {
    title: Option<String>,
    description: Option<String>,
    date: Option<String>,
}

#[launch]
fn rocket() -> _ {
    // rocket::build().mount("/", routes![index]);
    // rocket::build().mount("/content/<article>", routes![serve_article])
    // let rss_content = build_rss().unwrap();
    rocket::build()
        .mount("/", routes![index])
        .mount("/rss", routes![rss_feed])
        .mount("/content", FileServer::from("./content/"))
}

use chrono::{DateTime, NaiveDate, Utc};

fn date_to_rss_datestring(date_str: &str) -> String {
    // Attempt to parse the date
    if let Ok(date) = NaiveDate::parse_from_str(date_str, "%Y-%m-%d") {
        // Safe unwrap since we know the time is valid
        let naive_datetime = date.and_hms_opt(0, 0, 0).unwrap();
        let utc_datetime: DateTime<Utc> = DateTime::from_utc(naive_datetime, Utc);
        utc_datetime
            .format("%a, %d %b %Y %H:%M:%S +0000")
            .to_string()
    } else {
        // Fallback string for invalid input
        "Thu, 01 Jan 1970 00:00:00 GMT".to_string()
    }
}

fn build_rss() -> io::Result<String> {
    let mut rss_feed = String::from(
        r#"
        <?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
<channel>
<title>Josias Aurel</title>
<link>https://josiasw.dev/</link>
<description>Latest articles, notes and essays.</description>
    "#,
    );

    for entry in fs::read_dir("./content")? {
        let path = entry?.path();
        if path.is_file() {
            let path_str = path.to_str().unwrap();
            if !path_str.ends_with(".md") {
                continue;
            };
            let md = markdown_parser::read_file(path_str).unwrap();
            let md_json = md
                .adapt::<markdown_parser::JsonAdapter, MyFrontMatter>()
                .unwrap();
            let front_matter = md_json.front_matter();
            let fm_json: Value = serde_json::from_str(&front_matter).unwrap();
            // let front_matter = md.front_matter();

            let path_slice = &path_str[2..path_str.len() - 2];

            let rss_item = rss_item(
                fm_json["title"].as_str().unwrap(),
                format!("https://josiasw.dev/{}html", path_slice).as_str(),
                &date_to_rss_datestring(fm_json["date"].as_str().unwrap()),
                fm_json["description"].as_str().unwrap(),
            );
            // println!("{}", rss_item);
            rss_feed += rss_item.as_str();

            // println!("{}", path_str);
            // println!("{}", front_matter);
        }
    }

    rss_feed += r#"
</channel>
</rss>
   "#;

    Ok(rss_feed)
}

fn rss_item(title: &str, url: &str, date: &str, desc: &str) -> String {
    format!(
        r#"
<item>
<title>{}</title>
<link>{}</link>
<guid>{}</guid>
<pubDate>{}</pubDate>
<description>{}</description>
</item>
"#,
        title, url, url, date, desc
    )
}
