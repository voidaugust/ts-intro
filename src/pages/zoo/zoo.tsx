import HomeLink from "../../components/HomeLink"
import { TZoo } from "./animalsTypes"
import { animals } from "./animalDb"

type IsPredator = (animal: TZoo) => boolean

export default function ZooPage() {
  const isPredator: IsPredator = (animal) => animal && animal.isPredator
  const herbivoresEnclosure: TZoo[] = []
  const carnivoresEnclosure: TZoo[] = []

  animals.forEach(animal => {
    if (isPredator(animal)) carnivoresEnclosure.push(animal)
    else herbivoresEnclosure.push(animal)
  })

  return <>
    <HomeLink />
    <br/>

    <h3>Herbivore enclosure</h3>
    <ul style={listStyles}>
      {herbivoresEnclosure && herbivoresEnclosure.map(animal => (
          <li key={animal.name}>{animal.name}</li>
        ))
      }
    </ul>

    <h3>Carnivore enclosure</h3>
    <ul style={listStyles}>
      {carnivoresEnclosure && carnivoresEnclosure.map(animal => (
          <li key={animal.name}>{animal.name}</li>
        ))
      }
    </ul>
  </>
}

const listStyles = {
  margin: "0 0 24px 0",
  padding: 0,
  listStyleType: "none",
}