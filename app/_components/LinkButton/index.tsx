import React from 'react'
import { Button } from 'react-bootstrap'
import styles from "./LinkButton.module.css"

export const LinkButton = () => {
    return (
        <Button id={styles.LinkButton} variant="outline-primary">View More</Button>
    )
}
