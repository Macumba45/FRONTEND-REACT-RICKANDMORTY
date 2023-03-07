import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import { FC, memo } from 'react';
import useLogic from './logic';

const ButtonLoadingPosition: FC = () => {
    const { handleClick, isLoading } = useLogic();
    return (
        <Stack
            spacing={4}
            direction="row"
            sx={{
                margin: '0 auto',
                backgroundColor: '#fbfd7c',
                borderRadius: '10px',
                fontFamily: 'Roboto',
            }}
        >
            <Button
                sx={{
                    color: 'black',
                    border: 'none',
                    '&:hover': {
                        color: '#fbfd7c',
                        backgroundColor: 'black',
                    },
                    width: '300px',
                    height: '50px',
                    fontFamily: 'Roboto',
                    fontSize: '20px',
                    fontWeight: '400',
                    ...(isLoading && {
                        backgroundColor: 'black',
                        color: 'black',
                    }),
                }}
                loading={isLoading}
                loadingPosition="start"
                variant="outlined"
                onClick={handleClick}
            >
                {isLoading ? 'Loading' : 'Discover Rick & Morty World'}

                {/* Discover Rick & Morty World */}
            </Button>
        </Stack>
    );
};

export default memo(ButtonLoadingPosition);
