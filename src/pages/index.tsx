import { Text, VStack, Code } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<VStack spacing={8}>
			<Text>
				<Code fontSize="xl">Blog</Code> webiste.
			</Text>
			<Text>
				<Code fontSize="xl">Home</Code> page.
			</Text>
			<Text>
				Go to <Link to="/blog">Blog</Link> page.
			</Text>
		</VStack>
	);
};

export default Home;
