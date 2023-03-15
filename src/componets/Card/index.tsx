import { FC, memo } from "react"
import { CardProps } from "./types";
import imgTest from '../../assets/wp6507378.jpg'
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
    CustomImg
} from "./styles";

const CardCharacter: FC<CardProps> = ({
    ...props
}) => {
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
                        <Typography
                        >
                            <Link
                            >
                                {props.name}
                            </Link>
                        </Typography>
                        <Typography >
                            <Link>
                                {props.species}
                            </Link>
                        </Typography>
                        <FavIconContainer
                            aria-label="Like minimal photography"
                        >
                            <FavIcon />
                        </FavIconContainer>
                    </SubContainerSubGeneral>

                </SubContainerGeneral>

                <SubContainerInfo>
                    <TypographyContainer>
                        <Typography>
                            <StatusCharacter $isDead={props.status!} />
                            {props.status}
                        </Typography>
                        <Typography>
                            ID: {props.character_id}
                        </Typography>
                    </TypographyContainer>

                    <IconsContainer>
                        <MoreButton
                        onClick={props.toggleShowMore}
                        />
                        <>
                            <CreateButton onClick={props.handleCreate} />
                            <EditButton onClick={props.handleUpdate} />
                            <DeleteButton onClick={props.handleDelete} />
                        </>
                    </IconsContainer>
                </SubContainerInfo>
            </CustomCard>
        </MainContainer>
    )
}

export default memo(CardCharacter);