import Heading from "../typography/Heading";
import { ContentContainer } from "../styles/ContentStyles";

const Portfolio = () => {
    return (
        <ContentContainer>
            <Heading title={'Portfolio'} />
            <ul>
                <li>
                    <p>One</p>
                </li>
                <li>
                    <p>Two</p>
                </li>
                <li>
                    <p>Three</p>
                </li>
                <li>
                    <p>Four</p>
                </li>
            </ul>
        </ContentContainer>
    );
};

export default Portfolio; 