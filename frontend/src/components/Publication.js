import React from "react";

class Publication extends React.Component{
    constructor(props){
        super(props)

        this.state={
            title:this.props.item.title
        }
    }

    render(){
        const { item } = this.props
console.log(item)
        return (
            <>
            <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.type}</td>
                <td>{item.publishedAt}</td>
            </tr>
            </>
        )
    }
} export default Publication