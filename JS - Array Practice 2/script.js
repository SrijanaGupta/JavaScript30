   // ## Array Cardio Day 2

   const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen in my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19
  const is19 = people.some((name=>{
        const date = new Date();
        const year = date.getFullYear();
        console.log(year);
        return (year - name.year >= 19);
  }));

  console.log(is19);
  // Array.prototype.every() // is everyone 19?
  const iseveryone19 = people.every((name=>{
    const date = new Date();
    const year = date.getFullYear();
    console.log(year);
    return (year - name.year >= 19);
}));

console.log(iseveryone19);

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  const comment = comments.find((id) =>id.id==823423);
  console.log(comment);


  // Array.prototype.findIndex()
  // Find the comment with this ID
  const index = comments.findIndex(comment => comment.id==823423);
  console.log(index);

  // delete the comment with the ID of 823423
  const newComments = [
      ...comments.splice(0,index),
      ...comments.splice(index,index+1)
  ];
  console.table(newComments);
