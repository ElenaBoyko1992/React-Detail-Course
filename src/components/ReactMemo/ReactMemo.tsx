import React, {useState} from "react";

const NewMessagesCounterSecret = (props: { count: number }) => {
    console.log("counter")
    return <div>{props.count}</div>
}

const NewMessagesCounter = React.memo(NewMessagesCounterSecret);

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("users")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret);

const Example1Secret = () => {

    console.log("example")

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"]);

    const addUser = () => {
        setUsers([...users, 'Sveta' + new Date().getTime()]);
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}

export const Example1 = React.memo(Example1Secret);