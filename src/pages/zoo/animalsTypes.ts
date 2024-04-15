interface Animal {
  name: string;
  color: string;
  weight: number;
  feedingTimes: number;
  birthday: Date;
  isPredator: boolean;
}

export interface Parrot extends Animal {
  doing: () => 'says blyat every 5 minutes'
}

export interface Kangaroo extends Animal {
  doing: () => 'jumps high'
}

export interface Elephant extends Animal {
  doing: () => 'has a trunk'
}

export interface Wolf extends Animal {
  doing: () => 'is full of deep wisdom'
}

export interface Deer extends Animal {
  doing: () => 'has antlers'
}

export interface Hare extends Animal {
  doing: () => 'has soft fur'
}

export interface Lynx extends Animal {
  doing: () => 'is very sly'
}

export interface Beaver extends Animal {
  doing: () => 'is kurwa'
}

export interface Giraffe extends Animal {
  doing: () => 'has long neck'
}

export interface Hedgehog extends Animal {
  doing: () => 'has needles on its back'
}

export type TZoo = 
  Parrot | Kangaroo | Elephant | Wolf | Deer | Hare | Lynx | Beaver | Giraffe | Hedgehog