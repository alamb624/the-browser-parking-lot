import React from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';


export default function ParkingLotForm(){
    return (
        <Form data-bs-theme="dark" className="parking-lot-form">
            <FormGroup className="parking-lot-row">
                <Label for="link-date">
                Date
                </Label>
                <Input
                id="link-date"
                name="date"
                type="date"
                required
                />
            </FormGroup>
            <FormGroup className="parking-lot-row">
                <Label for="link-url">
                    Link
                </Label>
                <Input
                id="link-url"
                name="url"
                type="url"
                required
                />
            </FormGroup>
            <FormGroup className="parking-lot-row">
                <Label for="link-description">
                    Description
                </Label>
                <Input
                id="link-description"
                name="description"
                type="text"
                required
                />
            </FormGroup>
            <FormGroup className="parking-lot-row">
                <Input
                    name="radio-priority"
                    type="radio"
                    value="high"
                    id="prio-high"
                />
                {` `}
                <Label for="prio-high">
                    High
                </Label>
                <Input
                    name="radio-priority"
                    type="radio"
                    value="medium"
                    id="prio-medium"
                />
                {` `}
                <Label for="prio-medium">
                    Medium
                </Label>
                <Input
                    name="radio-priority"
                    type="radio"
                    value="low"
                    id="prio-low"
                />
                {` `}
                <Label for="prio-low">
                    Low
                </Label>
            </FormGroup>
            <Button type="submit" className="submit">
                Submit
            </Button>
        </Form>
    );
}