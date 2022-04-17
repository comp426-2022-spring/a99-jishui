import React from 'react'
import { Card, CardContent, Typography, } from "@mui/material"

function Data({ title, cases, total }){
    return(
        <Card className="dataBox">
            <CardContent>
                <Typography className="dataBoxName" color="textSecondary">{title}</Typography>
            </CardContent>

            <h2 className="Cases">{cases}</h2>

            <Typography className="datatotal" color="textSecondary">
                {total} Total
            </Typography>
        </Card>
    )
}

export default Data