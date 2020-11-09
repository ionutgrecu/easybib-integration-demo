import React from "react";

class Publication extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.item.title
        }
    }

    render() {
        const { item } = this.props

        return (
            <>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.title}<br /><small><strong>Authors:</strong>
                        {item.authors.map((i) =>
                            <>
                                <span>{i.name}</span>, &nbsp;
                            </>
                        )}
                    </small></td>
                    <td>{item.type}</td>
                    <td>{item.publishedAt}</td>
                    <td><a className="btn btn-info" title="Edit">
                        <i className="fas fa-pencil-alt" onClick={this.edit}></i>
                    </a>{" "}
                        <a className="btn btn-danger" title="Delete" onClick={this.delete}>
                            <i className="fas fa-trash-alt"></i>
                        </a>{" "}
                    </td>
                </tr>
            </>
        )
    }
} export default Publication