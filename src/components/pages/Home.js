import Heading from "../typography/Heading";
import CVprofed from "../../media/CVprofed.jpg";
import { StyledImg } from "../styles/ImgStyles";
import { ContentContainer } from "../styles/ContentStyles";

const Home = () => {
    return (
        <ContentContainer>
            <Heading title={'Home'} />
            <StyledImg src={CVprofed} />
        </ContentContainer>
    );
};

export default Home; 