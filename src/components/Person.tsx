import { useState } from 'react'
interface Props{
 name: string;
 age: number;
 isMarried : boolean;
 gender: string;
}

export const Person=(props:Props)=>{
    const [bio,setBio]=useState<string | null>(null);
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setBio(event.target.value);
    }
   return(
    <div>
        
            <>
            <h1>{props.name} says hi</h1>
            <h2>{props.gender == "f" ? "she"  : "he "} is {props.age} years old</h2>
            <h3>and is {props.isMarried ? " married":" unmarried"}</h3>
            <p>
                 {!bio ? "Bio unavailable. Please enter you Bio" : "BIO: "+ bio}
            </p>
            </>
            
        <input onChange={handleChange}></input>
    </div>
        
       
    );
   
};