import Head from "next/head";
import React, { useEffect, useState } from "react";
function Contact() {
    const [designs, setDesigns] = useState([]);
    const fetchData = async () => {
        try {
            const res = await fetch(`http://system.local/api/design`);
            const { data } = await res.json();
            setDesigns(data);
            return data;
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <Head>
                <title>Contact - Next</title>
                <meta name="description" content="Descriptions Contact Page" />
            </Head>
            <div>
                <h2>Contact</h2>
                <ul>
                    {designs.length && designs.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.first_name} {item.last_name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
export default Contact;