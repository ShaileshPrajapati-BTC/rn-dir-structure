import React, { Component } from "react";
import { Header, Left, Body, Right, Icon, Text } from "native-base";
import Color from '../config/color';

export class AppHeader extends Component {
	render() {
		const { onLeftClick, onRightClick, transparent, leftIcon } = this.props.header;
		return (
			<Header style={{ backgroundColor: transparent ? 'transparent' : Color.themeColor, elevation: 0 }} androidStatusBarColor="black">
				{onLeftClick ? <Left  >
					<Icon
						type="Ionicons"
						name={leftIcon}
						size={30}
						onPress={onLeftClick}
						style={{ color: 'white' }}
					/>
				</Left> : <Left style={{ flex: 1 }} />}
				<Body style={{ flex: 1 }}>
					<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Photo Location</Text>
				</Body>
				{onRightClick ? <Right >
					<Icon
						type="Ionicons"
						name={"refresh"}
						size={30}
						onPress={onRightClick}
					/>
				</Right> : <Right />}
			</Header>
		);
	}
}

export default AppHeader;