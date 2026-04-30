import { SubTitle } from "./SubTitle";
import { Title } from "./Title";

type Props = {
    title: string;
    subTitle: string;
};

export const Header = ({title, subTitle}: Props) => {
    return (
        <div>
            <Title label={title} />
            <SubTitle label={subTitle} />
        </div>
    );
};
