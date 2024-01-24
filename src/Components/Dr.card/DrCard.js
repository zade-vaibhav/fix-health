import React from 'react'
import "./card.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import { CardActions } from '@mui/material';

function DrCard({ exprience,image,name,degree}) {
  return (
    <Card sx={{ maxWidth: 345,maxHeight:600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{ maxWidth: 345,maxHeight:40 }}>
          <Typography sx={{ maxWidth: 345,maxHeight:40 }} gutterBottom variant="h6"  height="40" component="div">
           {name}
          </Typography>
          <Typography variant="span" color="text.secondary">
            {degree}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Know More
        </Button>
      </CardActions>
    </Card>
  )
}

export default DrCard
