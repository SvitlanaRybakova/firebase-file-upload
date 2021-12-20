import React from "react";
import ImageGrid from "../components/ImageGrid";
import Row from "react-bootstrap/Row";
import UploadImage from "../components/UploadImage";
import useImage from "../hooks/useImage";
import UploadImageDropzone from "../components/UploadImageDropzone";

const HomePage = () => {
	const imagesQuery = useImage();
	return (
		<>
			<h1>Images</h1>

			<ImageGrid query={imagesQuery} />

			<hr className="my-3" />

			<UploadImage />
			<br />
			<UploadImageDropzone />
		</>
	);
};

export default HomePage;
