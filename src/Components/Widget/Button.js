import React, {Component, PropTypes} from "react";
import {StyleSheet, Image, TouchableOpacity} from "react-native";

export default class Button extends Component {
    static propTypes = {
        style : React.PropTypes.object,
        rounded : React.PropTypes.bool,

        size: PropTypes.number,
        style: Image.propTypes.style,
        isSelected: PropTypes.bool,
        selBorderWidth: PropTypes.number,
        selBorderColor: PropTypes.string,
        source: Image.propTypes.source,
        onChangeSelection: PropTypes.func,
    };

    static defaultProps = {
        size: 100,
        isSelected: false,
        selBorderWidth: 3,
        selBorderColor: '#FF0000',
        source: {
            uri: '',
            isStatic: true
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            isSelected : false,
        };
    }

    componentWillReceiveProps(props){
        this.setState({isSelected : props.isSelected});
    }

    render() {
        const {
            style,
            size,
            source,
        } = this.props;

        return (
            <TouchableOpacity onPress={()=>this._onPress()}>
                <Thumbnail source={source} size={size} style={[style, this.getSelectedBorder()]}/>
            </TouchableOpacity>
        );
    }

    getSelectedBorder() {
        if (this.state.isSelected) {
            return ({
                borderWidth: this.props.selBorderWidth,
                borderColor: this.props.selBorderColor
            });
        }
        else {
            return ({});
        }
    }

    _onPress() {
        var tmpIsSelected = !this.state.isSelected;
        this.setState({isSelected : tmpIsSelected},
            ()=>{
                if (this.props.onChangeSelection){
                    if (this.state.isSelected){
                        this.props.onChangeSelection(true);
                    }
                    else {
                        this.props.onChangeSelection(false);
                    }
                }
            });

    }
}
