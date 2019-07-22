### introduce
a webpack loader for replace Special String

```
{
    loader: "delete-text-loader",
    options: {
        fileName: '', // for this filename, regexp or filename string
        rules: [
            {
                rule: /\/\*<NEEDDELETE>\*\/[\s\S]*\/\*<NEEDDELETE>\*\//,
                replacement: ''
            }
        ]
    }
}            
```