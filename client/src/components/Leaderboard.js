import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';


const background = require('../images/pokerbg.jpg')
const divStyle = {
    width: '88%',
    height: '800px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover'
};


class Leaderboard extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;
        return (
            <Container style={divStyle}>
                <ListGroup>
                    <TransitionGroup className="profile-list">
                        {items.map(({ id, name, rank }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    {/* <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, id)}
                                    >
                                        &times;
                                        </Button> */}
                                    <h5>{name}</h5> <h9>with {rank} Total Points</h9>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }

}

Leaderboard.propTypes = {
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(
    mapStateToProps,
    { getItems, deleteItem })
    (Leaderboard);