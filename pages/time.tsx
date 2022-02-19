import React from "react";

type Props = {
    date: string
}

const TimePage: React.FC<Props> = ({ date }): JSX.Element => {
    return (
        <div>
            The date of today is {date}
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch("http://localhost:3000/api/gettime");

    const data = await response.json();

    const date = data.date;

    return {
        props: {
            date
        }
    }
}

export default TimePage;