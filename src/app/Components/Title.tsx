type Props = {
    label: string;
};

export const Title = ({ label }: Props) => {
    return <h1 className="text-4xl font-bold my-4">{label}</h1>;
};
