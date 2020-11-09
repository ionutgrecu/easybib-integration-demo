import React from "react";

class Publication extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const { item } = this.props

        return (
            <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.type}</td>
                <td>{item.publishedAt}</td>
            </tr>
        )
    }
} export default Publication