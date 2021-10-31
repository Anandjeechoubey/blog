import { Text, VStack, Code } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
	return (
		<VStack spacing={8}>
			<Text>
				<Code fontSize="xl">Blog</Code> webiste.
			</Text>
			<Text>
				<Code fontSize="xl">Blog</Code> page.
			</Text>
			<Text>
				Go to <Link to="/">Home</Link> page.
			</Text>
		</VStack>
	);
};

export default Blog;
