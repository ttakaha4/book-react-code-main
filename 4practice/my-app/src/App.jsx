import {ColoredMessage} from "./components/ColoredMessage";

export const App = () => {

	const onClickButton = () => {
		alert();
	};


	return (
		<>
			{console.log("TEST")}
			<h1 style={{color:"red"}}>こんにちは！</h1>
			{/* <ColoredMessage color="blue" message="お元気ですか？"/> */}
			<ColoredMessage color="blue">お元気ですか？</ColoredMessage>
			{/* <ColoredMessage color="pink" message="元気です！"/> */}
			<ColoredMessage color="pink">元気です！</ColoredMessage>

			<button onClick={onClickButton}>ボタン</button>
		</>
	);
};