import { LinkedList } from './LinkedList';
import { CharacterCollection } from './CharacterCollection';
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumberCollection';

// const numbersCollection = new NumbersCollection([50, 203, 12, 1, -12]);

// numbersCollection.sort();

// console.log(numbersCollection.data);

// const charcollection = new CharacterCollection('xddAeD');
// charcollection.sort();

// console.log(charcollection.data);

const linkedlist = new LinkedList();

linkedlist.add(500);
linkedlist.add(-10);
linkedlist.add(-3);
linkedlist.add(4);

linkedlist.sort();

linkedlist.print();
