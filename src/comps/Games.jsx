import React from 'react'
import '../styles/Games.css'
import { useState, useEffect } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { margin } from '@mui/system';
import { Form } from 'react-router-dom';


import { motion } from 'framer-motion'


function Games() {
    const [games, setGames] = React.useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageSize=100')
        const data = await response.json()
        setGames(data)
        console.log(data)
    }
    const steam = `https://store.steampowered.com/app/ ${games.steamAppID}`
  return (
    <motion.div 
    className='back-games'
    
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
        <div className='sidebar'>
            <a href="https://github.com/GarrettWat/Game-Checker" className='icons' target="_blank"><h1 ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg></h1></a>
            <a href="/" className='iconss'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg></a>
            <a href="https://www.linkedin.com/in/garrettwate/" className='icons' target="_blank"><h1><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg></h1></a>
        </div>
        <div className='games'>
            {games.map((games) => {
                return(
                    <a href={"https://store.steampowered.com/app/" + games.steamAppID} target="_blank" className='card'>
                    <Card sx={{m: 2}} className="card-body">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="110"
                            image={games.thumb}
                            alt="green iguana"
                            sx={{width: 400}}
                            className="card-img"
                            />
                            <CardContent
                            sx={{width: 350, height: 100}}
                            >
                            <Typography gutterBottom variant="h5" component="div">
                                {games.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Current: $ {games.salePrice}   |   Original: $ {games.normalPrice}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </a>
                )
            })}
        </div>
    </motion.div>
  )
}

export default Games