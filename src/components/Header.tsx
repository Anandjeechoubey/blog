// import { Box } from "@chakra-ui/layout";
import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const Header = () => {
	return (
		<HStack spacing={8} p={3} justifyContent="space-between">
			<HStack>
				<Link to="/">
					<Button>Home</Button>
				</Link>
				<Link to="/blog">
					<Button>Blog</Button>
				</Link>
			</HStack>
			<ColorModeSwitcher />
		</HStack>
	);
};

export default Header;
