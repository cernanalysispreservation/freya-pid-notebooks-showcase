import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from "gatsby"

export const ServiceListingItem = ({ notebook: {
    fields: {
        slug, 
        codemeta: {
            name, description, doi
        } = {}
    } = {}
} = {} }) => {


    return (
        <Card>
            <Card.Body>
                <Card.Title><Link to={slug}>{name || slug}</Link></Card.Title>
                <Card.Text>
                    {description || "No Description"}
                </Card.Text>
            </Card.Body>
        </Card >
    )
}

export default ServiceListingItem;