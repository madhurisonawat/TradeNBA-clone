import React from 'react'
import {  Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 320,
        float: "left",
        marginLeft: "2%",
        maxHeight:320
    },
    media: {
        height: 140,
        minWidth:320
    },
});

export default function CardBox() {
    const classes = useStyles()
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}

                         image="https://lh3.googleusercontent.com/a-/AAuE7mDiLBWODRd-KC5bUy33CyZ9v3zfdK5_W6toUylXhg"
                        // image ="././resource/sp1.png"
                        title="sportsman"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Popular Trades
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <p style={{ color: "#0c2340"}}>This week</p>
                            <p style={{fontSize:"16px"}}> View the most popular  trade scenarios created by users in the past week.</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            
            </Card>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://image.shutterstock.com/image-photo/strong-athletic-fit-man-tshirt-600w-1497529361.jpg"
                      
                        title="sportsman"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                             Trades of the Day
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <p style={{ color: "#0c2340" }}>Created by sidPlayz</p>
                            <p style={{ fontSize: "16px" }}> Scenario involving Hawks, Rockets</p>
                            <p style={{ fontSize: "16px" }}>14 likes, 4 dislikes, 15 comments</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
              
            </Card>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                       
                        image="https://lh3.googleusercontent.com/a-/AAuE7mDiLBWODRd-KC5bUy33CyZ9v3zfdK5_W6toUylXhg"
                        title="sportsman"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Mock Drafts
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <p style={{ color: "#0c2340" }}>popular Simulations</p>
                            <p style={{ fontSize: "16px" }}> View the most popular  mock drafts being created leading up to NBA draft night.</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
          
            </Card>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                         image="https://image.shutterstock.com/image-photo/strong-athletic-fit-man-tshirt-600w-1497529361.jpg"
                       
                        title="sportsman"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                           Draft Big Boards
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <p style={{ color: "#0c2340" }}>An insightful dive into how people are feeling about this draft class.</p>
                            <p style={{ fontSize: "16px" }}> V iew the most popular draft rankings being discussed around the league.</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
               
            </Card>
            </>
    )
}