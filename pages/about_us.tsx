import React from 'react';
import {NextPage} from "next";
import PageWrapper from "../components/PageWrapper";

const AboutUs: NextPage = () => {
    return (
        <PageWrapper title={"ZNK App"} description={"About us page"}>
            About Us
        </PageWrapper>
    );
};

export default AboutUs;