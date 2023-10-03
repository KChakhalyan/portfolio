type SectionHeadingProps = {
   title: string;
};

const SectionHeading = ({ title }: SectionHeadingProps) => {
   return <h2 className="about-heading">{title}</h2>;
};
export default SectionHeading;
