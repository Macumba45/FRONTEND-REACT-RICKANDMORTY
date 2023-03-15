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
    SubContainerSubGeneral
} from "./styles";

const CardCharacter: FC<CardProps> = ({
    ...props
}) => {
    return (
        <MainContainer>
            <CustomCard>
                <SubContainerGeneral>
                    <ImgContainer>
                        {/* <img
                            src={imgTest}
                            loading="lazy"
                            alt="sdgsd"

                        /> */}
                    </ImgContainer>
                    <SubContainerSubGeneral>
                        <Typography
                        >
                            <Link
                            >
                                Soy un link
                            </Link>
                        </Typography>
                        <Typography >
                            <Link
                                href="#multiple-actions"
                            >
                                Soy un link
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
                            <StatusCharacter $isDead={false} />
                            Alive
                        </Typography>
                        <Typography>
                            ID: 123
                        </Typography>
                    </TypographyContainer>

                    <IconsContainer>
                        <MoreButton
                        // onClick={toggleOptionsMenu}
                        />
                        <>
                            <CreateButton />
                            <EditButton />
                            <DeleteButton />
                        </>
                    </IconsContainer>
                </SubContainerInfo>
            </CustomCard>
        </MainContainer>
    )
}

export default memo(CardCharacter);