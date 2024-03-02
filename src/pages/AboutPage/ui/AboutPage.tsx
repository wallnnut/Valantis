import { AboutPageLayout } from "shared/layouts";
import { AboutProject, Navbar } from "widgets";

const AboutPage = () => {
	return ( 
		<AboutPageLayout header={<Navbar />} main={<AboutProject />} />
	);
};

export default AboutPage;
 