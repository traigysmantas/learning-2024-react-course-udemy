### Creating State

1. Simple

```
const [count, setCount] = useState(23)
```

2. Based on function (lazy evaluation). Function must be **pure** and accept **no arguments**. Called only on **initial render**

```
const [count, setCount] = useState(() => localStoraget.getItem('count'))
```

### Updating State

Make sure to **NOT** mutate objects or arrays, but to **replace** them

1. Simple

```
setCount(1000);
```

2. Based on a current state

```
setCount((c) => c + 1)
```
