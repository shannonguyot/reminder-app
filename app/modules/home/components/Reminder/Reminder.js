import React from "react";
import { Text, Alert, View } from "react-native";
import styles from "./styles";
import { Button } from 'react-native-elements';
import { Actions } from "react-native-router-flux";

class Reminder extends React.Component {
	constructor() {
		super();
	}
	
	onEdit() {
		var reminder;
		
		if(this.props.item.val === undefined){
			reminder = this.props.item;
		} else {
			reminder = this.props.item.val();
		}
		
		Actions.EditReminder({reminder: this.props.item, reminderType: reminder.type});
	}
	
	onDelete() {
		Alert.alert(
			'Are you sure?',
			'This action cannot be undone.',
			[
				{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				{text: 'Confirm', onPress: () => this.props.item.ref.remove()},
			],
			{ cancelable: false }
		);
	}
	
	onAdd() {
		this.props.onAdd(this.props.item, this.props.index);
	}
	
	onSuccess() {
		Alert.alert("Success!", "Reminder was ");
	}
	
	onError(error) {
		Alert.alert("Uh-oh!", error.message);
	}

	render() {
		var reminder;
		
		if(this.props.item.val === undefined){
			reminder = this.props.item;
		} else {
			reminder = this.props.item.val();
		}
		
		if(reminder.type === 'expired') {
			
			return (
			<View style={styles.container}>
				<View style={styles.expiredTextContainer}>
					<View style={{flexDirection: "row"}}>
						<Text style={styles.reminderText}>Title: </Text>
						<Text style={styles.reminderText}>{reminder.title}</Text>
					</View>
					<View>
						<Text style={styles.reminderText}>Body: </Text>
						<Text style={styles.reminderText}>{reminder.description}</Text>
					</View>
					{
						(!!reminder.date) &&
						<View style={{flexDirection: "row"}}>
							<Text style={styles.reminderText}>Date: </Text>
							<Text style={styles.reminderText}>{reminder.date}</Text>
						</View>
					}
					{
						(!!reminder.time) &&
						<View style={{flexDirection: "row"}}>
							<Text style={styles.reminderText}>Time: </Text>
							<Text style={styles.reminderText}>{reminder.time}</Text>
						</View>
					}
					{
						(!!reminder.recurring) &&
						<View style={{flexDirection: "row"}}>
							<Text style={styles.reminderText}>Recurring: </Text>
							<Text style={styles.reminderText}>{reminder.recurring}</Text>
						</View>
					}
				</View>
				<View style={styles.expiredButtonContainer}>
					<Button
						raised
						title={"DELETE"}
						borderRadius={4}
						containerViewStyle={styles.containerView}
						buttonStyle={styles.button}
						textStyle={styles.buttonText}
						onPress={this.onDelete.bind(this)}/>
				</View>
			</View>
			);
			
		} else if (this.props.stat && this.props.stat === "import") {
			
			return (
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<View style={{flexDirection: "row"}}>
						<Text style={styles.reminderText}>Title: </Text>
						<Text style={styles.reminderText}>{reminder.title}</Text>
					</View>
					<View>
						<Text style={styles.reminderText}>Body: </Text>
						<Text style={styles.reminderText}>{reminder.description}</Text>
					</View>
					{
						(!!reminder.date) &&
						<View style={{flexDirection: "row"}}>
							<Text style={styles.reminderText}>Date: </Text>
							<Text style={styles.reminderText}>{reminder.date}</Text>
						</View>
					}
					{
						(!!reminder.time) &&
						<View style={{flexDirection: "row"}}>
							<Text style={styles.reminderText}>Time: </Text>
							<Text style={styles.reminderText}>{reminder.time}</Text>
						</View>
					}
					{
						(!!reminder.recurring) &&
						<View style={{flexDirection: "row"}}>
							<Text style={styles.reminderText}>Recurring: </Text>
							<Text style={styles.reminderText}>{reminder.recurring}</Text>
						</View>
					}
				</View>
				<View style={styles.buttonContainer}>
					<Button
						raised
						title={"ADD"}
						borderRadius={4}
						containerViewStyle={styles.containerView}
						buttonStyle={styles.button}
						textStyle={styles.buttonText}
						onPress={this.onAdd.bind(this)}/>
				</View>
			</View>
		);
		} else {
						
			return (
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<View style={{flexDirection: "row"}}>
						<Text style={styles.reminderText}>Title: </Text>
						<Text style={styles.reminderText}>{reminder.title}</Text>
					</View>
					<View>
						<Text style={styles.reminderText}>Body: </Text>
						<Text style={styles.reminderText}>{reminder.description}</Text>
					</View>
					{
						(!!reminder.date) &&
						<View style={{flexDirection: "row"}}>
							<Text style={styles.reminderText}>Date: </Text>
							<Text style={styles.reminderText}>{reminder.date}</Text>
						</View>
					}
					{
						(!!reminder.time) &&
						<View style={{flexDirection: "row"}}>
							<Text style={styles.reminderText}>Time: </Text>
							<Text style={styles.reminderText}>{reminder.time}</Text>
						</View>
					}
					{
						(!!reminder.recurring) &&
						<View style={{flexDirection: "row"}}>
							<Text style={styles.reminderText}>Recurring: </Text>
							<Text style={styles.reminderText}>{reminder.recurring}</Text>
						</View>
					}
				</View>
				<View style={styles.buttonContainer}>
					<Button
						raised
						title={"EDIT"}
						borderRadius={4}
						containerViewStyle={styles.containerView}
						buttonStyle={styles.button}
						textStyle={styles.buttonText}
						onPress={this.onEdit.bind(this)}/>
					<Button
						raised
						title={"DELETE"}
						borderRadius={4}
						containerViewStyle={styles.containerView}
						buttonStyle={styles.button}
						textStyle={styles.buttonText}
						onPress={this.onDelete.bind(this)}/>
				</View>
			</View>
		);
		}
	}
}

export default Reminder;