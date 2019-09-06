import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import { updateProfile } from '../actions/itemActions';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.name,
            gametype: this.state.gametype,
            buyin: this.state.buyin,
            cashout: this.state.cashout,
            placeleft: this.state.placeleft
        }

        //Add item via addItem action
        this.props.addItem(newItem);

        //Updates Profile rank
        this.props.updateProfile(newItem);

        //Close modal
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >Add Game</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add your Game</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Name</Label>
                                <Input
                                    type="select"
                                    name="name"
                                    id="name"
                                    placeholder="Select your Name"
                                    onChange={this.onChange}
                                >
                                    <option value="" style={{ opacity: '0.01' }}>Select your Name</option>
                                    <option value="richard">Richard</option>
                                    <option value="justin">Justin</option>
                                    <option value="austin">Austin</option>
                                    <option value="dom">Dom</option>
                                </Input>
                                <Input
                                    type="select"
                                    name="gametype"
                                    id="gametype"
                                    placeholder="Select the Game Type"
                                    onChange={this.onChange}
                                >
                                    <option value="">Select the Game Type</option>
                                    <option value="tournament">Tournament</option>
                                    <option value="cashgame">Cash Game</option>
                                </Input>
                                <Input
                                    type="number"
                                    name="buyin"
                                    id="buyin"
                                    placeholder="Type the Buy In amount"
                                    onChange={this.onChange}
                                />
                                <Input
                                    type="number"
                                    name="cashout"
                                    id="cashout"
                                    placeholder="Type the Cash Out amount"
                                    onChange={this.onChange}
                                />
                                <Input
                                    type="select"
                                    name="placeleft"
                                    id="placeleft"
                                    onChange={this.onChange}
                                >
                                    <option value="">Select when you left the table</option>
                                    <option value='1'>1</option>
                                    <option value="2">2</option>
                                </Input>
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }}
                                    block
                                >Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, { addItem, updateProfile })(ItemModal);