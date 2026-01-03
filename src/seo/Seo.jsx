import { Helmet } from "react-helmet-async";

const Seo = ({ title, description, canonical }) => (
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='canonical' href={canonical} />
    </Helmet>
);

export default Seo;
