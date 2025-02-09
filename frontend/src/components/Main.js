import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap"
import PublicationStore from '../stores/PublicationStore'
import Publication from './Publication'
import PublicationForm from './PublicationForm'

class Main extends React.Component {
    constructor() {
        super()

        this.state = {
            publications: [],
            isEditing: false
        }

        this.store = new PublicationStore()

        this.showForm = () => {
            this.setState({
                isEditing: true
            })
        }

        this.hideForm = () => {
            this.setState({ isEditing: false })
        }

        this.add = (publication) => {
            this.store.addPublication(publication)
        }

        this.delete = (id) => {
            this.store.deletePublication(id)
        }

        this.easybibAuth = () => {
            let browser = window.self
            // console.log(browser.open('https://id.easybib.com/oauth/authorize?response_type=code&client_id=05f3a2b2380d47b393564ce1f4da2de30a5c34b5cb2470f8bd4b24c715ab4081', 'easybib', `dependent=${1}, alwaysOnTop=${1}, alwaysRaised=${1}, alwaysRaised=${1}, width=${700}, height=${550}`))
            browser.location.href = 'https://id.easybib.com/oauth/authorize?response_type=code&client_id=05f3a2b2380d47b393564ce1f4da2de30a5c34b5cb2470f8bd4b24c715ab4081'
        }
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
        if (this.state.isEditing === false)
            return (
                <>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" onClick={this.showForm}><i className="fas fa-plus"></i> Add Publication</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={this.easybibAuth}><i className="fas fa-plus"></i> Easybib</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Container className="mt-3">
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
                                            this.state.publications.map((e) => <Publication key={e.id} item={e} onDelete={this.delete} />)
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                </>
            )
        else
            return <PublicationForm onHide={this.hideForm} onAdd={this.add} />
    }
} export default Main