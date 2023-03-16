import { memo } from "react";
import Card from "../../componets/Card";
import NavBar from '../../../src/componets/NavBar';
import NavBarBottom from '../../componets/NavBarBottom';
import useLogic from './logic';
import { MainContainer } from "./styles";

const TestCharacters = () => {
    const { characters, loading, goToDetails, navigateToEdit, handleDeleteCharacter, navigateToCreate } = useLogic();
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <NavBar />
            <MainContainer>
                {characters.map((character) => (
                    <Card
                        key={character.character_id}
                        id={character.id}
                        character_id={character.character_id}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        image={character.image}
                        createdAt={character.createdAt}
                        handleDetails={() => goToDetails(character!.id!)}
                        handleDelete={() => handleDeleteCharacter(character!.id!)}
                        handleCreate={() => navigateToCreate()}
                        handleUpdate={() => navigateToEdit(character!.id!)}
                    />
                ))}
            </MainContainer>
            <NavBarBottom />
        </div>
    )
}


export default memo(TestCharacters);