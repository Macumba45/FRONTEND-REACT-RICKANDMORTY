import { FC, Fragment, memo } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import { MainContainer, StatusCHaracter } from './styles';
import { CharacterProps } from './types';
import useLogic from './logic';

const CardCharacter: FC<CharacterProps> = () => {
    const { characters } = useLogic();
    return (
        <MainContainer>
            {characters.map((character) => (
                <Fragment key={character.character_id}>
                    <Card
                        variant="outlined"
                        sx={{
                            width: 320,
                            height: 400,
                            display: 'flex',
                            justifyContent: 'space-around',
                            marginRight: 2,
                            marginLeft: 2,
                            paddingTop: 0
                        }}
                    >
                        <CardOverflow>
                            <AspectRatio ratio="1.4" sx={{ backgroundSize: 'cover' }}>
                                <img
                                    src={character.image}
                                    loading="lazy"
                                    alt=""

                                />
                            </AspectRatio>
                            <IconButton
                                aria-label="Like minimal photography"
                                size="md"
                                variant="solid"
                                sx={{
                                    position: 'absolute',
                                    zIndex: 2,
                                    borderRadius: '50%',
                                    right: '1rem',
                                    bottom: 0,
                                    transform: 'translateY(50%)',
                                    backgroundColor: '#69c8ecff',
                                }}
                            >
                                <Favorite />
                            </IconButton>
                        </CardOverflow>
                        <Typography
                            level="h2"
                            sx={{ fontSize: 'md', mt: 2 }}
                        >
                            <Link
                                href="#multiple-actions"
                                overlay
                                underline="none"
                                sx={{ color: '#69c8ecff' }}
                            >
                                {character.name}
                            </Link>
                        </Typography>
                        <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                            <Link
                                href="#multiple-actions"
                                sx={{ color: '#69c8ecff' }}
                            >
                                {character.species}
                            </Link>
                        </Typography>
                        <Divider inset="context" />
                        <CardOverflow
                            variant="soft"
                            sx={{
                                display: 'flex',
                                gap: 1.5,
                                py: 1.5,
                                px: 'var(--Card-padding)',
                                bgcolor: 'background.level1',
                            }}
                        >
                            <Typography
                                level="body3"
                                sx={{
                                    fontWeight: 'md',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <StatusCHaracter
                                    style={{
                                        backgroundColor:
                                            character.status ===
                                                'Dead'
                                                ? 'red'
                                                : 'green',
                                    }}
                                />
                                {character.status}
                            </Typography>
                            <Divider orientation="vertical" />
                            <Typography
                                level="body3"
                                sx={{
                                    fontWeight: 'md',
                                    color: 'text.secondary',
                                }}
                            >
                                ID: {character.character_id}
                            </Typography>
                        </CardOverflow>
                    </Card>
                </Fragment>
            ))}
        </MainContainer>
    );
};

export default memo(CardCharacter);
