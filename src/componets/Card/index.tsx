import { FC, memo, useCallback, useState } from 'react';
import { CardProps } from './types';
import {
    MainContainer,
    CustomCard,
    ImgContainer,
    FavIconContainer,
    FavIcon,
    Typography,
    Link,
    SubContainerGeneral,
    SubContainerInfo,
    StatusCharacter,
    MoreButton,
    CreateButton,
    EditButton,
    DeleteButton,
    IconsContainer,
    TypographyContainer,
    SubContainerSubGeneral,
    CustomImg,
} from './styles';

const CardCharacter: FC<CardProps> = ({ ...props }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [isFav, setIsFav] = useState(false);
    const toggleFav = useCallback(() => {
        setIsFav(!isFav);
    }, [isFav]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const toggleShowMore = useCallback(
        () => setShowOptions(!showOptions),
        [showOptions]
    );

    return (
        <MainContainer>
            <CustomCard>
                <SubContainerGeneral>
                    <ImgContainer>
                        <CustomImg
                            src={props.image}
                            loading="lazy"
                            alt="sdgsd"
                        />
                    </ImgContainer>
                    <SubContainerSubGeneral>
                        <Typography>
                            <Link>{props.name}</Link>
                        </Typography>
                        <Typography>
                            <Link>Specie: {props.species}</Link>
                        </Typography>
                        <FavIconContainer aria-label="Like minimal photography">
                            <FavIcon
                                onClick={() => {
                                    const id = props.id || '';
                                    toggleFav();
                                    props.handlePostFavs(id);
                                }}
                                $isFav={isFav}
                            />
                        </FavIconContainer>
                    </SubContainerSubGeneral>
                </SubContainerGeneral>

                <SubContainerInfo>
                    <TypographyContainer>
                        <Typography>
                            <StatusCharacter $isDead={props.status!} />
                            {props.status}
                        </Typography>
                        <Typography onClick={props.handleDetails}>
                            Go to details: {props.character_id}
                        </Typography>
                    </TypographyContainer>

                    <IconsContainer>
                        <MoreButton onClick={() => toggleShowMore()} />

                        {showOptions && (
                            <>
                                <CreateButton
                                    onClick={props.handleCreate}
                                />
                                <EditButton
                                    onClick={props.handleUpdate}
                                />
                                <DeleteButton
                                    onClick={props.handleDelete}
                                />
                            </>
                        )}
                    </IconsContainer>
                </SubContainerInfo>
            </CustomCard>
        </MainContainer>
    );
};

export default memo(CardCharacter);
