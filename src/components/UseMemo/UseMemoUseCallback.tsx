import React, {useCallback, useMemo, useState} from "react";

export const DifficultCountingExample = () => {
    const [a, setA] = useState(5);
    const [b, setB] = useState(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA *= i;
        }
        return tempResultA;
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>

}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("UsersSecret")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"]);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        setUsers([...users, 'Sveta' + new Date().getTime()]);
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"]);

    const memoizedAddBook1 = useMemo(() => {
        return () => {
            setBooks([...books, 'Angular' + new Date().getTime()]);
        }
    }, [books]) //books (зависимость) обязательно должен быть вторым параметром, иначе функция будет работать неправильно

    const memoizedAddBook2 = useCallback(() => {
        setBooks([...books, 'Angular' + new Date().getTime()]);
    }, [books]) //books (зависимость) обязательно должен быть вторым параметром, иначе функция будет работать неправильно

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
}

type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log("BooksSecret")
    return <div>
        <button onClick={props.addBook}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret);

