import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Button from './../Components/Widget/Button';

export default class GoodjadExample extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged : (r1, r2)=>{return r1 !== r2}});
        this.state = {
            dataSource : ds.cloneWithRows(['1', '2', '3', '4', '5'])
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(data)=>{return (<View style={{width:100, height:100}}></View>)}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
