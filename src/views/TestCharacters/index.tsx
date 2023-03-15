import { Fragment, memo } from "react";
import Card from "../../componets/Card";
import useLogic from './logic';

const TestCharacters = () => {
    const { characters } = useLogic();
    return (
        <div>
            {characters.map((character) => (
                <Card
                    key={character.character_id}
                    id={character.id}
                    character_id={character.character_id}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    image={character.id}
                    createdAt={character.createdAt}
                    onClick={(character.id) => )}
                />
            ))}
        </div>
    )
}


export default memo(TestCharacters);