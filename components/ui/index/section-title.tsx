import Image from "next/image";

const SectionTitle = ({
  title,
  subtitle,
  leftIconSrc = "/star-left.png",
  rightIconSrc = "/star-right.png",
}) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold inline-flex items-center gap-2">
        <Image
          src={leftIconSrc}
          alt="left icon"
          width={25}
          height={25}
          className="mx-4"
        />
        {title}
        <Image
          src={rightIconSrc}
          alt="right icon"
          width={25}
          height={25}
          className="mx-4"
        />
      </h2>
      <div className="w-40 h-0.5 bg-yellow-400 mx-auto mt-2"></div>
      {subtitle && (
        <p className="text-gray-700 text-sm leading-relaxed mt-4">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
