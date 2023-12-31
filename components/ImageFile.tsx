import Image from "next/image";

const ImageFile = ({
	src,
	alt,
	width,
	height,
}: {
	src: string;
	alt: string;
	width: number;
	height: number;
}) => {
	return <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 768px) 100vw"/>;
};

export default ImageFile;
