import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap"
import PublicationStore from '../stores/PublicationStore'
import Publication from './Publication'

class Main extends React.Component {
    constructor() {
        super()

        this.state = {
            publications: [],
        }

        this.store = new PublicationStore()
    }

    componentDidMount() {
        this.store.emitter.addListener('GET_PUBLICATIONS_SUCCESS', () => {
            this.setState({
                publications: this.store.publications
            })
        })

        this.store.getPublications()
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Table striped bordered>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Type</th>
                                        <th>Publish Date</th>
                                        <th>&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.publications.map((e) => <Publication key={e.id} item={e} />)
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
} export default Main