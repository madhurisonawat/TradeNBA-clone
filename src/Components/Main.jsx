import React from 'react'
import Appbar from './Appbar'
import CardBox from './Card'
import styles from './styles.module.css'
import{Box,Button} from '@material-ui/core'




export default function Main() {
    return (
        <>
            <Appbar />
            <Box classes={{ root: styles.box }}>
                <p style={{fontSize:"45px"}}>Trade  Season is upon us</p>
                <p>The NBA off-season is rapidly approaching, see what <br/>draft and trade scenarios are possible this summer.</p>
                <Box classes={{root:styles.flexi}}>
                    <Box m={2} ><img style={{ marginRight: "20px" }}width="20px"src="https://as1.ftcdn.net/jpg/02/84/46/60/500_F_284466038_lOHcM8pRGyigojkyV2M9CSQpimCTcqeD.jpg"alt="fire"/>Fire up the Trade Machine</Box>
                    <Box m={2}><img style={{ marginRight: "20px" }} width="20px" src="https://as1.ftcdn.net/jpg/02/47/18/18/500_F_247181873_75ugyQ1PxoKDogEh7yWzyundRR7k4eA1.jpg"alt="rocket"/>Launch Mock draft simulator</Box>
                    <Box m={2}><img style={{ marginRight: "20px" }} width="20px" src="https://www.flaticon.com/svg/static/icons/svg/2620/2620876.svg"alt="draft"/>create a draft big board</Box>
                </Box>
            </Box>
            <Box m={4}>
            <CardBox/>
            </Box>
            <Box m={3} classes={{ root: styles.downSide }}>
                <Box classes={{ root: styles.leftSide }}>
                <h2>Latest news about the site</h2>
                    <hr />
                    
                    <Box m={5}>
                        <p style={{ color: "rgba(0, 0, 0, 0.87)",fontSize:"24px"}}>New Draft Tools</p>
                        <p>October 24, 2020 by Zach @tradenba1</p>
                        <p>TradeNBA has now expanded into providing resources for the NBA draft! With similar
                            atures as our trade machine, you can share, rate and comment on your draft creations...</p>
                        <Button classes={{ root: styles.read }}variant="outlined">Read More</Button>    
                    </Box>
                    <Box m={5}>
                        <p style={{ color: "rgba(0, 0, 0, 0.87)", fontSize: "24px" }}>Trade Machine Updates</p>
                        <p>May 30, 2020 by Zach @tradenba1</p>
                        <p>The site has gone through another huge update. The sections below will recap what has been updated and the new features that have been added. This new update should improve performance across the site as well as provide you with an abundance of new information and data you may be interested in...</p>
                        <Button classes={{ root: styles.read }} variant="outlined">Read More</Button>
                    </Box>
                    <Box m={5}>
                        <p style={{ color: "rgba(0, 0, 0, 0.87)", fontSize: "24px" }}>Site Redesign</p>
                        <p>December 14, 2019 by Zach @tradenba1</p>
                        <p>I am happy to announce that the new site redesign is live! I've worked over the past year to provide many of the features that have been asked for since the site's initial launch on reddit back in June 2018. There are many new features to the site, most noticeable though is the ability to now create your own user account...</p>
                        <Button classes={{ root: styles.read }} variant="outlined">Read More</Button>
                    </Box>
                    <Box m={2} p={2}classes={{ root: styles.afterDown }}>
                        <h2>Recent Users</h2>
                        <hr />
                        <Box mt={2}>
                        <Box classes={{ root: styles.main }}>
                            <Box css={{float:"left"}}>
                                <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                            </Box>
                            <Box css={{ marginTop: -10, width: "300px", marginRight: "50px" }}>

                                <p style={{fontSize:"13px"}}> ooOoo GoN(gustavogoat23)</p>
                                <p>0 GM rating, 0 trades created</p>
                            </Box>
                          
                        </Box>
                        <Box classes={{ root: styles.floating }}>Joined November 25,2020</Box>
                        </Box>
                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px" }}>

                                    <p style={{ fontSize: "13px" }}> ooOoo GoN(gustavogoat23)</p>
                                    <p>0 GM rating, 0 trades created</p>
                                </Box>

                            </Box>
                            <Box classes={{ root: styles.floating }}>Joined November 25,2020</Box>
                        </Box>
                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px" }}>

                                    <p style={{ fontSize: "13px" }}> ooOoo GoN(gustavogoat23)</p>
                                    <p>0 GM rating, 0 trades created</p>
                                </Box>

                            </Box>
                            <Box classes={{ root: styles.floating }}>Joined November 25,2020</Box>
                        </Box>
                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px" }}>

                                    <p style={{ fontSize: "13px" }}> ooOoo GoN(gustavogoat23)</p>
                                    <p>0 GM rating, 0 trades created</p>
                                </Box>

                            </Box>
                            <Box classes={{ root: styles.floating }}>Joined November 25,2020</Box>
                        </Box>
                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px" }}>

                                    <p style={{ fontSize: "13px" }}> ooOoo GoN(gustavogoat23)</p>
                                    <p>0 GM rating, 0 trades created</p>
                                </Box>

                            </Box>
                            <Box classes={{ root: styles.floating }}>Joined November 25,2020</Box>
                        </Box>
                        <hr />
                        <p style={{textAlign:"center"}}>Find the other 9,532 registered users by searching for them in the search bar</p>
                    </Box> 


                    
                    <Box classes={{ root: styles.afterDown }}>
                        <h2>Latest Transactions </h2>
                        <hr />
                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px", color:"#0c2340" }}>

                                    <p style={{ fontSize: "13px", fontWeight: "bolder" }}> ooOoo GoN(gustavogoat23)</p>
                                    <p>0 GM rating, 0 trades created</p>
                                </Box>

                            </Box>
                            <Box classes={{ root: styles.floating }}>Joined November 25,2020</Box>
                        </Box>

                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px", color:"#0c2340" }}>

                                    <p style={{ fontSize: "13px", fontWeight: "bolder"  }}> ooOoo GoN(gustavogoat23)</p>
                                    <p>0 GM rating, 0 trades created</p>
                                </Box>

                            </Box>
                            <Box classes={{ root: styles.floating }}>Joined November 25,2020</Box>
                        </Box>
                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px", color:"#0c2340" }}>

                                    <p style={{ fontSize: "13px", fontWeight: "bolder"  }}> ooOoo GoN(gustavogoat23)</p>
                                    <p>0 GM rating, 0 trades created</p>
                                </Box>

                            </Box>
                            <Box classes={{ root: styles.floating }}>Joined November 25,2020</Box>
                        </Box>
                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px", color:"#0c2340" }}>

                                    <p style={{ fontSize: "13px", fontWeight: "bolder"  }}> ooOoo GoN(gustavogoat23)</p>
                                    <p>0 GM rating, 0 trades created</p>
                                </Box>

                            </Box>
                            <Box classes={{ root: styles.floating }}>Joined November 25,2020</Box>
                        </Box>
                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px" , color:"#0c2340"}}>

                                    <p style={{ fontSize: "13px" , fontWeight: "bolder" }}> ooOoo GoN(gustavogoat23)</p>
                                    <p>0 GM rating, 0 trades created</p>
                                </Box>

                            </Box>
                            <Box classes={{ root: styles.floating }}>Joined November 25,2020</Box>
                        </Box>
                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px" , color:"#0c2340"}}>

                                    <p style={{ fontSize: "13px", fontWeight: "bolder"  }}> ooOoo GoN(gustavogoat23)</p>
                                    <p>0 GM rating, 0 trades created</p>
                                </Box>

                            </Box>
                            <Box classes={{ root: styles.floating }}>Joined November 25,2020</Box>
                        </Box>
                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px", color:"#0c2340" }}>

                                    <p style={{ fontSize: "13px", fontWeight: "bolder"  }}> ooOoo GoN(gustavogoat23)</p>
                                    <p>0 GM rating, 0 trades created</p>
                                </Box>

                            </Box>
                            <Box classes={{ root: styles.floating }}>Joined November 25,2020</Box>
                        </Box>
                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px", color:"#0c2340" }}>

                                    <p style={{ fontSize: "13px", fontWeight: "bolder"  }}> ooOoo GoN(gustavogoat23)</p>
                                    <p>0 GM rating, 0 trades created</p>
                                </Box>

                            </Box>
                            <Box classes={{ root: styles.floating }}>Joined November 25,2020</Box>
                        </Box>
                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px", color:"#0c2340" }}>

                                    <p style={{ fontSize: "13px", fontWeight: "bolder"  }}> ooOoo GoN(gustavogoat23)</p>
                                    <p>0 GM rating, 0 trades created</p>
                                </Box>

                            </Box>
                            <Box classes={{ root: styles.floating }}>Joined November 25,2020</Box>
                        </Box>
                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px", color:"#0c2340" }}>

                                    <p style={{ fontSize: "13px" , fontWeight: "bolder" }}> ooOoo GoN(gustavogoat23)</p>
                                    <p>0 GM rating, 0 trades created</p>
                                </Box>

                            </Box>
                            <Box classes={{ root: styles.floating }}>Joined November 25,2020</Box>
                        </Box>


                    </Box>
                </Box>

                
                
                <Box classes={{ root: styles.rightside }}>
                    <Box mb={4} p={1}>
                    <h2>Partners</h2>
                        <hr />
                        <Box css={{float:"left",marginRight:"5%",marginLeft:"4%"}}>
                        <img width="30px"src="https://as1.ftcdn.net/jpg/01/42/14/78/500_F_142147822_ZiophDmOhWutdcjam5w5cxLqodyI4wMT.jpg" alt="icons"/>
                          
                        </Box>

                        <Box css={{marginTop:-10}}>
                            <h3>Become a Partner</h3>
                            <p style={{marginLeft:"12%",marginTop:-10}}>Contact Us</p>
                         
                        </Box>
                    </Box>

                    <Box >
                        <Box classes={{ root: styles.rightBox }}>
                        <Box css={{marginRight:150}}>
                            <h2>Top Contracts</h2>
                        </Box>
                        <Box >
                                <p> VIEW ALL</p> 
                        </Box>
                        </Box>
                        <hr />
                        <Box>
                        <Box classes={{root:styles.main}}>
                            <Box css={{ float: "left" }}>
                            <img style={{ borderRadius: "20px",border:"1px solid grey" }}width="30px"src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man"/>
                            </Box>
                            <Box css={{ marginTop: -10, width: "300px", marginRight:"50px" }}>
                       
                            <p> Russel Westbrook</p>
                                <p>$206.7M,5 years</p>
                            </Box>
                            <Box>

                                <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px"src="https://www.flaticon.com/svg/static/icons/svg/3802/3802113.svg"alt="side"/>
                            </Box>
                            
                     
                        </Box>
                        <Box classes={{ root: styles.floating }}>UFA in 2023</Box>  
                        </Box>
                       
                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px" }}>

                                    <p> Russel Westbrook</p>
                                    <p>$206.7M,5 years</p>
                                </Box>
                                <Box>

                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3802/3802113.svg" alt="side" />
                                </Box>


                            </Box>
                            <Box classes={{ root: styles.floating }}>UFA in 2023</Box>
                        </Box>
                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px" }}>

                                    <p> Russel Westbrook</p>
                                    <p>$206.7M,5 years</p>
                                </Box>
                                <Box>

                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3802/3802113.svg" alt="side" />
                                </Box>


                            </Box>
                            <Box classes={{ root: styles.floating }}>UFA in 2023</Box>
                        </Box>

                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px" }}>

                                    <p> Russel Westbrook</p>
                                    <p>$206.7M,5 years</p>
                                </Box>
                                <Box>

                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3802/3802113.svg" alt="side" />
                                </Box>


                            </Box>
                            <Box classes={{ root: styles.floating }}>UFA in 2023</Box>
                        </Box>
                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px" }}>

                                    <p> Russel Westbrook</p>
                                    <p>$206.7M,5 years</p>
                                </Box>
                                <Box>

                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3802/3802113.svg" alt="side" />
                                </Box>


                            </Box>
                            <Box classes={{ root: styles.floating }}>UFA in 2023</Box>
                        </Box>


                        <Box mt={2}>
                            <Box classes={{ root: styles.main }}>
                                <Box css={{ float: "left" }}>
                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                                </Box>
                                <Box css={{ marginTop: -10, width: "300px", marginRight: "50px" }}>

                                    <p> Russel Westbrook</p>
                                    <p>$206.7M,5 years</p>
                                </Box>
                                <Box>

                                    <img style={{ borderRadius: "20px", border: "1px solid grey" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3802/3802113.svg" alt="side" />
                                </Box>


                            </Box>
                            <Box classes={{ root: styles.floating }}>UFA in 2023</Box>
                        </Box>
                    </Box>   
                    <Box classes={{ root: styles.twit }}>
                        <Box  css ={{marginRight:"20%"}}mr={5}>
                            <p> Twitter</p> 
                        </Box>
                        <Box  css={{width:"400px"}}>
                            <button className={styles.news}>Follow @tradenba1</button>
                            <button className={styles.news} style={{backgroundColor:"transparent"}}>1849 Followers</button>
                        </Box>
                       
                      
                    </Box>
                    <hr style={{ background: "transparent" }}/>
                    <small style={{ marginTop: "2%", color: "grey", background: "transparent" }}>TradeNBA.com Retweeted</small>
                    <Box css={{background:"transparent"}}>
                        <img style={{ borderRadius: "20px", border: "1px solid grey",float:"left",marginRight:"2%" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                        <Box m={2}><p>Cash Money<br/><small style={{color:"grey"}}>@CMoneyGB</small></p>
                            </Box>
                        <p>The media really out here trying to make ya'll <br/>believe this dude is passing up 240 million<br/> guaranteed.... LOL</p>
                        <img width="217px" src="https://pbs.twimg.com/media/EniJFJuXIAIS99O?format=jpg&name=240x240" alt="site" />
                        <img width="210px" src="https://pbs.twimg.com/media/EniJGVWXEAAJ6V4?format=jpg&name=240x240" alt="site" />
                        <br /><small style={{ float: "right", color: "grey"}}>Nov 24,2020</small>
                    </Box>
                    <small style={{ marginTop: "5%", color: "grey", background: "transparent" }}>TradeNBA.com Retweeted</small>
                    <Box css={{ background: "transparent" }}>
                        <img style={{ borderRadius: "20px", border: "1px solid grey", float: "left", marginRight: "2%" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                        <Box m={2}><p>Adriam Bonjamin<br /><small style={{ color: "grey" }}>@wojespn</small></p>
                        </Box>
                        <p> The Sacramento Kings have declined to match <br/>the Atlanta Hawks’ four-year, $72 million offer<br/> sheet for restricted free agent guard Bogdan <br/>Bogdanovic, sources tell ESPN.</p>
                   
                        <br /><small style={{ float: "right", color: "grey" }}>Nov 24,2020</small>
                    </Box>
                    <small style={{ marginTop: "5%", color: "grey", background: "transparent" }}>TradeNBA.com Retweeted</small>
                    <Box css={{ background: "transparent" }}>
                        <img style={{ borderRadius: "20px", border: "1px solid grey", float: "left", marginRight: "2%" }} width="30px" src="https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg" alt="man" />
                        <Box m={2}><p>David Fisher<br /><small style={{ color: "grey" }}>@Fish_TBW</small></p>
                        </Box>
                        <p> How I envision the folks coding @tradenba1 <br />working right now to get the site accurate.</p>
                        <img width="400px" src="https://pbs.twimg.com/tweet_video_thumb/EnnqCoCW8AEgmHn?format=jpg&name=small" alt="site" />
                        <br /><small style={{ float: "right", color: "grey" }}>Nov 24,2020</small>
                    </Box>

                    
                  
                </Box>  
            </Box>
            <Box classes={{root:styles.lastBox}}>
                <img style={{ float: "left" }}width="200px" height="100px" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="last" />
            <p style={{color:"grey"}}>This site has no official affiliation with the National Basketball Association or any other 3rd-party entities listed on this site. Google Play and the Google Play logo are trademarks of Google LLC.</p>
                <Box classes={{ root: styles.footer }}>
                    <Box><p style={{ color: "grey" }}>@2020 Trade NBA </p></Box>
                    <Box><p style={{ color:"#0c2340"}}>privacy policy </p></Box>
                    <Box><p style={{ color: "#0c2340" }}>Terms and Condition </p></Box>
                </Box>
            </Box>
        </>
    )
}



  