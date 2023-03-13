import { FC, memo, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useLogic from './logic';
import { MainContainer } from './styles';
import { Button, Link } from '@mui/material';
import picture from '../../../assets/wp6507378.jpg'

const CardDetailsEpisode: FC = () => {
     const { characters, loading, goToCharacterDetails } = useLogic();
     const allCharactersByID = characters?.characters;


     const [expanded, setExpanded] = useState(false);

     const handleExpandClick = () => {
          setExpanded(!expanded);
     };

     interface ExpandMoreProps extends IconButtonProps {
          expand: boolean;
     }

     const ExpandMore = styled((props: ExpandMoreProps) => {
          const { expand, ...other } = props;
          return <IconButton {...other} />;
     })(({ theme, expand }) => ({
          transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
               duration: theme.transitions.duration.shortest,
          }),
     }));

     if (loading) {
          return <p>CARGANDO</p>;
     }

     return (
          <MainContainer>
               <Card sx={{ maxWidth: 345, marginBottom: 5 }}>
                    <CardHeader
                         avatar={
                              <Avatar
                                   sx={{ bgcolor: '#69c8ecff' }}
                                   aria-label="recipe"
                              >
                                   R
                              </Avatar>
                         }
                         title={characters?.name}
                         subheader={characters?.episode}
                    />
                    <CardMedia
                         component="img"
                         height="194"
                         image={picture}
                         alt="Paella dish"
                    />
                    <CardContent>
                         <Typography variant="body2" color="text.secondary">
                              Click in one link below to know all about this
                              character!
                         </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                         <IconButton aria-label="add to favorites">
                              <FavoriteIcon />
                         </IconButton>
                         <ExpandMore
                              expand={expanded}
                              onClick={handleExpandClick}
                              aria-expanded={expanded}
                              aria-label="show more"
                         >
                              <ExpandMoreIcon />
                         </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                         <CardContent>

                              {allCharactersByID?.map((item: any) => (

                                   <Link
                                        sx={{ textDecoration: 'none' }}

                                        onClick={() => goToCharacterDetails(item)}
                                        key={item}


                                   >
                                        <Button
                                             sx={{
                                                  backgroundColor: '#69c8ecff',
                                                  marginBottom: 2,
                                                  textDecoration: 'none',
                                                  width: '300px',
                                                  color: 'white',
                                             }}
                                             variant="text"
                                        >
                                             Character: {item.split('/').pop()}
                                        </Button>
                                   </Link>
                              ))}
                         </CardContent>
                    </Collapse>
               </Card>
          </MainContainer>
     );
};

export default memo(CardDetailsEpisode);
