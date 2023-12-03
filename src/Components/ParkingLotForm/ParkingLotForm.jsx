import React, { useState } from 'react';
import { Form, Button, FormGroup, Label, Input, Image } from 'reactstrap';

import './ParkingLotForm.css'


const PRIORITIES = {
    Low: 'Low',
    Medium: 'Medium',
    High: 'High',
}

export default function ParkingLotForm({ addItem }){

    const [date, setDate] = useState('');
    const[link, setLink] = useState('');
    const[description, setDescription] = useState('');
    const[priority, setPriority] = useState(PRIORITIES.Medium);

    function handleDateChange(e) {
        setDate(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handlePriorityChange(e) {
        setPriority(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const [ y, M, d] = date.split('-');
        const formattedDate = `${M}/${d}/${y}`;

        addItem(formattedDate, link, description, priority);
        
        setDate('');
        setLink('');
        setDescription('');
        setPriority(PRIORITIES.Medium);
    }

    return (
        <Form data-bs-theme="dark" className="parking-lot-form"
    onSubmit={handleSubmit}>
            <FormGroup className="parking-lot-row">
                <Label for="link-date">
                Date
                </Label>
                <Input
                id="link-date"
                name="date"
                type="date"
                value={date}
                onChange={handleDateChange}
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
                value={link}
                onChange={handleLinkChange}
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
                value={description}
                onChange={handleDescriptionChange}
                required
                />
            </FormGroup>
            <FormGroup className="parking-lot-row d-center flex-wrap">
                <Input
                    name="radio-priority"
                    type="radio"
                    value="high"
                    id="prio-high"
                    checked={priority === PRIORITIES.High}
                    onChange={handlePriorityChange}
                />
                {` `}
                <Label for="prio-high" className="me-3">
                    High
                </Label>
                <Input
                    name="radio-priority"
                    type="radio"
                    value="medium"
                    id="prio-medium"
                    checked={priority === PRIORITIES.Medium}
                    onChange={handlePriorityChange}
                />
                {` `}
                <Label for="prio-medium" className="me-3">
                    Medium
                </Label>
                <Input
                    name="radio-priority"
                    type="radio"
                    value="low"
                    id="prio-low"
                    checked={priority === PRIORITIES.Low}
                    onChange={handlePriorityChange}
                />
                {` `}
                <Label for="prio-low" className="me-3">
                    Low
                </Label>
            </FormGroup>
            <Button type="submit" className="button" >
              Submit
            </Button>
        </Form>
    );



}