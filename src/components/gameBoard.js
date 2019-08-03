import React, { Component } from 'react';
import {Text, View} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



export default class GameBoard extends Component {
  constructor(props) {
    super () 
    this.state = {
        scores: [],
        round: 0,
        colName: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        rowData: [["a","b","c","d","e","f","g","h","i","j"]]

    }
    // this.nextPage=this.nextPage.bind(this)
    

  }
    board() {
    return (
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={this.state.colName} style={styles.head} textStyle={styles.text}/>
            <Rows data={this.state.rowData} textStyle={styles.text}/>
        </Table>

    )}

    peepScores() {
    return(
    <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={['Name', 'Score']} textStyle={styles.text}/>
        <Rows data={[this.props.users]} textStyle={styles.text}/>
    </Table>
    )}




    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1}}>
                    <Text style={styles.titleStyle}>Game Board</Text>
                </View>
                <View style={{flex:2}}>
                    {this.board()}
                </View>
                <View style={{flex:2}}>
                {/* {this.props.users.map(user => {
                return (
                    <Text style={styles.item} key={user}>{user}</Text>
                    )
                }) 
                } */}
                {this.peepScores()}
                </View>
            </View>
        )

    }
}

const styles = {
    container : {
        justifyContent: 'space-around',
        flex: 1,
        backgroundColor: '#EDD096'
    },
    titleStyle : {
        color: '#F0EBDF',
        fontSize: 28,
        height: 60,
        fontWeight: 'bold',
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2 },
        shadowOpacity: 0.2,
        textAlign: 'center'
    },
    //table CSS
    boardContainer: { padding: 16, paddingTop: 30, backgroundColor: '#fff', width: 500},
    head: { height: 40, backgroundColor: '#f1f8ff'},
    text: { margin: 6 },

    item: {
        paddingTop: 10,
        fontSize: 18,
    }
}
