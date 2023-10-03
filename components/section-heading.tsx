type SectionHeadingProps = {
   title: string;
};

const SectionHeading = ({ title }: SectionHeadingProps) => {
   return <h2 className="text-3xl font-medium text-center mb-14">{title}</h2>;
};
export default SectionHeading;
