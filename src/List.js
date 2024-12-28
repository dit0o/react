import React from 'react';

const List=({people})=>{

    return(
        <>
{people.map((person)=>{
const{id,name,age,image}=person;
return(
<article key={id}>
    <img src={image} alt={name}/>
    <h1>{name}</h1>
    <p>{age} years</p>
</article>
)

})}
        </>
    )
  
}

export default List;