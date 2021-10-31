import * as React from "react";
import {
	ChakraProvider,
	Box,
	// Text,
	// Link,
	// VStack,
	// Code,
	Grid,
	theme,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import Blog from "./pages/blog";
import Header from "./components/Header";

export const App = () => (
	<ChakraProvider theme={theme}>
		<Router>
			<Box textAlign="center" fontSize="xl">
				<Header />
				<Grid minH="100vh" justifyContent="center" alignItems="center" p={3}>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/blog" exact component={Blog} />
					</Switch>
					{/* <Home /> */}
				</Grid>
			</Box>
		</Router>
	</ChakraProvider>
);
