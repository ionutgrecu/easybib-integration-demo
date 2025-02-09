import React from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { format } from "date-fns"

class PublicationForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.item ? this.props.item.title : "",
            type: this.props.item ? this.props.item.type : "other",
            publishedAt: this.props.item ? Date.parse(this.props.item.publishedAt) : new Date()
        }

        this.handleChange = (e) => {
            // if (e.target.type == 'text' || e.target.type == 'select-one')
            this.setState({ [e.target.name]: e.target.value })
        }

        this.dateChange = (e) => {
            this.setState({ publishedAt: e })
            this.publishedAt = format(e, 'yyyy-MM-dd')
        }

        this.hideForm = () => {
            this.props.onHide()
        }

        this.add = () => {
            this.props.onAdd({
                title: this.state.title,
                type: this.state.type,
                publishedAt: this.state.documentDate
            })
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label>Publication title</Form.Label>
                                <Form.Control type="text" name="title" placeholder="Ex: Lorem ipsum dolor sit amet" onChange={this.handleChange} value={this.state.title} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Publication type</Form.Label>
                                <Form.Control as="select" name="type" onChange={this.handleChange} value={this.state.type}>
                                    <option>book</option>
                                    <option>newspaper</option>
                                    <option>paperwork</option>
                                    <option>other</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Publication date</Form.Label>
                                <DatePicker name="publishedAt" dateFormat="yyyy-MM-dd" onChange={this.dateChange} selected={this.state.publishedAt} />
                            </Form.Group>

                            <Form.Row>
                                <Button variant="primary" type="submit" className="mr-1" onClick={this.add}>
                                    Save
                                </Button>
                                <Button variant="danger" type="button" onClick={this.hideForm}>
                                    Cancel
                                </Button>
                            </Form.Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
} export default PublicationForm