import { Fragment, memo } from "react";
import Card from "../../componets/Card";
import NavBar from '../../../src/componets/NavBar';
import NavBarBottom from '../../componets/NavBarBottom';
import useLogic from './logic';

const TestCharacters = () => {
    const { characters, loading, goToDetails, handleDeleteCharacter,navigateToCreate, toggleOptionsMenu } = useLogic();
    if(loading){
        return <div>Loading...</div>
    }

    return (
        <div>
            <NavBar />
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
                    toggleShowMore={() => toggleOptionsMenu()}
                    handleDelete={() => handleDeleteCharacter(character!.id!)}
                    handleCreate={() => navigateToCreate()}
                    handleUpdate={() => goToDetails(character!.id!)}
                />
            ))}
            <NavBarBottom />
        </div>
    )
}


export default memo(TestCharacters);