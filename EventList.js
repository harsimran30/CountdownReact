import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import EventCard from './EventCard';
import ActionButton from 'react-native-action-button';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#F3F3F3'
    },
});

class EventList extends Component {

    state = {
        events: []
    }

    componentDidMount() {

        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now()
                }))
            });
        }, 1000);

        const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date)
        }));

        this.setState({ events });
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('NewEvent');
    }

    render() {
        return [
            <FlatList
                style={styles.list}
                data={this.state.events}
                renderItem={({ item }) => <EventCard event={item}></EventCard>}
                keyExtractor={item => item.id}
            />,
            <ActionButton
                key='tester'
                title="Go to Ashmeet's profile"
                onPress={this.handleAddEvent}
                buttonColor='red'
            />
        ];
    }
}

export default EventList;