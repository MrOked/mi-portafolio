import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, image, urlDemo, urlGithub } = data;

  return (
    <div
      key={id}
      className="p-4 border border-green-500 rounded-xl"
    >
      <h3 className="mb-4 text-xl text-white">{title}</h3>
      <Image
        src={image}
        alt="Image"
        width={200}
        height={200}
        className="w-full md:w-[200px] rounded-2xl h-auto"
      />

      <div className="flex gap-5 mt-5">
        <Link
          href={urlGithub}
          target="_blank"
          className="p-2 transition duration-150 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white"
        >
          Github
        </Link>

     
      </div>
    </div>
  );
};

export default PortfolioBox;
