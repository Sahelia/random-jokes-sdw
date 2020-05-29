import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Form      from 'react-bootstrap/Form';
import Button    from 'react-bootstrap/Button';

import { AiOutlineLogout } from 'react-icons/ai';

import './Room.css';

class Room extends Component {
    handleClick = () => {
        Meteor.logout();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1 className="header">
                    Caubet la D.
                    <Button className="logout" onClick={this.handleClick}>
                        <AiOutlineLogout />
                    </Button>
                </h1>
                <Container className="container">
                    <div className="message">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus nulla cursus cursus ultricies. Morbi sed nisl odio. Fusce sollicitudin dui et mauris porta, interdum lacinia quam convallis. Integer bibendum, tortor quis congue suscipit, sapien massa ultrices ex, vestibulum molestie felis magna vel odio. Vestibulum aliquet neque quis varius blandit. Duis auctor magna vitae accumsan rhoncus. Nam blandit nisi libero, non semper nibh consectetur vel. Integer neque mi, dignissim at lacus vitae, congue porta erat.
                    </div>
                    <div className="message">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus nulla cursus cursus ultricies. Morbi sed nisl odio. Fusce sollicitudin dui et mauris porta, interdum lacinia quam convallis. Integer bibendum, tortor quis congue suscipit, sapien massa ultrices ex, vestibulum molestie felis magna vel odio. Vestibulum aliquet neque quis varius blandit. Duis auctor magna vitae accumsan rhoncus. Nam blandit nisi libero, non semper nibh consectetur vel. Integer neque mi, dignissim at lacus vitae, congue porta erat.
                    </div>
                    <div className="message">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus nulla cursus cursus ultricies. Morbi sed nisl odio. Fusce sollicitudin dui et mauris porta, interdum lacinia quam convallis. Integer bibendum, tortor quis congue suscipit, sapien massa ultrices ex, vestibulum molestie felis magna vel odio. Vestibulum aliquet neque quis varius blandit. Duis auctor magna vitae accumsan rhoncus. Nam blandit nisi libero, non semper nibh consectetur vel. Integer neque mi, dignissim at lacus vitae, congue porta erat.
                    </div>
                </Container>
                <Form className="sender">
                    <Form.Control
                        as="textarea"
                    />
                    <Button type="submit" block>
                        Envoyer
                    </Button>
                </Form>
            </div>
        );
    };
};

export default Room;